

javascript
import { Buffer } from "node:buffer";

// API 密钥库
const API_KEYS = [
  "AIzaSyB02l4rQupQvBHHyCgDOw_aOOIomKDzgas",
  "AIzaSyCqow0ScY63mqqbzmnopyqDMsZYfCp7ZoY",
  "AIzaSyB95dY2-qkDpy7PC5fe-jD1wNzF5vKXOGc",
  "AIzaSyBSiRXbuYwRr2T9zqu4MghU4DEufbr_ZQY",
  "AIzaSyCUDVUsHamubnX_mn2HM_ovWL-EXRWBfmc",
  "AIzaSyDFfp9igiphlpqiNDDruGocouBd63B4plE",
  "AIzaSyA3xz02P78Md_sp9P8hgUV6rnD8V5wHl_I",
  "AIzaSyAtpQKfg2_GNITxejmMo82BxDL-0QReanY",
  "AIzaSyAF3zEc8On49CzdL_Gz2pmasP2DuYAepcM",
  "AIzaSyBSOecsMHZdSIM7aHY3XNAfspJ0zbSEDtk",
  "AIzaSyDBDupYyFZHtt4Es2Pijk6q0tAnTWRjxOY",
  "AIzaSyCL5KBat0QfW7jd1bltB3_NsNKfhLZJezQ",
  "AIzaSyBcx4xPYAmmd-pBkiaUoILlO3Sheu9TFlY",
  "AIzaSyDhg7avSE295pVl7UM7nAWUUqiAgwFrwFc",
  "AIzaSyBTTjWPuQM13zCbMR10qO1SpRBjrZLcoMw",
  "AIzaSyBj-B5C-SJtA3ykqAP_U9l5TAsD4WUuprY",
  "AIzaSyAlVQtRKyZwCXeCfjwLXvYkiWo3Ly_pXuM",
  "AIzaSyB6wfHWsPrJbtP9-UkU0DDC2K2nxkTojlk",
  "AIzaSyDLje4YehvPkncvBDLmcICnYIuIbQD16fA",
  "AIzaSyByglEVo4_mzmUZAG0HZZYAa3tlxv5L6pU",
  "AIzaSyArueFajIY63zciUnkioJbd8zcxkSUeZbU",
  "AIzaSyCu4W4T_R-7n7tN8jfMoHRJWrrwk6bVn9w",
  "AIzaSyCfNKkuIBoVkl6mf0IOzyRaSi09sDxrdSk",
  "AIzaSyCnTdvWTrNk7n28Q-LwZmBZBgHCpDhJ58o",
  "AIzaSyDpxsQvpqN5s9HQpL6zNTMygBW_4tP5DsY",
  "AIzaSyDZvYljhrBE-fN7ceWaFqErAXzfyjqOIeU",
  "AIzaSyAkYvj4ukmvzo9ukqeHAybbozRUZuIaJjc",
  "AIzaSyDWtSq8If5UIEC7D2uA7sCkZhFchZ-hfjo",
  "AIzaSyDubRMgg3eUK_XRzQVTp8k_UUZSKJimS9s",
  "AIzaSyArxFRnyD9cV-qkXSDk7Buh5fkhgMCKIXE",
  "AIzaSyALaly28nOiUEXEd0H7Vs2m26dnzCvl6zU",
  "AIzaSyASlN_5kJvNXYto5BXTDvJRRvWpt_dhBW0",
  "AIzaSyDW1SVoXipuP7_szC2phk5LGThplNNHss8",
  "AIzaSyCqL5PUZFa7krmdkEfWbC7a9_EB3oIq6kg",
  "AIzaSyBK-kNydXldsryLlRwKHUYlKAbMElAt64Y",
  "AIzaSyBwycmu4Jzlqjww2gmb3VkinPX3yq3KkSA",
  "AIzaSyALhA40vulZZFYxmLMDH3lpVwRs3OhcVJc",
  "AIzaSyB6EKR-3HRDP1CYbolE65bYLBmDnhSvCJ8",
  "AIzaSyAGYwccjYZviC2yP3KlTI6C-mQDE4jWr9o",
  "AIzaSyBk0gBdR12O_7nrZnSUfEKdq-X0_ZrM8lA",
  "AIzaSyCLZ4xiFZtaNB8O2yiz-1nc3YiIC6Jr_V0",
  "AIzaSyDa1a2hAfvYQzvqGCH6Nk8qTMCk3O2aCls",
  "AIzaSyA6eiiLjxXKuH3S750cmV5Gt5GcEkLmbQ8",
  "AIzaSyCafCTw_Ja7d_ovpI57MxjmyDtTVlgintQ",
  "AIzaSyDB5lc55kkDEh7nhGRFnHy-xPeffiENFd0",
  "AIzaSyDeEXtAG4qOV9z20GgDnYRREWPnAMtjlW8",
  // 注意：您提供的列表中有一个空行，这里将其省略了
  "AIzaSyB8akwchatPzc8OG6JBd7kh-5MF798Maj4",
  "AIzaSyDrEkwdLhI0MRPN6dsjF4mJrhBReU32k8A",
  "AIzaSyDRVJGGv6hpYEItzTpiUW31ym7xM4Nj9qE",
  "AIzaSyAjmCaL-HItCJYRQi7KdzzbU4wHt0UgHHI",
  "AIzaSyCYlmI4u6zb02g2JOMgSIKHZZMU2jOrV8c",
  "AIzaSyAS_gpGU0InGtwswGtcMnydHORG43cgl5Q",
  "AIzaSyB2zdEIwMUI7c7LQYrQYD-rKxXzgi7u_-I",
  "AIzaSyBvAU1Xy6-PkxzgfIHhxhGH9v3orzxa6PU",
  "AIzaSyBhalgCaFwcubvI-B-YvIugpUgmddjpbYQ",
  "AIzaSyCTy_AjF1i3oOe3OsQyifw-M-dbMJF4XtQ",
  "AIzaSyCnVG19hbVR9CJuBV0Y3_a2cLo6oxw9oTM",
  "AIzaSyD6hgtpZrICZOFzWZwaDCyXXy_yAg3095c",
  "AIzaSyBLPrJwYPztz4NltzrOZMIXJ9kvBOXtNMg",
  "AIzaSyCGulL1HhP-jFcvJ4TAliD-hQBvxC_ijME",
  "AIzaSyBaQ_jE79BfYxip5Vmrtu-1vxpWOBcnnSA",
  "AIzaSyDNIzxAd2LD1a8DBC2PqgiLoLPC_nf11Vw",
  "AIzaSyBVEQnvx3-uwVTN1-HCgCpgp2hXyKf4eLg",
  "AIzaSyCvnLhM4XWf70enFVo9eeV8YS_crvdd18Y",
  "AIzaSyBIZfeSx6XmheGBDdc0zN3o1WwoKWDtL_k",
  "AIzaSyCkZN6AoA_cce8UMV29jscOP9t8N5JXeNg",
  "AIzaSyCMKZVt7hSY6lqhrOpbDzZM-0xKmt0ShX4",
  "AIzaSyDP1G0xfezLl7u8rMxv408h3anhTNXcvkI",
  "AIzaSyAsCGQBOD8RfuwxebgwqPPyHtAdgx3aTMo",
  "AIzaSyCMKZVt7hSY6lqhrOpbDzZM-0xKmt0ShX4",
  "AIzaSyCgk-aTLlS3mwK9zhb9tceyvn3eNXaV9YQ",
  "AIzaSyAxfmFOWgzhOSOvAhhwszbfkjM1FCgYpnA",
  "AIzaSyCHNVCrMyX5Ud0rvPy-G9DXtazD8JIbEvU",
  "AIzaSyA_iVclQbREs7FRSeAM9rno4AkexsSGK5I",
  "AIzaSyACfVIGGEdNZ1e9reywq1xBfCUdSxYXBok",
].filter(k => k); // 过滤掉可能的空字符串

