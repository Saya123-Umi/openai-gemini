import { Buffer } from "node:buffer";
import { TextDecoderStream, TextEncoderStream, TransformStream } from 'node:stream/web'; // Ensure streams are available

// --- START: Key Management and Rotation Logic ---
const API_KEYS = (function() {
  // Use the new key list provided by the user
  const predefinedKeys = [
    "AIzaSyAsCGQBOD8RfuwxebgwqPPyHtAdgx3aTMo", "AIzaSyCMKZVt7hSY6lqhrOpbDzZM-0xKmt0ShX4", "AIzaSyCgk-aTLlS3mwK9zhb9tceyvn3eNXaV9YQ",
    "AIzaSyAxfmFOWgzhOSOvAhhwszbfkjM1FCgYpnA", "AIzaSyCHNVCrMyX5Ud0rvPy-G9DXtazD8JIbEvU", "AIzaSyA_iVclQbREs7FRSeAM9rno4AkexsSGK5I",
    "AIzzaSyACfVIGGEdNZ1e9reywq1xBfCUdSxYXBok", "AIzaSyB02l4rQupQvBHHyCgDOw_aOOIomKDzgas", "AIzaSyCqow0ScY63mqqbzmnopyqDMsZYfCp7ZoY",
    "AIzaSyB95dY2-qkDpy7PC5fe-jD1wNzF5vKXOGc", "AIzaSyBSiRXbuYwRr2T9zqu4MghU4DEufbr_ZQY", "AIzaSyCUDVUsHamubnX_mn2HM_ovWL-EXRWBfmc",
    "AIzaSyDFfp9igiphlpqiNDDruGocouBd63B4plE", "AIzaSyA3xz02P78Md_sp9P8hgUV6rnD8V5wHl_I", "AIzaSyAtpQKfg2_GNITxejmMo82BxDL-0QReanY",
    "AIzaSyAF3zEc8On49CzdL_Gz2pmasP2DuYAepcM", "AIzaSyBSOecsMHZdSIM7aHY3XNAfspJ0zbSEDtk", "AIzaSyDBDupYyFZHtt4Es2Pijk6q0tAnTWRjxOY",
    "AIzaSyCL5KBat0QfW7jd1bltB3_NsNKfhLZJezQ", "AIzaSyBcx4xPYAmmd-pBkiaUoILlO3Sheu9TFlY", "AIzaSyDhg7avSE295pVl7UM7nAWUUqiAgwFrwFc",
    "AIzaSyBTTjWPuQM13zCbMR10qO1SpRBjrZLcoMw", "AIzaSyBj-B5C-SJtA3ykqAP_U9l5TAsD4WUuprY", "AIzaSyAlVQtRKyZwCXeCfjwLXvYkiWo3Ly_pXuM",
    "AIzaSyB6wfHWsPrJbtP9-UkU0DDC2K2nxkTojlk", "AIzaSyDLje4YehvPkncvBDLmcICnYIuIbQD16fA", "AIzaSyByglEVo4_mzmUZAG0HZZYAa3tlxv5L6pU",
    "AIzaSyArueFajIY63zciUnkioJbd8zcxkSUeZbU", "AIzaSyCu4W4T_R-7n7tN8jfMoHRJWrrwk6bVn9w", "AIzaSyCfNKkuIBoVkl6mf0IOzyRaSi09sDxrdSk",
    "AIzaSyCnTdvWTrNk7n28Q-LwZmBZBgHCpDhJ58o", "AIzaSyDpxsQvpqN5s9HQpL6zNTMygBW_4tP5DsY", "AIzaSyDZvYljhrBE-fN7ceWaFqErAXzfyjqOIeU",
    "AIzaSyAkYvj4ukmvzo9ukqeHAybbozRUZuIaJjc", "AIzaSyDWtSq8If5UIEC7D2uA7sCkZhFchZ-hfjo", "AIzaSyDubRMgg3eUK_XRzQVTp8k_UUZSKJimS9s",
    "AIzaSyArxFRnyD9cV-qkXSDk7Buh5fkhgMCKIXE", "AIzaSyALaly28nOiUEXEd0H7Vs2m26dnzCvl6zU", "AIzaSyASlN_5kJvNXYto5BXTDvJRRvWpt_dhBW0",
    "AIzaSyDW1SVoXipuP7_szC2phk5LGThplNNHss8", "AIzaSyCqL5PUZFa7krmdkEfWbC7a9_EB3oIq6kg", "AIzaSyBK-kNydXldsryLlRwKHUYlKAbMElAt64Y",
    "AIzaSyBwycmu4Jzlqjww2gmb3VkinPX3yq3KkSA", "AIzaSyALhA40vulZZFYxmLMDH3lpVwRs3OhcVJc", "AIzaSyB6EKR-3HRDP1CYbolE65bYLBmDnhSvCJ8",
    "AIzaSyAGYwccjYZviC2yP3KlTI6C-mQDE4jWr9o", "AIzaSyBk0gBdR12O_7nrZnSUfEKdq-X0_ZrM8lA", "AIzaSyCLZ4xiFZtaNB8O2yiz-1nc3YiIC6Jr_V0",
    "AIzaSyDa1a2hAfvYQzvqGCH6Nk8qTMCk3O2aCls", "AIzaSyA6eiiLjxXKuH3S750cmV5Gt5GcEkLmbQ8", "AIzaSyCafCTw_Ja7d_ovpI57MxjmyDtTVlgintQ",
    "AIzaSyDB5lc55kkDEh7nhGRFnHy-xPeffiENFd0", "AIzaSyDeEXtAG4qOV9z20GgDnYRREWPnAMtjlW8", "AIzaSyBpTgfUuODNgYKVbgtGxqCiAjd8lTtnsgI",
    "AIzaSyB8akwchatPzc8OG6JBd7kh-5MF798Maj4", "AIzaSyDrEkwdLhI0MRPN6dsjF4mJrhBReU32k8A", "AIzaSyDRVJGGv6hpYEItzTpiUW31ym7xM4Nj9qE",
    "AIzaSyAjmCaL-HItCJYRQi7KdzzbU4wHt0UgHHI", "AIzaSyCE1-Ut41Wmgip49sy4opm4s6HunbOXVzk", "AIzaSyCYlmI4u6zb02g2JOMgSIKHZZMU2jOrV8c",
    "AIzaSyAS_gpGU0InGtwswGtcMnydHORG43cgl5Q", "AIzaSyB2zdEIwMUI7c7LQYrQYD-rKxXzgi7u_-I", "AIzaSyBvAU1Xy6-PkxzgfIHhxhGH9v3orzxa6PU",
    "AIzaSyBhalgCaFwcubvI-B-YvIugpUgmddjpbYQ", "AIzaSyCTy_AjF1i3oOe3OsQyifw-M-dbMJF4XtQ", "AIzaSyCnVG19hbVR9CJuBV0Y3_a2cLo6oxw9oTM",
    "AIzaSyD6hgtpZrICZOFzWZwaDCyXXy_yAg3095c", "AIzaSyBLPrJwYPztz4NltzrOZMIXJ9kvBOXtNMg", "AIzaSyCGulL1HhP-jFcvJ4TAliD-hQBvxC_ijME",
    "AIzaSyBaQ_jE79BfYxip5Vmrtu-1vxpWOBcnnSA", "AIzaSyDNIzxAd2LD1a8DBC2PqgiLoLPC_nf11Vw", "AIzaSyBVEQnvx3-uwVTN1-HCgCpgp2hXyKf4eLg",
    "AIzaSyCvnLhM4XWf70enFVo9eeV8YS_crvdd18Y", "AIzaSyBIZfeSx6XmheGBDdc0zN3o1WwoKWDtL_k"
  ];

  // Read from GEMINI_API_KEYS env var (plural) if available
  const envKeys = typeof process !== 'undefined' && process.env ?
                  process.env.GEMINI_API_KEYS : null;

  const envKeyArray = envKeys ?
    envKeys.split(',').map(k => k.trim()).filter(k => k) :
    [];

  const allKeys = [...new Set([...predefinedKeys, ...envKeyArray])];
  console.log(`Loaded ${allKeys.length} API keys.`); // Keep this log
  return allKeys;
})();

