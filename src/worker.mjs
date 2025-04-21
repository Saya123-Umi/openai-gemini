import { Buffer } from "node:buffer";

const API_KEYS = [
"AIzaSyDgpBQgZGEKsKujlQHtBK7TAPLEqtmSKzs",
"AIzaSyBk0gBdR12O_7nrZnSUfEKdq-X0_ZrM8lA",
"AIzaSyCLZ4xiFZtaNB8O2yiz-1nc3YiIC6Jr_V0",
"AIzaSyDa1a2hAfvYQzvqGCH6Nk8qTMCk3O2aCls",
"AIzaSyA6eiiLjxXKuH3S750cmV5Gt5GcEkLmbQ8",
"AIzaSyDB5lc55kkDEh7nhGRFnHy-xPeffiENFd0",
"AIzaSyDeEXtAG4qOV9z20GgDnYRREWPnAMtjlW8",
"AIzaSyB8akwchatPzc8OG6JBd7kh-5MF798Maj4",
"AIzaSyDrEkwdLhI0MRPN6dsjF4mJrhBReU32k8A",
"AIzaSyDRVJGGv6hpYEItzTpiUW31ym7xM4Nj9qE",
"AIzaSyAjmCaL-HItCJYRQi7KdzzbU4wHt0UgHHI",
"AIzaSyAS_gpGU0InGtwswGtcMnydHORG43cgl5Q",
"AIzaSyB2zdEIwMUI7c7LQYrQYD-rKxXzgi7u_-I",
"AIzaSyBvAU1Xy6-PkxzgfIHhxhGH9v3orzxa6PU",
"AIzaSyBhalgCaFwcubvI-B-YvIugpUgmddjpbYQ",
"AIzaSyCTy_AjF1i3oOe3OsQyifw-M-dbMJF4XtQ",
"AIzaSyD6hgtpZrICZOFzWZwaDCyXXy_yAg3095c",
"AIzaSyBLPrJwYPztz4NltzrOZMIXJ9kvBOXtNMg",
"AIzaSyCGulL1HhP-jFcvJ4TAliD-hQBvxC_ijME",
"AIzaSyBaQ_jE79BfYxip5Vmrtu-1vxpWOBcnnSA",
"AIzaSyDNIzxAd2LD1a8DBC2PqgiLoLPC_nf11Vw",
"AIzaSyCvnLhM4XWf70enFVo9eeV8YS_crvdd18Y",
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
"AIzaSyAsCGQBOD8RfuwxebgwqPPyHtAdgx3aTMo",
"AIzaSyCMKZVt7hSY6lqhrOpbDzZM-0xKmt0ShX4",
"AIzaSyDgpBQgZGEKsKujlQHtBK7TAPLEqtmSKzs",
"AIzaSyD1-lJqtYCqERLljaKL6d9HN7MzgBnJGg",
"AIzaSyBKrUhzvEJzHuDRhh-k56WHohU_PAhJcI4",
"AIzaSyDbZ3lDXJUGhi5-pBZprfeMGuSxZ9gjaas",
"AIzaSyAYtrdtIz-VDz0SXwf9U-R0GhbMk7hxXmk",
"AIzaSyB_7_Ng1_mfvwg2rbB83q-xtggmTKJjyfo",
"AIzaSyA0ByZ17hulYR1hIJsdaWOKoEGFFb0-GEY",
"AIzaSyBaYBrYjHIL7aNZRq2jbO7L0LQCjG8s_qI",
"AIzaSyDomYOyqc4v43M9z6Q8JK06sM4QPR5cnZM",
"AIzaSyAPokLICFJQF0H1Bu0ACQ18lz6OcMv0lMI",
"AIzaSyAJni__hQ2ccaoj03ap2H0_KZFvrW9u2ow",
"AIzaSyCXcd_iKUQapGvT33wKH8uoidQI-XRlMC4",
"AIzaSyAH3KHmaPdZ2T0iDOFAmiD3ZGHRgXRtXEI",
"AIzaSyCYIzLniAWMWni25sHfgxBZcn865dqzYKg",
"AIzaSyAi-wwdEjb-TKVQw76FZMUXZhrD4uk_3A0",
"AIzaSyB2Hz2142fsl-dyZNTgjHTRUe-4xMe2mRc",
"AIzaSyCJFHSTxCOpdZ5DZkbkaovtR6tyMOMC0V4",
"AIzaSyCxHxIhY9csZ-ZbEfgSCrHKE-3N6guowSQ",
"AIzaSyAuzC1cS6SG8nZ-9eZ3lmsiAm8V-2HHO4",
"AIzaSyA71nRxfd96DU7B8OLYfmMsqS8OXkP7XPc",
"AIzaSyDODW82MVwhS3XbQKjr_LYzftCPOJ_zRAA",
"AIzaSyBEQ7jaDGNYLI5Ns-4_D5e1utCYxDDhgS8",
"AIzaSyDtJ2gjAepsqtxfME7N40Uws2g82I4MlBo",
"AIzaSyAZcekZzfELnL4KUjRXYg0BBMj4PjxyrpE",
"AIzaSyDwKDUIImDyC2bzVT-0V1Jr1WJgdit4FLA",
"AIzaSyBDKSVDrOGMqZcHMf-NQ9nJyT-BSMS2hYA",
"AIzaSyD1GdWdRZzb7mxYs70cEL0JxDpxeKTaG7g",
"AIzaSyAxS-mIiAMCquGp11C0x5AuiU_ZoxZ2icM",
"AIzaSyBWQv6fiqIvhUeMUS0grdDNnOBZw0acWs8",
"AIzaSyDuFIJ40NwXKNnsLy169VRwSyNHk1xg1hY",
"AIzaSyCpI0QQ-Ev3P1IxZNom6QvGcvJjBaEBBTI",
"AIzaSyCG4wLPHdpXvaquhmgbt823M4PLE8C0wrg",
"AIzaSyAu03o0umWYnsg1ocpM062GwLyWyS2_FlU",
"AIzaSyB0LncV4h3gOroG6zJZphaxX5WpHWwZ_vo",
"AIzaSyDyT03WXCRKDzCLciUFmkax0-RW_EpdmeU",
"AIzaSyAC6glJT3275jCODKIZ54ve1rOt0pJ2VUs",
"AIzaSyB50zGG71QVT8heqpcoaSJkh8d3NuVKJeI",
"AIzaSyBZ3CapyHgVjhci1S1jYPbv9djNdQtBURs",
"AIzaSyBqTNk9KYaL-o7MifpJuhHXhgp56fl-7C8",
"AIzaSyBawAfYfGUxdNYCucHsMaQtY9kgaAWhE0w",
"AIzaSyDEI4_Gt6ONfyjEqsG1TVK3GKJ-DY-nhiY",
"AIzaSyBCFR_m5COkj8T1JjuGaHBIb19eLbqPly8",
"AIzaSyDMHMV9pBdaQdov92d-1nLjWkYvnNWEx8g",
"AIzaSyBh_Rd7Ir6Wlb6-VhPMq3KCSxhU0J-iGgo",
"AIzaSyC-3BpjMYsh_-W3sJzvvxuRjf8Cfo6Nj-I",
"AIzaSyAAsKhwZp2lbXcQ72HTJ9VbxV-tvHootfw",
"AIzaSyDSSsZKgc54zo156M__dPBjdpNdISgoqF8",
"AIzaSyDHOsDmmpNz4QWTue3fesFF4LRpXFMIJss",
"AIzaSyBzcKEKTtyxKNSaa00oqkbkGSLtte5OmpU",
"AIzaSyDDMhMyKflRAOg4YQiNcciiFTdzjki9SEs",
"AIzaSyA-ahoVdk5j75NbO7Zwkzj_yH-czQy2zHA",
"AIzaSyCEGW7yJUDKzQIY8CRVvxMn-wWw9XwA9go",
"AIzaSyAJ7TCXPFdl7qKa9xnNUQVvxXUDpBP5_lE",
"AIzaSyA7pYlEsrB_iY9pxSkIxl4TNu0G_38ANWY",
"AIzaSyA-cUMynB3EOPs8epGiY_uNSmBkFFUC8RQ",
"AIzaSyArfnCweiFrOfU4__P2ysVpu2Fw-f8QNd8",
"AIzaSyDyTxCTv6fTU_rIkfc2lNYclbmqCEkBqZk",
"AIzaSyBJrnj733LUjJJlZoJj1fb0raIIvPY-diE"
];