// 密钥轮询全局索引
let keyIndex = 0;

// 辅助函数：获取轮询密钥
function getApiKeyForRotation(index) {
  if (API_KEYS.length === 0) return null;
  return API_KEYS[index % API_KEYS.length];
}

export default {
  async fetch (request) {
    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }

    const errHandler = (err, status = 500) => {
      console.error("错误处理程序捕获:", err);
      const errorStatus = err instanceof HttpError ? err.status : status;
      const message = err instanceof Error ? err.message : String(err);
      // 返回 JSON 格式的错误信息
      return new Response(JSON.stringify({ error: { message, type: err.name, code: errorStatus } }), fixCors({ status: errorStatus, headers: { "Content-Type": "application/json" } }));
    };

    try {
      const { pathname } = new URL(request.url);
      const auth = request.headers.get("Authorization");
      const providedKey = auth?.split(" ")[1];

      // 确定是否使用轮询模式
      // 如果没有提供 key 或者 key 是 "rotate"，则使用轮询
      const isRotating = (!providedKey || providedKey === "rotate") && API_KEYS.length > 0;

      let attempts = 0;
      const maxAttempts = isRotating ? API_KEYS.length * 3 : 1; // 最多轮询 3 轮
      let currentKeyIndex = keyIndex; // 本次请求尝试的起始索引
      let lastErrorResponse = null;

      console.log(`开始处理请求 ${pathname}. 模式: ${isRotating ? '轮询' : '指定密钥'}. 最大尝试: ${maxAttempts}.`);

      while (attempts < maxAttempts) {
        attempts++;
        let apiKeyToUse;

        if (isRotating) {
          apiKeyToUse = getApiKeyForRotation(currentKeyIndex);
          if (!apiKeyToUse) {
             console.error(`轮询尝试 ${attempts}: 无法获取密钥 (索引 ${currentKeyIndex})，密钥库可能为空或已被清空。`);
             // 如果第一次尝试就失败，则抛出错误；否则跳出循环，使用上一次错误
             if (!lastErrorResponse) throw new HttpError("No API keys available for rotation.", 500);
             break;
          }
          const currentRound = Math.floor((currentKeyIndex % (API_KEYS.length * 3)) / API_KEYS.length) + 1;
          console.log(`轮次 ${currentRound}/3 | 尝试 ${attempts}/${maxAttempts} | 密钥索引 ${currentKeyIndex % API_KEYS.length} (...${apiKeyToUse.slice(-4)})`);
        } else {
          apiKeyToUse = providedKey; // 使用用户提供的特定密钥
          if (!apiKeyToUse) {
            // 如果用户没提供密钥，并且密钥库为空，则出错
            if (API_KEYS.length === 0) {
               throw new HttpError("Authorization header is missing and no fallback API keys available.", 401);
            } else {
               // 理论上不应到达这里，因为 isRotating 会是 true
               console.warn("未提供密钥，但未进入轮询模式？回退到第一个密钥。");
               apiKeyToUse = API_KEYS[0];
            }
          }
           console.log(`尝试 ${attempts}/${maxAttempts} | 使用指定密钥 (...${apiKeyToUse.slice(-4)})`);
        }

        // 克隆请求以备重试，因为 body 只能读一次 (GET 不需要)
        const clonedRequest = request.method !== "GET" ? request.clone() : request;
        let response;

        try {
          const assert = (success) => {
            if (!success) {
              throw new HttpError(`Method ${request.method} not allowed for ${pathname}`, 405);
            }
          };

          // --- 调用核心处理逻辑 ---
          switch (true) {
            case pathname.endsWith("/chat/completions"):
              assert(request.method === "POST");
              response = await handleCompletions(await clonedRequest.json(), apiKeyToUse);
              break;
            case pathname.endsWith("/embeddings"):
              assert(request.method === "POST");
              response = await handleEmbeddings(await clonedRequest.json(), apiKeyToUse);
              break;
            case pathname.endsWith("/models"):
              assert(request.method === "GET");
              response = await handleModels(apiKeyToUse);
              break;
            default:
              // 如果是第一次尝试就路径错误，则 404
              if (attempts === 1) throw new HttpError("404 Not Found", 404);
              // 如果是重试中路径错误（理论上不应发生），则使用上一个错误
              response = lastErrorResponse ?? new HttpError("404 Not Found during retry", 404);
              break; // 跳出 switch
          }

          // --- 处理响应 ---
          if (response.ok) {
            console.log(`尝试 ${attempts} 成功 (状态码 ${response.status})`);
            if (isRotating) {
              // 成功，更新全局 keyIndex 指向当前成功的索引
              keyIndex = currentKeyIndex % API_KEYS.length;
              console.log(`轮询成功，全局 keyIndex 更新为 ${keyIndex}`);
            }
            return response; // 成功，返回响应
          }

          // --- 处理失败 ---
          console.warn(`尝试 ${attempts} 失败 (状态码 ${response.status})`);
          lastErrorResponse = response.clone(); // 保存错误响应副本

          // 检查是否应该重试 (仅在轮询模式下对特定错误重试)
          const shouldRetry = isRotating && [400, 429, 500].includes(response.status); // 仅重试 400, 429, 500

          if (shouldRetry) {
            currentKeyIndex++; // 递增索引，准备用下一个密钥重试
            // 短暂延迟避免立即重试（可选）
            // await new Promise(resolve => setTimeout(resolve, 100));
          } else {
            console.log(`非轮询模式或遇到不可重试错误 (状态码 ${response.status})，返回当前错误响应。`);
            return response; // 不重试，直接返回当前错误响应
          }

        } catch (innerErr) {
          // 捕获 handle... 函数内部或 assert 抛出的错误
          console.error(`尝试 ${attempts} 时内部处理出错:`, innerErr);
          const status = innerErr instanceof HttpError ? innerErr.status : 500;
          lastErrorResponse = errHandler(innerErr, status); // 使用 errHandler 创建错误响应

          // 检查是否应该重试 (仅在轮询模式下对特定错误重试)
          const shouldRetryFromInnerError = isRotating && [400, 429, 500].includes(status);

          if (shouldRetryFromInnerError) {
            currentKeyIndex++; // 递增索引，准备用下一个密钥重试
          } else {
            console.log(`内部错误不可重试 (状态码 ${status}) 或非轮询模式，返回错误响应。`);
            return lastErrorResponse; // 不重试，返回错误响应
          }
        }
      } // end while loop

      // 如果循环结束仍未成功
      console.error(`所有 ${maxAttempts} 次尝试 (最多 3 轮) 均失败。返回最后记录的错误。`);
      return lastErrorResponse ?? errHandler(new HttpError(`All API key attempts failed after ${maxAttempts} tries.`, 500));

    } catch (err) {
      // 捕获顶层错误 (如 new URL 失败)
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
  return { headers, status, statusText };
};

const handleOPTIONS = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    }
  });
};