let keyIndex = 0; // Global index for rotation start point
const RUNTIME_KEYS = new Set(API_KEYS);

function getApiKeyForRotation(index) {
    const keyArray = Array.from(RUNTIME_KEYS);
    if (keyArray.length === 0) {
        console.error("错误：密钥库中没有可用的 API 密钥。"); // Keep critical error log
        return null;
    }
    const validIndex = index % keyArray.length;
    return keyArray[validIndex];
}

function getApiKey(providedKey, currentRotationIndex) {
  if (providedKey && providedKey !== "rotate") {
    return providedKey;
  }
  return getApiKeyForRotation(currentRotationIndex);
}
// --- END: Key Management and Rotation Logic ---

// --- START: Fetch Options (No Proxy) ---
// Apply timeout directly to fetch
const fetchOptions = { signal: AbortSignal.timeout(30000) }; // 30 second timeout
// --- END: Fetch Options ---

export default {
  async fetch (request) {
    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }
    const errHandler = (err) => {
      console.error("Caught Error:", err); // Keep this top-level error log
      const status = err instanceof HttpError ? err.status : 500;
      const message = err instanceof Error ? err.message : String(err);
      return new Response(JSON.stringify({ error: { message, type: err.name, code: status } }), fixCors({ status, headers: {'Content-Type': 'application/json'} }));
    };
    try {
      const { pathname } = new URL(request.url);

      // --- START: API Request Handling with Retry Logic ---
      const auth = request.headers.get("Authorization");
      const providedKey = auth?.split(" ")[1];
      const isRotating = !providedKey || providedKey === "rotate";

      const keyArrayForMaxAttempts = Array.from(RUNTIME_KEYS);
      // Change max rounds to 100
      const maxAttempts = isRotating ? keyArrayForMaxAttempts.length * 100 : 1; // Max 100 rounds of rotation
      let lastErrorResponse = null;
      let attempts = 0;
      let currentKeyIndex = keyIndex;

      let requestBody = null;
      if (request.method === "POST") {
          try {
              const clonedRequestForBody = request.clone();
              requestBody = await clonedRequestForBody.json();
          } catch (e) {
               // console.error("Error parsing request JSON body:", e); // Remove log
               return errHandler(new HttpError("Invalid JSON in request body", 400));
          }
      }

      while (attempts < maxAttempts) {
        attempts++;
        const apiKey = getApiKey(providedKey, currentKeyIndex);

        if (!apiKey) {
          // console.error(`Attempt ${attempts}: No API key available (index ${currentKeyIndex}).`); // Remove log
          if (!lastErrorResponse) { throw new HttpError("No API key available in the key pool.", 500); }
          else { break; }
        }

        // const currentRound = keyArrayForMaxAttempts.length > 0 ? Math.floor((attempts - 1) / keyArrayForMaxAttempts.length) + 1 : 1;
        // console.log(`轮次 ${currentRound}/100 | 尝试 ${attempts}/${maxAttempts} | 密钥 ...${apiKey.slice(-6)}`); // Remove log

        let response;

        try {
          const assert = (success) => {
            if (!success) {
              throw new HttpError("The specified HTTP method is not allowed for the requested resource", 405);
            }
          };

          switch (true) {
            case pathname.endsWith("/chat/completions"):
              assert(request.method === "POST");
              if (!requestBody && request.method === "POST") {
                  // console.error("Error: requestBody is null on retry for POST request."); // Remove log
                  throw new HttpError("Internal error: Failed to retain request body for retry.", 500);
              }
              response = await handleCompletions(requestBody, apiKey);
              break;
            case pathname.endsWith("/embeddings"):
              assert(request.method === "POST");
               if (!requestBody && request.method === "POST") {
                  // console.error("Error: requestBody is null on retry for POST request."); // Remove log
                  throw new HttpError("Internal error: Failed to retain request body for retry.", 500);
              }
              response = await handleEmbeddings(requestBody, apiKey);
              break;
            case pathname.endsWith("/models"):
              assert(request.method === "GET");
              response = await handleModels(apiKey);
              break;
            default:
              if (lastErrorResponse) { response = lastErrorResponse; break; }
              throw new HttpError("404 Not Found", 404);
          }

          if (response.ok) {
            if (isRotating) {
                 keyIndex = currentKeyIndex % keyArrayForMaxAttempts.length;
            }
            return response;
          }

          // console.warn(`尝试 ${attempts} 失败，状态码: ${response.status}`); // Remove log
          lastErrorResponse = response.clone();

          // Remove optional error body logging
          // try {
          //     const errorBodyText = await response.text();
          //     console.warn(`尝试 ${attempts} 失败响应体: ${errorBodyText.substring(0, 500)}`);
          // } catch (e) {
          //     console.warn(`尝试 ${attempts} 读取失败响应体时出错: ${e.message}`);
          // }

          const shouldRetry = isRotating && [400, 429, 500, 503].includes(response.status);

          if (shouldRetry) {
            currentKeyIndex++;
          } else {
             return lastErrorResponse;
          }

        } catch (innerErr) {
           console.error(`Attempt ${attempts} internal error:`, innerErr); // Keep internal error log
           const status = innerErr instanceof HttpError ? innerErr.status : 500;
           lastErrorResponse = new Response(JSON.stringify({ error: { message: innerErr.message, type: innerErr.name, code: status } }), fixCors({ status, headers: {'Content-Type': 'application/json'} }));

           const shouldRetryFromInnerError = isRotating && (innerErr instanceof HttpError && [400, 429, 500, 503].includes(status));

           if (shouldRetryFromInnerError) {
               currentKeyIndex++;
           } else {
               return lastErrorResponse;
           }
        }
      } // end while loop

      // console.warn(`在 ${maxAttempts} 次尝试 (最多100轮轮询) 后均失败，返回最后记录的错误。`); // Remove log
      return lastErrorResponse ?? new Response(JSON.stringify({ error: { message: `All API key attempts failed after ${maxAttempts} tries (up to 100 rounds).`, type: "RetryError", code: 500 } }), fixCors({ status: 500, headers: {'Content-Type': 'application/json'} }));
      // --- END: API Request Handling with Retry Logic ---

    } catch (err) {
      return errHandler(err);
    }
  }
};