let currentApiKeyIndex = 0;
const MAX_RETRIES_PER_KEY = 1; // 每个密钥重试一次即换下一个
const MAX_ROUNDS = 3; // 最多轮询3轮

async function fetchWithRetry (url, options) {
  let round = 0;
  let attempts = 0;
  const totalKeys = API_KEYS.length;

  while (round < MAX_ROUNDS) {
    const apiKey = API_KEYS[currentApiKeyIndex];
    const displayKey = apiKey.slice(-6);
    attempts++;

    // 将 API Key 添加到请求头
    options.headers = {
      ...options.headers,
      "x-goog-api-key": apiKey,
      // 清除可能存在的旧 Authorization 头，避免冲突
      "Authorization": undefined,
    };
    // 移除 headers 中值为 undefined 的项
    Object.keys(options.headers).forEach(key => options.headers[key] === undefined && delete options.headers[key]);


    console.log(`轮询 ${round + 1}/${MAX_ROUNDS}, 尝试 ${attempts}/${totalKeys * MAX_ROUNDS}, 密钥: ...${displayKey}`);

    try {
      const response = await fetch(url, options);

      console.log(`状态码: ${response.status}`);

      if (response.ok) {
        console.log(`成功!`);
        return response; // 成功则返回响应
      }

      // 检查是否是需要切换密钥的错误
      if ([400, 403, 429, 500].includes(response.status)) {
        console.log(`密钥 ...${displayKey} 失败，尝试下一个...`);
        currentApiKeyIndex = (currentApiKeyIndex + 1);
        if (currentApiKeyIndex >= totalKeys) {
            currentApiKeyIndex = 0; // 回到第一个密钥
            round++; // 完成一轮
            console.log(`完成第 ${round} 轮轮询`);
        }
        // 不需要显式 continue，循环会自动进行下一次迭代
      } else {
        // 对于其他非预期错误，直接抛出，不再重试
        console.error(`发生不可重试错误: ${response.status}`);
        throw new HttpError(await response.text(), response.status);
      }
    } catch (error) {
      // 网络错误或其他 fetch 异常
      console.error(`Fetch 异常: ${error.message}, 密钥: ...${displayKey}, 尝试下一个...`);
      currentApiKeyIndex = (currentApiKeyIndex + 1);
        if (currentApiKeyIndex >= totalKeys) {
            currentApiKeyIndex = 0; // 回到第一个密钥
            round++; // 完成一轮
            console.log(`完成第 ${round} 轮轮询`);
        }
      // 检查是否是 HttpError，如果是则可能是上一步抛出的不可重试错误
      if (error instanceof HttpError && ![400, 403, 429, 500].includes(error.status)) {
          throw error; // 如果不是需要切换密钥的 HttpError，则重新抛出
      }
      // 其他 fetch 异常（网络问题等）也切换密钥并重试
    }
    // 短暂延迟避免过快重试（可选）
    // await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 如果三轮循环后仍然失败
  throw new HttpError(`API 请求失败，已尝试所有密钥 ${MAX_ROUNDS} 轮`, 500);
}

export default {
  async fetch (request) {
    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }
    const errHandler = (err) => {
      console.error(err);
      // 确保返回的是 Response 对象
      const status = err instanceof HttpError ? err.status : 500;
      const message = err instanceof Error ? err.message : String(err);
      return new Response(message, fixCors({ status }));
    };
    try {
      // 不再从请求头获取 apiKey，由 fetchWithRetry 处理
      // const auth = request.headers.get("Authorization");
      // const apiKey = auth?.split(" ")[1];
      const assert = (success) => {
        if (!success) {
          throw new HttpError("The specified HTTP method is not allowed for the requested resource", 400); // 保持400状态码
        }
      };
      const { pathname } = new URL(request.url);
      switch (true) {
        case pathname.endsWith("/chat/completions"):
          assert(request.method === "POST");
          // 不再传递 apiKey 给 handleCompletions
          return handleCompletions(await request.json())
            .catch(errHandler);
        case pathname.endsWith("/embeddings"):
          assert(request.method === "POST");
           // 不再传递 apiKey 给 handleEmbeddings
          return handleEmbeddings(await request.json())
            .catch(errHandler);
        case pathname.endsWith("/models"):
          assert(request.method === "GET");
           // 不再传递 apiKey 给 handleModels
          return handleModels()
            .catch(errHandler);
        default:
          throw new HttpError("404 Not Found", 404);
      }
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

async function handleModels (/* apiKey */) {
  // 使用 fetchWithRetry 替换 fetch
  const response = await fetchWithRetry(`${BASE_URL}/${API_VERSION}/models`, {
    // headers 中不再需要手动添加 apiKey
    headers: { "x-goog-api-client": API_CLIENT },
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
async function handleEmbeddings (req/* , apiKey */) {
  if (typeof req.model !== "string") {
    throw new HttpError("model is not specified", 400);
  }
  let model;
  if (req.model.startsWith("models/")) {
    model = req.model;
  } else {
    if (!req.model.startsWith("gemini-")) {
      req.model = DEFAULT_EMBEDDINGS_MODEL;
    }
    model = "models/" + req.model;
  }
  if (!Array.isArray(req.input)) {
    req.input = [ req.input ];
  }
  // 使用 fetchWithRetry 替换 fetch
  const response = await fetchWithRetry(`${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`, {
    method: "POST",
     // headers 中不再需要手动添加 apiKey
    headers: {
       "x-goog-api-client": API_CLIENT,
       "Content-Type": "application/json"
    },
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
async function handleCompletions (req/* , apiKey */) {
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
  let bodyPayload = await transformRequest(req); // Renamed to avoid confusion with response body
  switch (true) {
    case model.endsWith(":search"):
      model = model.substring(0, model.length - 7);
      // eslint-disable-next-line no-fallthrough
    case req.model.endsWith("-search-preview"):
      bodyPayload.tools = bodyPayload.tools || [];
      bodyPayload.tools.push({googleSearch: {}});
  }
  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${model}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }
  // 使用 fetchWithRetry 替换 fetch
  const response = await fetchWithRetry(url, {
    method: "POST",
     // headers 中不再需要手动添加 apiKey
    headers: {
      "x-goog-api-client": API_CLIENT,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyPayload),
  });

  // ... rest of the function remains the same, but use 'responseBody' for clarity ...
  let responseBody = response.body; // Use a different variable name
  if (response.ok) {
    let id = "chatcmpl-" + generateId();
    const shared = {};
    if (req.stream) {
      responseBody = response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream({
          transform: parseStream,
          flush: parseStreamFlush,
          buffer: "",
          shared,
        }))
        .pipeThrough(new TransformStream({
          transform: toOpenAiStream,
          flush: toOpenAiStreamFlush,
          streamIncludeUsage: req.stream_options?.include_usage,
          model, id, last: [],
          shared,
        }))
        .pipeThrough(new TextEncoderStream());
    } else {
      responseBody = await response.text(); // Read the text from the original response
      try {
        let parsedBody = JSON.parse(responseBody); // Parse the text
        if (!parsedBody.candidates) {
          throw new Error("Invalid completion object");
        }
         // Process the parsed body
        responseBody = processCompletionsResponse(parsedBody, model, id);
      } catch (err) {
        console.error("Error parsing response:", err);
        // Return the original text body if parsing fails
        return new Response(responseBody, fixCors(response));
      }
    }
  }
  // Return the potentially transformed responseBody
  return new Response(responseBody, fixCors(response));
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

const transformFnResponse = ({ content, tool_call_id }, parts) => {
  if (!parts.calls) {
    throw new HttpError("No function calls found in the previous message", 400);
  }
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
  if (!tool_call_id) {
    throw new HttpError("tool_call_id not specified", 400);
  }
  const { i, name } = parts.calls[tool_call_id] ?? {};
  if (!name) {
    throw new HttpError("Unknown tool_call_id: " + tool_call_id, 400);
  }
  if (parts[i]) {
    throw new HttpError("Duplicated tool_call_id: " + tool_call_id, 400);
  }
  parts[i] = {
    functionResponse: {
      id: tool_call_id.startsWith("call_") ? null : tool_call_id,
      name,
      response,
    }
  };
};

const transformFnCalls = ({ tool_calls }) => {
  const calls = {};
  const parts = tool_calls.map(({ function: { arguments: argstr, name }, id, type }, i) => {
    if (type !== "function") {
      throw new HttpError(`Unsupported tool_call type: "${type}"`, 400);
    }
    let args;
    try {
      args = JSON.parse(argstr);
    } catch (err) {
      console.error("Error parsing function arguments:", err);
      throw new HttpError("Invalid function arguments: " + argstr, 400);
    }
    calls[id] = {i, name};
    return {
      functionCall: {
        id: id.startsWith("call_") ? null : id,
        name,
        args,
      }
    };
  });
  parts.calls = calls;
  return parts;
};

const transformMsg = async ({ content }) => {
  const parts = [];
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
  for (const item of messages) {
    switch (item.role) {
      case "system":
        system_instruction = { parts: await transformMsg(item) };
        continue;
      case "tool":
        // eslint-disable-next-line no-case-declarations
        let { role, parts } = contents[contents.length - 1] ?? {};
        if (role !== "function") {
          const calls = parts?.calls;
          parts = []; parts.calls = calls;
          contents.push({
            role: "function", // ignored
            parts
          });
        }
        transformFnResponse(item, parts);
        continue;
      case "assistant":
        item.role = "model";
        break;
      case "user":
        break;
      default:
        throw new HttpError(`Unknown message role: "${item.role}"`, 400);
    }
    contents.push({
      role: item.role,
      parts: item.tool_calls ? transformFnCalls(item) : await transformMsg(item)
    });
  }
  if (system_instruction) {
    if (!contents[0]?.parts.some(part => part.text)) {
      contents.unshift({ role: "user", parts: { text: " " } });
    }
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

const generateId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return Array.from({ length: 29 }, randomChar).join("");
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
        id: fc.id ?? "call_" + generateId(),
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
    finish_reason: message.tool_calls ? "tool_calls" : reasonsMap[cand.finishReason] || cand.finishReason,
    //original_finish_reason: cand.finishReason,
  };
};
const transformCandidatesMessage = transformCandidates.bind(null, "message");
const transformCandidatesDelta = transformCandidates.bind(null, "delta");

const transformUsage = (data) => ({
  completion_tokens: data.candidatesTokenCount,
  prompt_tokens: data.promptTokenCount,
  total_tokens: data.totalTokenCount
});

const checkPromptBlock = (choices, promptFeedback, key) => {
  if (choices.length) { return; }
  if (promptFeedback?.blockReason) {
    console.log("Prompt block reason:", promptFeedback.blockReason);
    if (promptFeedback.blockReason === "SAFETY") {
      promptFeedback.safetyRatings
        .filter(r => r.blocked)
        .forEach(r => console.log(r));
    }
    choices.push({
      index: 0,
      [key]: null,
      finish_reason: "content_filter",
      //original_finish_reason: data.promptFeedback.blockReason,
    });
  }
  return true;
};

const processCompletionsResponse = (data, model, id) => {
  const obj = {
    id,
    choices: data.candidates.map(transformCandidatesMessage),
    created: Math.floor(Date.now()/1000),
    model: data.modelVersion ?? model,
    //system_fingerprint: "fp_69829325d0",
    object: "chat.completion",
    usage: data.usageMetadata && transformUsage(data.usageMetadata),
  };
  if (obj.choices.length === 0 ) {
    checkPromptBlock(obj.choices, data.promptFeedback, "message");
  }
  return JSON.stringify(obj);
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
    this.shared.is_buffers_rest = true;
  }
}

const delimiter = "\n\n";
const sseline = (obj) => {
  obj.created = Math.floor(Date.now()/1000);
  return "data: " + JSON.stringify(obj) + delimiter;
};
function toOpenAiStream (line, controller) {
  let data;
  try {
    data = JSON.parse(line);
    if (!data.candidates) {
      throw new Error("Invalid completion chunk object");
    }
  } catch (err) {
    console.error("Error parsing response:", err);
    if (!this.shared.is_buffers_rest) { line =+ delimiter; }
    controller.enqueue(line); // output as is
    return;
  }
  const obj = {
    id: this.id,
    choices: data.candidates.map(transformCandidatesDelta),
    //created: Math.floor(Date.now()/1000),
    model: data.modelVersion ?? this.model,
    //system_fingerprint: "fp_69829325d0",
    object: "chat.completion.chunk",
    usage: data.usageMetadata && this.streamIncludeUsage ? null : undefined,
  };
  if (checkPromptBlock(obj.choices, data.promptFeedback, "delta")) {
    controller.enqueue(sseline(obj));
    return;
  }
  console.assert(data.candidates.length === 1, "Unexpected candidates count: %d", data.candidates.length);
  const cand = obj.choices[0];
  cand.index = cand.index || 0; // absent in new -002 models response
  const finish_reason = cand.finish_reason;
  cand.finish_reason = null;
  if (!this.last[cand.index]) { // first
    controller.enqueue(sseline({
      ...obj,
      choices: [{ ...cand, tool_calls: undefined, delta: { role: "assistant", content: "" } }],
    }));
  }
  delete cand.delta.role;
  if ("content" in cand.delta) { // prevent empty data (e.g. when MAX_TOKENS)
    controller.enqueue(sseline(obj));
  }
  cand.finish_reason = finish_reason;
  if (data.usageMetadata && this.streamIncludeUsage) {
    obj.usage = transformUsage(data.usageMetadata);
  }
  cand.delta = {};
  this.last[cand.index] = obj;
}
function toOpenAiStreamFlush (controller) {
  if (this.last.length > 0) {
    for (const obj of this.last) {
      controller.enqueue(sseline(obj));
    }
    controller.enqueue("data: [DONE]" + delimiter);
  }
}