const BASE_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";

// https://github.com/google-gemini/generative-ai-js/blob/cf223ff4a1ee5a2d944c53cddb8976136382bee6/src/requests/request.ts#L71
const API_CLIENT = "genai-js/0.21.0"; // npm view @google/generative-ai version
const makeHeaders = (apiKey, more) => ({
  "x-goog-api-client": API_CLIENT,
  ...(apiKey && { "x-goog-api-key": apiKey }),
  ...more
});

async function handleModels (apiKey) {
  const response = await fetch(`${BASE_URL}/${API_VERSION}/models`, {
    headers: makeHeaders(apiKey),
  });
  let { body } = response;
  if (response.ok) {
    const { models } = JSON.parse(await response.text());
    body = JSON.stringify({
      object: "list",
      data: models.map(({ name }) => ({
        id: name.replace("models/", ""),
        object: "model",
        created: 0,
        owned_by: "",
      })),
    }, null, "  ");
  }
  return new Response(body, fixCors(response));
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
  const response = await fetch(`${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify({
      "requests": req.input.map(text => ({
        model,
        content: { parts: { text } },
        outputDimensionality: req.dimensions,
      }))
    })
  });
  let { body } = response;
  if (response.ok) {
    const { embeddings } = JSON.parse(await response.text());
    body = JSON.stringify({
      object: "list",
      data: embeddings.map(({ values }, index) => ({
        object: "embedding",
        index,
        embedding: values,
      })),
      model: req.model,
    }, null, "  ");
  }
  return new Response(body, fixCors(response));
}

const DEFAULT_MODEL = "gemini-2.0-flash";
async function handleCompletions (req, apiKey) {
  let model = DEFAULT_MODEL;
  switch (true) {
    case typeof req.model !== "string":
      break;
    case req.model.startsWith("models/"):
      model = req.model.substring(7);
      break;
    case req.model.startsWith("gemini-"):
    case req.model.startsWith("gemma-"):
    case req.model.startsWith("learnlm-"):
      model = req.model;
  }
  let body = await transformRequest(req);
  switch (true) {
    case model.endsWith(":search"):
      model = model.substring(0, model.length - 7);
      // eslint-disable-next-line no-fallthrough
    case req.model.endsWith("-search-preview"):
      body.tools = body.tools || [];
      body.tools.push({googleSearch: {}});
  }
  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${model}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }
  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify(body),
  });

  body = response.body;
  if (response.ok) {
    let id = generateChatcmplId(); //"chatcmpl-8pMMaqXMK68B3nyDBrapTDrhkHBQK";
    if (req.stream) {
      body = response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream({
          transform: parseStream,
          flush: parseStreamFlush,
          buffer: "",
        }))
        .pipeThrough(new TransformStream({
          transform: toOpenAiStream,
          flush: toOpenAiStreamFlush,
          streamIncludeUsage: req.stream_options?.include_usage,
          model, id, last: [],
        }))
        .pipeThrough(new TextEncoderStream());
    } else {
      body = await response.text();
      body = processCompletionsResponse(JSON.parse(body), model, id);
    }
  }
  return new Response(body, fixCors(response));
}

const adjustProps = (schemaPart) => {
  if (typeof schemaPart !== "object" || schemaPart === null) {
    return;
  }
  if (Array.isArray(schemaPart)) {
    schemaPart.forEach(adjustProps);
  } else {
    if (schemaPart.type === "object" && schemaPart.properties && schemaPart.additionalProperties === false) {
      delete schemaPart.additionalProperties;
    }
    Object.values(schemaPart).forEach(adjustProps);
  }
};
const adjustSchema = (schema) => {
  const obj = schema[schema.type];
  delete obj.strict;
  return adjustProps(schema);
};

const harmCategory = [
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
  "HARM_CATEGORY_HARASSMENT",
  "HARM_CATEGORY_CIVIC_INTEGRITY",
];
const safetySettings = harmCategory.map(category => ({
  category,
  threshold: "BLOCK_NONE",
}));
const fieldsMap = {
  stop: "stopSequences",
  n: "candidateCount", // not for streaming
  max_tokens: "maxOutputTokens",
  max_completion_tokens: "maxOutputTokens",
  temperature: "temperature",
  top_p: "topP",
  top_k: "topK", // non-standard
  frequency_penalty: "frequencyPenalty",
  presence_penalty: "presencePenalty",
};
const transformConfig = (req) => {
  let cfg = {};
  //if (typeof req.stop === "string") { req.stop = [req.stop]; } // no need
  for (let key in req) {
    const matchedKey = fieldsMap[key];
    if (matchedKey) {
      cfg[matchedKey] = req[key];
    }
  }
  if (req.response_format) {
    switch (req.response_format.type) {
      case "json_schema":
        adjustSchema(req.response_format);
        cfg.responseSchema = req.response_format.json_schema?.schema;
        if (cfg.responseSchema && "enum" in cfg.responseSchema) {
          cfg.responseMimeType = "text/x.enum";
          break;
        }
        // eslint-disable-next-line no-fallthrough
      case "json_object":
        cfg.responseMimeType = "application/json";
        break;
      case "text":
        cfg.responseMimeType = "text/plain";
        break;
      default:
        throw new HttpError("Unsupported response_format.type", 400);
    }
  }
  return cfg;
};

const parseImg = async (url) => {
  let mimeType, data;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} (${url})`);
      }
      mimeType = response.headers.get("content-type");
      data = Buffer.from(await response.arrayBuffer()).toString("base64");
    } catch (err) {
      throw new Error("Error fetching image: " + err.toString());
    }
  } else {
    const match = url.match(/^data:(?<mimeType>.*?)(;base64)?,(?<data>.*)$/);
    if (!match) {
      throw new HttpError("Invalid image data: " + url, 400);
    }
    ({ mimeType, data } = match.groups);
  }
  return {
    inlineData: {
      mimeType,
      data,
    },
  };
};