class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

const fixCors = ({ headers, status, statusText }) => {
  headers = new Headers(headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return { headers, status, statusText };
};

const handleOPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    }
  });
};

const BASE_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";

const API_CLIENT = "genai-js/0.21.0";
const makeHeaders = (apiKey, more) => ({
  "x-goog-api-client": API_CLIENT,
  ...(apiKey && { "x-goog-api-key": apiKey }),
  ...more
});

// --- Handler Functions (Modified to use fetchOptions - NO PROXY) ---

async function handleModels (apiKey) {
  const url = `${BASE_URL}/${API_VERSION}/models`;
  // console.log(`Fetching models directly from: ${url}`); // Remove log
  const response = await fetch(url, {
    headers: makeHeaders(apiKey),
    signal: AbortSignal.timeout(30000)
  });
  // console.log(`Models response status: ${response.status}`); // Remove log
  let { body } = response;
  if (response.ok) {
    const responseText = await response.text();
    try {
        const { models } = JSON.parse(responseText);
        body = JSON.stringify({
          object: "list",
          data: models.map(({ name }) => ({
            id: name.replace("models/", ""), object: "model", created: 0, owned_by: "",
          })),
        }, null, "  ");
        return new Response(body, fixCors({ status: 200, headers: {'Content-Type': 'application/json'} }));
    } catch (e) {
        // console.error("Error parsing models response:", e, "Body:", responseText); // Remove log
        throw new HttpError("Failed to parse upstream models response", 500);
    }
  } else {
      const errorBody = await response.text();
      // console.error(`Models fetch failed (${response.status}): ${errorBody}`); // Remove log
      return new Response(errorBody, fixCors(response));
  }
}