const transformMsg = async ({ content, tool_calls, tool_call_id }, fnames) => {
  const parts = [];
  if (tool_call_id !== undefined) {
    let response;
    try {
      response = JSON.parse(content);
    } catch (err) {
      console.error("Error parsing function response content:", err);
      throw new HttpError("Invalid function response: " + content, 400);
    }
    if (typeof response !== "object" || response === null || Array.isArray(response)) {
      response = { result: response };
    }
    parts.push({
      functionResponse: {
        id: tool_call_id.startsWith("{") ? null : tool_call_id,
        name: fnames[tool_call_id],
        response,
      }
    });
    return parts;
  }
  if (tool_calls) {
    for (const tcall of tool_calls) {
      if (tcall.type !== "function") {
        throw new HttpError(`Unsupported tool_call type: "${tcall.type}"`, 400);
      }
      const { function: { arguments: argstr, name }, id } = tcall;
      let args;
      try {
        args = JSON.parse(argstr);
      } catch (err) {
        console.error("Error parsing function arguments:", err);
        throw new HttpError("Invalid function arguments: " + argstr, 400);
      }
      parts.push({
        functionCall: {
          id: id.startsWith("{") ? null : id,
          name,
          args,
        }
      });
      fnames[id] = name;
    }
    return parts;
  }
  if (!Array.isArray(content)) {
    // system, user: string
    // assistant: string or null (Required unless tool_calls is specified.)
    parts.push({ text: content });
    return parts;
  }
  // user:
  // An array of content parts with a defined type.
  // Supported options differ based on the model being used to generate the response.
  // Can contain text, image, or audio inputs.
  for (const item of content) {
    switch (item.type) {
      case "text":
        parts.push({ text: item.text });
        break;
      case "image_url":
        parts.push(await parseImg(item.image_url.url));
        break;
      case "input_audio":
        parts.push({
          inlineData: {
            mimeType: "audio/" + item.input_audio.format,
            data: item.input_audio.data,
          }
        });
        break;
      default:
        throw new HttpError(`Unknown "content" item type: "${item.type}"`, 400);
    }
  }
  if (content.every(item => item.type === "image_url")) {
    parts.push({ text: "" }); // to avoid "Unable to submit request because it must have a text parameter"
  }
  return parts;
};

const transformMessages = async (messages) => {
  if (!messages) { return; }
  const contents = [];
  let system_instruction;
  const fnames = {}; // cache function names by tool_call_id between messages
  for (const item of messages) {
    if (item.role === "system") {
      system_instruction = { parts: await transformMsg(item) };
    } else {
      if (item.role === "assistant") {
        item.role = "model";
      } else if (item.role === "tool") {
        const prev = contents[contents.length - 1];
        if (prev?.role === "function") {
          prev.parts.push(...await transformMsg(item, fnames));
          continue;
        }
        item.role = "function"; // ignored
      } else if (item.role !== "user") {
        throw HttpError(`Unknown message role: "${item.role}"`, 400);
      }
      contents.push({
        role: item.role,
        parts: await transformMsg(item, fnames)
      });
    }
  }
  if (system_instruction && contents.length === 0) {
    contents.push({ role: "model", parts: { text: " " } });
  }
  //console.info(JSON.stringify(contents, 2));
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
      tool_config = {
        function_calling_config: {
          mode: allowed_function_names ? "ANY" : req.tool_choice.toUpperCase(),
          allowed_function_names
        }
      };
    }
  }
  return { tools, tool_config };
};

const transformRequest = async (req) => ({
  ...await transformMessages(req.messages),
  safetySettings,
  generationConfig: transformConfig(req),
  ...transformTools(req),
});