const DEFAULT_EMBEDDINGS_MODEL = "text-embedding-004";
async function handleEmbeddings (req, apiKey) {
  if (typeof req.model !== "string") {
    throw new HttpError("model is not specified", 400);
  }
  if (!Array.isArray(req.input)) {
    req.input = [ req.input ];
  }
  let model;
  if (req.model.startsWith("models/")) {
    model = req.model;
  } else {
    req.model = DEFAULT_EMBEDDINGS_MODEL;
    model = "models/" + req.model;
  }
  const url = `${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`;
  // console.log(`Fetching embeddings directly from: ${url}`); // Remove log
  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify({
      "requests": req.input.map(text => ({
        model, content: { parts: { text } }, outputDimensionality: req.dimensions,
      }))
    }),
    signal: AbortSignal.timeout(30000)
  });
  // console.log(`Embeddings response status: ${response.status}`); // Remove log
  let { body } = response;
  if (response.ok) {
     const responseText = await response.text();
     try {
        const { embeddings } = JSON.parse(responseText);
        body = JSON.stringify({
          object: "list",
          data: embeddings.map(({ values }, index) => ({
            object: "embedding", index, embedding: values,
          })),
          model: req.model,
        }, null, "  ");
        return new Response(body, fixCors({ status: 200, headers: {'Content-Type': 'application/json'} }));
     } catch (e) {
        // console.error("Error parsing embeddings response:", e, "Body:", responseText); // Remove log
        throw new HttpError("Failed to parse upstream embeddings response", 500);
     }
  } else {
      const errorBody = await response.text();
      // console.error(`Embeddings fetch failed (${response.status}): ${errorBody}`); // Remove log
      return new Response(errorBody, fixCors(response));
  }
}