const generateChatcmplId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return "chatcmpl-" + Array.from({ length: 29 }, randomChar).join("");
};

const reasonsMap = { //https://ai.google.dev/api/rest/v1/GenerateContentResponse#finishreason
  //"FINISH_REASON_UNSPECIFIED": // Default value. This value is unused.
  "STOP": "stop",
  "MAX_TOKENS": "length",
  "SAFETY": "content_filter",
  "RECITATION": "content_filter",
  //"OTHER": "OTHER",
};
const SEP = "\n\n|>";
const transformCandidates = (key, cand) => {
  const message = { role: "assistant", content: [] };
  for (const part of cand.content?.parts ?? []) {
    if (part.functionCall) {
      const fc = part.functionCall;
      message.tool_calls = message.tool_calls ?? [];
      message.tool_calls.push({
        id: fc.id ?? `{${fc.name}}`,
        type: "function",
        function: {
          name: fc.name,
          arguments: JSON.stringify(fc.args),
        }
      });
    } else {
      message.content.push(part.text);
    }
  }
  message.content = message.content.join(SEP) || null;
  return {
    index: cand.index || 0, // 0-index is absent in new -002 models response
    [key]: message,
    logprobs: null,
    finish_reason: reasonsMap[cand.finishReason] || cand.finishReason,
  };
};
const transformCandidatesMessage = transformCandidates.bind(null, "message");
const transformCandidatesDelta = transformCandidates.bind(null, "delta");

const transformUsage = (data) => ({
  completion_tokens: data.candidatesTokenCount,
  prompt_tokens: data.promptTokenCount,
  total_tokens: data.totalTokenCount
});

const processCompletionsResponse = (data, model, id) => {
  return JSON.stringify({
    id,
    choices: data.candidates.map(transformCandidatesMessage),
    created: Math.floor(Date.now()/1000),
    model,
    //system_fingerprint: "fp_69829325d0",
    object: "chat.completion",
    usage: transformUsage(data.usageMetadata),
  });
};

const responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
function parseStream (chunk, controller) {
  this.buffer += chunk;
  do {
    const match = this.buffer.match(responseLineRE);
    if (!match) { break; }
    controller.enqueue(match[1]);
    this.buffer = this.buffer.substring(match[0].length);
  } while (true); // eslint-disable-line no-constant-condition
}
function parseStreamFlush (controller) {
  if (this.buffer) {
    console.error("Invalid data:", this.buffer);
    controller.enqueue(this.buffer);
  }
}

function transformResponseStream (data, special) {
  const item = transformCandidatesDelta(data.candidates[0]);
  switch (special) {
    case "stop":
      if (item.delta.tool_calls) {
        item.finish_reason = "tool_calls";
      }
      item.delta = {};
      break;
    case "first":
      item.finish_reason = null;
      item.delta.content = "";
      delete item.delta.tool_calls;
      break;
    default:
      item.finish_reason = null;
      delete item.delta.role;
  }
  const output = {
    id: this.id,
    choices: [item],
    created: Math.floor(Date.now()/1000),
    model: this.model,
    //system_fingerprint: "fp_69829325d0",
    object: "chat.completion.chunk",
  };
  // 检查是否是流结束且需要包含 usage
  if (data.usageMetadata && this.streamIncludeUsage) {
    // 修复：使用 special 参数判断是否是停止帧
    output.usage = (special === "stop") ? transformUsage(data.usageMetadata) : null;
  }
  return "data: " + JSON.stringify(output) + delimiter;
}
const delimiter = "\n\n";
function toOpenAiStream (line, controller) {
  const transform = transformResponseStream.bind(this);
  let data;
  try {
    data = JSON.parse(line);
  } catch (err) {
    console.error(line);
    console.error(err);
    const length = this.last.length || 1; // at least 1 error msg
    const candidates = Array.from({ length }, (_, index) => ({
      finishReason: "error",
      content: { parts: [{ text: err }] },
      index,
    }));
    data = { candidates };
  }
  const cand = data.candidates[0];
  console.assert(data.candidates.length === 1, "Unexpected candidates count: %d", data.candidates.length);
  cand.index = cand.index || 0; // absent in new -002 models response
  if (!this.last[cand.index]) {
    controller.enqueue(transform(data, "first"));
  }
  this.last[cand.index] = data;
  if (cand.content) { // prevent empty data (e.g. when MAX_TOKENS)
    controller.enqueue(transform(data));
  }
}
function toOpenAiStreamFlush (controller) {
  const transform = transformResponseStream.bind(this);
  if (this.last.length > 0) {
    for (const data of this.last) {
      controller.enqueue(transform(data, "stop"));
    }
    controller.enqueue("data: [DONE]" + delimiter);
  }
}