const DEFAULT_MODEL = "gemini-1.5-pro-latest";
async function handleCompletions (req, apiKey) {
  let model = DEFAULT_MODEL;
  let originalModelName = req.model;
  switch(true) {
    case typeof req.model !== "string":
      originalModelName = DEFAULT_MODEL;
      break;
    case req.model.startsWith("models/"):
      model = req.model.substring(7);
      break;
    case req.model.startsWith("gemini-"):
    case req.model.startsWith("gemma-"):
    case req.model.startsWith("learnlm-"):
      model = req.model;
  }

  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${model}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }
  // console.log(`Fetching completions directly from: ${url}`); // Remove log

  const transformedRequestBody = await transformRequest(req);
  // console.log("Transformed Request Body:", JSON.stringify(transformedRequestBody, null, 2));

  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify(transformedRequestBody),
    signal: AbortSignal.timeout(30000)
  });
  // console.log(`Completions response status: ${response.status}`); // Remove log

  let body = response.body;
  if (response.ok) {
    let id = generateChatcmplId();
    if (req.stream) {
      if (!response.body) { throw new HttpError("Upstream stream response has no body", 500); }
      body = response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream({ transform: parseStream, flush: parseStreamFlush, buffer: "" }))
        .pipeThrough(new TransformStream({ transform: toOpenAiStream, flush: toOpenAiStreamFlush, streamIncludeUsage: req.stream_options?.include_usage, model: originalModelName, id, last: [] }))
        .pipeThrough(new TextEncoderStream());
      const responseHeaders = fixCors({ headers: response.headers }).headers;
      responseHeaders.set('Content-Type', 'text/event-stream');
      responseHeaders.set('Cache-Control', 'no-cache');
      responseHeaders.set('Connection', 'keep-alive');
      return new Response(body, { status: 200, headers: responseHeaders });
    } else {
      const responseText = await response.text();
      try {
          const jsonData = JSON.parse(responseText);
          body = processCompletionsResponse(jsonData, originalModelName, id);
          return new Response(body, fixCors({ status: 200, headers: {'Content-Type': 'application/json'} }));
      } catch (e) {
          // console.error("Error processing Gemini non-stream response:", e, "Body:", responseText); // Remove log
          throw new HttpError("Failed to process upstream response", 500);
      }
    }
  } else {
      const errorBody = await response.text();
      // console.error(`Completions fetch failed (${response.status}): ${errorBody}`); // Remove log
      return new Response(errorBody, fixCors(response));
  }
}

// --- Transformation Logic (Keep as is, minor adjustments below) ---

const adjustProps = (schemaPart) => {
  if (typeof schemaPart !== "object" || schemaPart === null) { return; }
  if (Array.isArray(schemaPart)) { schemaPart.forEach(adjustProps); }
  else {
    if (schemaPart.type === "object" && schemaPart.properties && schemaPart.additionalProperties === false) {
      delete schemaPart.additionalProperties;
    }
    Object.values(schemaPart).forEach(adjustProps);
  }
};
const adjustSchema = (schema) => {
  if (!schema || !schema.type || !schema[schema.type]) return;
  const obj = schema[schema.type];
  delete obj.strict;
  return adjustProps(schema);
};

const harmCategory = [
  "HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT",
  "HARM_CATEGORY_CIVIC_INTEGRITY",
];
const safetySettings = harmCategory.map(category => ({ category, threshold: "BLOCK_NONE" }));

const fieldsMap = {
  stop: "stopSequences", n: "candidateCount", max_tokens: "maxOutputTokens",
  max_completion_tokens: "maxOutputTokens", temperature: "temperature", top_p: "topP",
  top_k: "topK", frequency_penalty: "frequencyPenalty", presence_penalty: "presencePenalty",
};
const transformConfig = (req) => {
  let cfg = {};
  for (let key in req) {
    const matchedKey = fieldsMap[key];
    if (matchedKey) { cfg[matchedKey] = req[key]; }
  }
  if (req.response_format) {
    switch(req.response_format.type) {
      case "json_schema":
        adjustSchema(req.response_format);
        cfg.responseSchema = req.response_format.json_schema?.schema;
        if (cfg.responseSchema && "enum" in cfg.responseSchema) {
          cfg.responseMimeType = "text/x.enum"; break;
        }
      case "json_object": cfg.responseMimeType = "application/json"; break;
      case "text": cfg.responseMimeType = "text/plain"; break;
      default: throw new HttpError("Unsupported response_format.type", 400);
    }
  }
  return cfg;
};

const parseImg = async (url) => {
  let mimeType, data;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      // Use direct fetch for images too
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) }); // Add timeout
      if (!response.ok) { throw new Error(`${response.status} ${response.statusText} (${url})`); }
      mimeType = response.headers.get("content-type");
      data = Buffer.from(await response.arrayBuffer()).toString("base64");
    } catch (err) { throw new Error("Error fetching image: " + err.toString()); }
  } else {
    const match = url.match(/^data:(?<mimeType>.*?)(;base64)?,(?<data>.*)$/);
    if (!match) { throw new HttpError("Invalid image data: " + url, 400); }
    ({ mimeType, data } = match.groups);
  }
  return { inlineData: { mimeType, data } };
};

const transformMsg = async ({ content, tool_calls, tool_call_id }, fnames) => {
  const parts = [];
  if (tool_call_id !== undefined) {
    let response;
    try { response = JSON.parse(content); }
    catch (err) { /* console.error("Error parsing function response content:", err); */ throw new HttpError("Invalid function response: " + content, 400); }
    if (typeof response !== "object" || Array.isArray(response)) { response = { result: response }; }
    parts.push({ functionResponse: { id: tool_call_id.startsWith("{") ? null : tool_call_id, name: fnames[tool_call_id], response } });
    return parts;
  }
  if (tool_calls) {
    for (const tcall of tool_calls) {
      if (tcall.type !== "function") { throw new HttpError(`Unsupported tool_call type: "${tcall.type}"`, 400); }
      const { function: { arguments: argstr, name }, id } = tcall;
      let args;
      try { args = JSON.parse(argstr); }
      catch (err) { /* console.error("Error parsing function arguments:", err); */ throw new HttpError("Invalid function arguments: " + argstr, 400); }
      parts.push({ functionCall: { id: id.startsWith("{") ? null : id, name, args } });
      fnames[id] = name;
    }
    return parts;
  }
  if (!Array.isArray(content)) {
    parts.push({ text: content ?? "" });
    return parts;
  }
  for (const item of content) {
    switch (item.type) {
      case "text": parts.push({ text: item.text }); break;
      case "image_url": parts.push(await parseImg(item.image_url.url)); break;
      case "input_audio": parts.push({ inlineData: { mimeType: "audio/" + item.input_audio.format, data: item.input_audio.data } }); break;
      default: throw new HttpError(`Unknown "content" item type: "${item.type}"`, 400);
    }
  }
  if (content.every(item => item.type === "image_url")) { parts.push({ text: "" }); }
  return parts;
};

const transformMessages = async (messages) => {
  if (!messages) { return {}; }
  const contents = [];
  let system_instruction;
  const fnames = {};
  for (const item of messages) {
    if (item.role === "system") {
      system_instruction = { parts: await transformMsg(item, fnames) };
    } else {
      let role = item.role;
      if (role === "assistant") { role = "model"; }
      else if (role === "tool") {
        const prev = contents[contents.length - 1];
        if (prev?.role === "function") { prev.parts.push(...await transformMsg(item, fnames)); continue; }
        role = "function";
      } else if (role !== "user") { throw new HttpError(`Unknown message role: "${role}"`, 400); }
      contents.push({ role, parts: await transformMsg(item, fnames) });
    }
  }
  if (system_instruction && contents.length === 0) {
    contents.push({ role: "user", parts: [{ text: " " }] });
  }
  // if (contents.length > 0 && contents[contents.length - 1].role === 'model') {
  //     contents.push({ role: "user", parts: [{ text: " " }] });
  // }

  return { system_instruction, contents };
};

const transformTools = (req) => {
  let tools, tool_config;
  if (req.tools) {
    const funcs = req.tools.filter(tool => tool.type === "function");
    funcs.forEach(adjustSchema);
    tools = [{ function_declarations: funcs.map(schema => schema.function) }];
  }
  if (req.tool_choice) {
    const allowed_function_names = req.tool_choice?.type === "function" ? [ req.tool_choice?.function?.name ] : undefined;
    if (allowed_function_names || typeof req.tool_choice === "string") {
      tool_config = { function_calling_config: { mode: allowed_function_names ? "ANY" : req.tool_choice.toUpperCase(), allowed_function_names } };
    }
  }
  return { tools, tool_config };
};

const transformRequest = async (req) => {
    const messagesTransformed = await transformMessages(req.messages);
    return {
      ...messagesTransformed,
      safetySettings,
      generationConfig: transformConfig(req),
      ...transformTools(req),
    };
};

const generateChatcmplId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return "chatcmpl-" + Array.from({ length: 29 }, randomChar).join("");
};

const reasonsMap = {
  "STOP": "stop", "MAX_TOKENS": "length", "SAFETY": "content_filter",
  "RECITATION": "content_filter",
};
const SEP = "";
const transformCandidates = (key, cand) => {
  const message = { role: "assistant", content: null, tool_calls: undefined };
  let textParts = [];
  for (const part of cand.content?.parts ?? []) {
    if (part.functionCall) {
      const fc = part.functionCall;
      message.tool_calls = message.tool_calls ?? [];
      message.tool_calls.push({
        id: fc.id ?? `{${fc.name}}`, type: "function",
        function: { name: fc.name, arguments: JSON.stringify(fc.args) }
      });
    } else if (part.text !== undefined) {
      textParts.push(part.text);
    }
  }
  if (textParts.length > 0) {
      message.content = textParts.join(SEP);
  }
  if (!message.content && message.tool_calls) {
      message.content = null;
  } else if (!message.content && !message.tool_calls) {
      message.content = null;
  }

  return {
    index: cand.index ?? 0,
    [key]: message,
    logprobs: null,
    finish_reason: reasonsMap[cand.finishReason] || cand.finishReason || null,
  };
};
const transformCandidatesMessage = transformCandidates.bind(null, "message");
const transformCandidatesDelta = transformCandidates.bind(null, "delta");

const transformUsage = (data) => (data ? {
  completion_tokens: data.candidatesTokenCount ?? 0,
  prompt_tokens: data.promptTokenCount ?? 0,
  total_tokens: data.totalTokenCount ?? 0
} : { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 });

const processCompletionsResponse = (data, model, id) => {
  const choices = data.candidates ? data.candidates.map(transformCandidatesMessage) : [];
  return JSON.stringify({
    id, choices,
    created: Math.floor(Date.now()/1000), model,
    object: "chat.completion",
    usage: transformUsage(data.usageMetadata),
  });
};

const responseLineRE = /^data: (.*)(?:\r\n|\r|\n){2}/;
async function parseStream (chunk, controller) {
  this.buffer = (this.buffer ?? "") + chunk;
  let match;
  while ((match = this.buffer.match(responseLineRE))) {
    const line = match[1];
    this.buffer = this.buffer.substring(match[0].length);
    if (line.startsWith("[")) continue;
    try {
      const data = JSON.parse(line);
      controller.enqueue(data);
    } catch (err) {
      // console.error("Error parsing stream line:", line, err); // Remove log
    }
  }
}
async function parseStreamFlush (controller) {
    if (this.buffer) {
        // console.warn("Stream ended with non-empty buffer:", this.buffer); // Remove log
        try {
            const data = JSON.parse(this.buffer.trim());
            controller.enqueue(data);
        } catch (err) {
             // console.error("Error parsing final stream buffer:", this.buffer, err); // Remove log
        }
    }
    controller.terminate();
}


async function toOpenAiStream (data, controller) {
  const choices = data.candidates?.map(transformCandidatesDelta) ?? [];
  if (choices.length === 0) { return; }

  if (this.streamIncludeUsage && data.usageMetadata) {
      this.last[0] = transformUsage(data.usageMetadata);
  }

  controller.enqueue("data: " + JSON.stringify({
    id: this.id, object: "chat.completion.chunk", created: Math.floor(Date.now()/1000),
    model: this.model, choices, usage: null,
  }) + "\n\n");
}

async function toOpenAiStreamFlush (controller) {
    if (this.streamIncludeUsage && this.last[0]) {
         controller.enqueue("data: " + JSON.stringify({
            id: this.id, object: "chat.completion.chunk", created: Math.floor(Date.now()/1000),
            model: this.model, choices: [], usage: this.last[0],
        }) + "\n\n");
    }
    controller.enqueue("data: [DONE]\n\n");
    controller.terminate();
}
