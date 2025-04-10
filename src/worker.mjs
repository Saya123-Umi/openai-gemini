import { Buffer } from "node:buffer";

// 密钥库
const apiKeys = [
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
  "AIzaSyBk0gBdR12O_7nrZnSUfEKdq-X0_ZrM8lA",
  "AIzaSyCLZ4xiFZtaNB8O2yiz-1nc3YiIC6Jr_V0",
  "AIzaSyDa1a2hAfvYQzvqGCH6Nk8qTMCk3O2aCls",
  "AIzaSyA6eiiLjxXKuH3S750cmV5Gt5GcEkLmbQ8",
  "AIzaSyCafCTw_Ja7d_ovpI57MxjmyDtTVlgintQ",
  "AIzaSyDB5lc55kkDEh7nhGRFnHy-xPeffiENFd0",
  "AIzaSyDeEXtAG4qOV9z20GgDnYRREWPnAMtjlW8",
  "AIzaSyBpTgfUuODNgYKVbgtGxqCiAjd8lTtnsgI",
  "AIzaSyB8akwchatPzc8OG6JBd7kh-5MF798Maj4",
  "AIzaSyDrEkwdLhI0MRPN6dsjF4mJrhBReU32k8A",
  "AIzaSyDRVJGGv6hpYEItzTpiUW31ym7xM4Nj9qE",
  "AIzaSyAjmCaL-HItCJYRQi7KdzzbU4wHt0UgHHI",
  "AIzaSyCE1-Ut41Wmgip49sy4opm4s6HunbOXVzk",
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
];
const MAX_RETRIES_PER_KEY = 1; // 每个密钥在单轮内重试次数（这里设为1，即遇到错误就切换）
const MAX_ROTATION_ROUNDS = 3; // 最大轮询轮数

export default {
  async fetch (request) {
    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }

    const errHandler = (err, status = 500) => {
      console.error(err);
      const message = err instanceof Error ? err.message : String(err);
      const errorStatus = err instanceof HttpError ? err.status : status;
      return new Response(message, fixCors({ status: errorStatus }));
    };

    try {
      const auth = request.headers.get("Authorization");
      const providedApiKey = auth?.split(" ")[1];

      if (!providedApiKey && apiKeys.length === 0) {
          throw new HttpError("Authorization header is missing or empty, and no fallback keys are available.", 401);
      }

      const isRotateMode = providedApiKey === "rotate";
      let currentApiKey = providedApiKey; // 初始密钥或 "rotate"
      let apiKeyIndex = 0; // 轮询模式下的初始索引
      let rotationRound = 0; // 轮询轮数

      // 如果是 rotate 模式且密钥库不为空，设置初始索引
      if (isRotateMode && apiKeys.length > 0) {
          apiKeyIndex = Math.floor(Math.random() * apiKeys.length); // 随机开始
          currentApiKey = apiKeys[apiKeyIndex];
          console.log(`Rotate mode enabled. Starting with key index: ${apiKeyIndex}`);
      } else if (!isRotateMode && !providedApiKey && apiKeys.length > 0) {
          // 如果没有提供密钥，但有密钥库，则默认使用第一个
          currentApiKey = apiKeys[0];
          console.log("No API key provided. Using the first key from the key store.");
      } else if (!isRotateMode && !providedApiKey && apiKeys.length === 0) {
          throw new HttpError("Authorization header is missing and no keys available in store.", 401);
      } else if (!isRotateMode && providedApiKey) {
          console.log("Using provided API key.");
      } else if (isRotateMode && apiKeys.length === 0) {
          throw new HttpError("Rotate mode requested, but the API key store is empty.", 500);
      }


      const makeApiRequestWithRetry = async (url, options) => {
        let attempts = 0;
        const maxTotalAttempts = isRotateMode ? apiKeys.length * MAX_ROTATION_ROUNDS : MAX_RETRIES_PER_KEY;
        let lastError = null;

        while (attempts < maxTotalAttempts) {
          attempts++;
          let keyToUse;

          if (isRotateMode) {
            keyToUse = apiKeys[apiKeyIndex];
            console.log(`Attempt ${attempts}/${maxTotalAttempts} (Round ${rotationRound + 1}), Using key index: ${apiKeyIndex}`);
          } else {
            keyToUse = currentApiKey; // 使用固定的密钥
             console.log(`Attempt ${attempts}/${maxTotalAttempts} using provided/default key.`);
          }

          // 更新请求头中的 API Key
          const currentHeaders = makeHeaders(keyToUse, options.headers);
          const currentOptions = { ...options, headers: currentHeaders };

          try {
            const response = await fetch(url, currentOptions);

            // 检查是否需要重试的错误
            if (!response.ok && [400, 429, 500].includes(response.status)) {
              lastError = new HttpError(`API request failed with status ${response.status} using key index ${apiKeyIndex}`, response.status);
              console.warn(`Attempt ${attempts} failed: ${lastError.message}`);

              if (isRotateMode) {
                // 切换到下一个密钥
                apiKeyIndex = (apiKeyIndex + 1) % apiKeys.length;
                if (apiKeyIndex === 0) { // 完成一轮
                  rotationRound++;
                  console.log(`Completed rotation round ${rotationRound}.`);
                  if (rotationRound >= MAX_ROTATION_ROUNDS) {
                    console.error(`Max rotation rounds (${MAX_ROTATION_ROUNDS}) reached.`);
                    break; // 跳出循环
                  }
                }
                continue; // 继续下一次尝试
              } else {
                 // 非轮询模式下，如果配置了重试次数大于1，可以在这里添加重试逻辑
                 // 但当前 MAX_RETRIES_PER_KEY = 1，所以直接跳出
                 break;
              }
            }
            // 如果请求成功或遇到非重试错误，则返回响应
            return response;
          } catch (error) {
             // 网络错误等 fetch 本身的异常
            lastError = error;
            console.error(`Attempt ${attempts} failed with fetch error:`, error);
             // 网络错误通常不建议立即重试或切换key，可能需要更复杂的策略
             // 这里简单地中断重试
            break;
          }
        }

        // 如果所有尝试都失败了
        console.error(`All ${attempts-1} attempts failed.`);
        if (lastError instanceof Response) {
            return lastError; // 返回最后一个错误响应
        } else if (lastError instanceof Error) {
            throw lastError; // 抛出最后一个捕获的错误
        } else {
            throw new HttpError("API request failed after multiple retries.", 500);
        }
      };


      const assert = (success, message = "The specified HTTP method is not allowed for the requested resource", status = 400) => {
        if (!success) {
          throw new HttpError(message, status);
        }
      };

      const { pathname } = new URL(request.url);
      switch (true) {
        case pathname.endsWith("/chat/completions"):
          assert(request.method === "POST");
          return handleCompletions(await request.json(), makeApiRequestWithRetry)
            .catch(err => errHandler(err, err.status));
        case pathname.endsWith("/embeddings"):
          assert(request.method === "POST");
          return handleEmbeddings(await request.json(), makeApiRequestWithRetry)
            .catch(err => errHandler(err, err.status));
        case pathname.endsWith("/models"):
          assert(request.method === "GET");
          return handleModels(makeApiRequestWithRetry)
            .catch(err => errHandler(err, err.status));
        default:
          throw new HttpError("404 Not Found", 404);
      }
    } catch (err) {
      return errHandler(err, err.status);
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
  headers.set("Access-Control-Allow-Methods", "*"); // 允许所有方法
  headers.set("Access-Control-Allow-Headers", "*"); // 允许所有头部
  return { headers, status, statusText };
};

const handleOPTIONS = async () => {
  return new Response(null, {
    status: 204, // No Content for preflight
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // 明确列出允许的方法
      "Access-Control-Allow-Headers": "Authorization, Content-Type, x-goog-api-client", // 明确允许的头部
      "Access-Control-Max-Age": "86400", // 缓存预检结果一天
    }
  });
};

const BASE_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";

// https://github.com/google-gemini/generative-ai-js/blob/cf223ff4a1ee5a2d944c53cddb8976136382bee6/src/requests/request.ts#L71
const API_CLIENT = "genai-js/0.21.0"; // npm view @google/generative-ai version
const makeHeaders = (apiKey, more = {}) => ({
  "x-goog-api-client": API_CLIENT,
  ...(apiKey && { "x-goog-api-key": apiKey }), // 只在 apiKey 有效时添加
  ...more // 合并额外的 headers
});


async function handleModels (makeApiRequest) {
  const response = await makeApiRequest(`${BASE_URL}/${API_VERSION}/models`, {
      method: "GET",
      headers: {} // API Key 会在 makeApiRequestWithRetry 中添加
  });

  let body = await response.text(); // 获取原始响应体文本
  if (response.ok) {
    try {
        const { models } = JSON.parse(body);
        body = JSON.stringify({
          object: "list",
          data: models.map(({ name }) => ({
            id: name.replace("models/", ""),
            object: "model",
            created: 0,
            owned_by: "google", // 明确所有者
          })),
        }, null, "  ");
    } catch (e) {
        console.error("Error parsing models response:", e);
        // 保留原始 body，但可能不是有效的 JSON
        throw new HttpError("Failed to parse models response from API", 500);
    }
  }
  // 即使 !response.ok，也返回原始 body 和状态码
  return new Response(body, fixCors(response));
}

const DEFAULT_EMBEDDINGS_MODEL = "text-embedding-004";
async function handleEmbeddings (req, makeApiRequest) {
  if (typeof req.model !== "string") {
    throw new HttpError("model is not specified", 400);
  }
  if (!req.input) {
      throw new HttpError("input is missing", 400);
  }
  if (!Array.isArray(req.input)) {
    req.input = [ req.input ];
  }
  if (req.input.length === 0 || req.input.some(i => typeof i !== 'string')) {
      throw new HttpError("input must be a non-empty string or an array of non-empty strings", 400);
  }

  let model;
  if (req.model.startsWith("models/")) {
    model = req.model;
  } else {
    // 允许用户指定不同的 embedding 模型，如果不是 models/ 开头，则使用默认
    // req.model = DEFAULT_EMBEDDINGS_MODEL; // 不再强制覆盖用户指定的模型名
    model = "models/" + (req.model || DEFAULT_EMBEDDINGS_MODEL); // 如果用户没指定，用默认
  }

  const requestBody = JSON.stringify({
      "requests": req.input.map(text => ({
        model,
        content: { parts: [{ text }] }, // 确保 parts 是数组
        ...(req.dimensions && { outputDimensionality: req.dimensions }) // 仅在提供时添加维度
      }))
    });


  const response = await makeApiRequest(`${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: requestBody
  });

  let body = await response.text();
  if (response.ok) {
    try {
        const { embeddings } = JSON.parse(body);
        if (!embeddings) throw new Error("Embeddings field missing in response");
        body = JSON.stringify({
          object: "list",
          data: embeddings.map(({ values }, index) => ({
            object: "embedding",
            index,
            embedding: values,
          })),
          model: req.model || DEFAULT_EMBEDDINGS_MODEL, // 返回用户请求的模型或默认模型
          usage: { prompt_tokens: 0, total_tokens: 0 } // OpenAI 格式需要 usage
        }, null, "  ");
    } catch(e) {
        console.error("Error processing embeddings response:", e);
        throw new HttpError("Failed to process embeddings response from API", 500);
    }
  }
  return new Response(body, fixCors(response));
}

const DEFAULT_MODEL = "gemini-1.5-flash-latest"; // 更新默认模型
async function handleCompletions (req, makeApiRequest) {
  let model = DEFAULT_MODEL;
  if (typeof req.model === "string" && req.model.trim() !== "") {
      if (req.model.startsWith("models/")) {
          model = req.model.substring(7);
      } else {
          model = req.model; // 接受用户指定的模型名称
      }
  }


  let requestBodyPayload;
  try {
      requestBodyPayload = await transformRequest(req);
  } catch (e) {
      if (e instanceof HttpError) throw e;
      console.error("Error transforming request:", e);
      throw new HttpError("Failed to transform request payload", 400);
  }


  // 处理 search 功能
  let effectiveModel = model;
  if (model.endsWith(":search") || req.model?.endsWith("-search-preview")) {
      effectiveModel = model.replace(/:search$/, "").replace(/-search-preview$/, "");
      requestBodyPayload.tools = requestBodyPayload.tools || [];
      // 检查是否已存在 googleSearch 工具
      if (!requestBodyPayload.tools.some(tool => tool.googleSearch)) {
          requestBodyPayload.tools.push({googleSearch: {}});
      }
  }


  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${effectiveModel}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }

  const response = await makeApiRequest(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBodyPayload),
  });

  let responseBody = response.body;
  if (response.ok) {
    let id = generateChatcmplId();
    if (req.stream) {
      responseBody = response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream(new SseParser())) // 使用类实例
        .pipeThrough(new TransformStream(new OpenAiStreamTransformer(req.stream_options?.include_usage, model, id))) // 使用类实例
        .pipeThrough(new TextEncoderStream());
    } else {
      const responseText = await response.text();
      try {
          const jsonData = JSON.parse(responseText);
          responseBody = processCompletionsResponse(jsonData, model, id);
      } catch (e) {
          console.error("Error parsing non-stream response:", responseText);
          throw new HttpError("Failed to parse completion response from API", 500);
      }
    }
  } else {
      // 对于非 OK 响应，尝试读取并返回错误信息
      const errorText = await response.text();
      console.error(`API Error (${response.status}): ${errorText}`);
      // 返回原始错误，但应用 CORS
      return new Response(errorText, fixCors(response));
  }
  // 对于成功或流式响应，应用 CORS
  return new Response(responseBody, fixCors(response));
}

// --- Helper Classes for Streaming ---

class SseParser {
    constructor() {
        this.buffer = "";
        this.responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
    }
    transform(chunk, controller) {
        this.buffer += chunk;
        let match;
        while ((match = this.buffer.match(this.responseLineRE))) {
            controller.enqueue(match[1]);
            this.buffer = this.buffer.substring(match[0].length);
        }
    }
    flush(controller) {
        if (this.buffer) {
            // 尝试解析剩余的 buffer，以防数据不完整
            try {
                const jsonData = JSON.parse(this.buffer.replace(/^data: /, ''));
                controller.enqueue(JSON.stringify(jsonData));
            } catch (e) {
                console.error("Invalid trailing data in SSE stream:", this.buffer);
                // 可以选择 enqueue 一个错误标记或忽略
            }
        }
    }
}

class OpenAiStreamTransformer {
    constructor(streamIncludeUsage, model, id) {
        this.streamIncludeUsage = streamIncludeUsage;
        this.model = model;
        this.id = id;
        this.last = []; // 存储每个 candidate 的最后状态
        this.delimiter = "\n\n";
    }

    transformResponseStream(data, special) {
        // 确保 data.candidates 存在且是数组
        if (!data || !Array.isArray(data.candidates) || data.candidates.length === 0) {
            console.error("Invalid data structure received in stream:", data);
            // 可以选择返回一个错误块或忽略
             return ""; // 返回空字符串避免中断流
        }

        // 假设只有一个 candidate，或者只处理第一个
        const candidateIndex = data.candidates[0].index || 0;
        const item = transformCandidatesDelta(data.candidates[0]); // 使用外部函数

        switch (special) {
            case "stop":
                if (item.delta.tool_calls) {
                    item.finish_reason = "tool_calls";
                }
                item.delta = {}; // 清空 delta 表示结束
                break;
            case "first":
                item.finish_reason = null;
                // 确保 delta 存在，即使内容为空
                item.delta = item.delta || {};
                // 如果没有 tool_calls，确保 content 存在（即使为空字符串）
                if (!item.delta.tool_calls && item.delta.content === undefined) {
                   item.delta.content = "";
                }
                // delete item.delta.tool_calls; // 不应删除，可能第一帧就有 tool_calls
                break;
            default:
                item.finish_reason = null;
                delete item.delta.role; // 非首帧不含 role
        }

        const output = {
            id: this.id,
            choices: [item],
            created: Math.floor(Date.now() / 1000),
            model: this.model,
            object: "chat.completion.chunk",
        };

        // 处理 usage
        if (data.usageMetadata && this.streamIncludeUsage && special === "stop") {
             output.usage = transformUsage(data.usageMetadata); // 使用外部函数
        } else if (this.streamIncludeUsage) {
            // 对于非 stop 帧，如果要求 usage，则发送 null
            output.usage = null;
        }


        return "data: " + JSON.stringify(output) + this.delimiter;
    }


    transform(line, controller) {
        let data;
        try {
            data = JSON.parse(line);
        } catch (err) {
            console.error("Error parsing stream line:", line, err);
            // 生成错误块
            const errorCandidate = {
                index: this.last.length, // 使用下一个索引
                finishReason: "error",
                delta: { content: `Error parsing stream: ${err.message}` }
            };
             const errorData = { candidates: [errorCandidate] };
             controller.enqueue(this.transformResponseStream(errorData, "error"));
            return;
        }

        // 确保 candidates 存在
         if (!data || !Array.isArray(data.candidates) || data.candidates.length === 0) {
            console.warn("Received stream chunk with no candidates:", data);
            return; // 忽略无效块
        }


        const cand = data.candidates[0];
        const index = cand.index === undefined ? 0 : cand.index; // 处理 index 可能为 undefined 的情况

        // 确保 this.last 数组足够大
        while (this.last.length <= index) {
            this.last.push(null);
        }


        if (!this.last[index]) { // 该 candidate 的第一帧
            controller.enqueue(this.transformResponseStream(data, "first"));
        }

        this.last[index] = data; // 存储最后状态

        // 只有当 candidate 包含实际内容或 tool_calls 时才发送普通帧
        if (cand.content || cand.tool_calls || (cand.content?.parts && cand.content.parts.length > 0) || (cand.functionCall)) {
             controller.enqueue(this.transformResponseStream(data));
        } else if (cand.finishReason && !this.last[index]?.finishReason) {
             // 如果只有 finishReason 变化，也可能需要发送（取决于 OpenAI 行为）
             // 但通常 finishReason 会在最后一块发送，由 flush 处理
        }
    }

    flush(controller) {
        if (this.last.length > 0) {
            this.last.forEach((data, index) => {
                if (data && !data.finishReason) { // 如果最后一块没有 finishReason，手动添加
                   // data.finishReason = "stop"; // 或者基于最后内容判断
                }
                if (data) { // 确保 data 存在
                   controller.enqueue(this.transformResponseStream(data, "stop"));
                }
            });
            controller.enqueue("data: [DONE]" + this.delimiter);
        } else {
             // 如果从未收到有效数据，也发送 DONE
             controller.enqueue("data: [DONE]" + this.delimiter);
        }
    }
}


// --- Transformation Logic ---

const adjustProps = (schemaPart) => {
  if (typeof schemaPart !== "object" || schemaPart === null) {
    return;
  }
  if (Array.isArray(schemaPart)) {
    schemaPart.forEach(adjustProps);
  } else {
    // Gemini 不支持 additionalProperties: false，移除它
    if (schemaPart.type === "object" && schemaPart.properties && schemaPart.additionalProperties === false) {
      delete schemaPart.additionalProperties;
    }
    // 递归处理所有子属性
    Object.values(schemaPart).forEach(adjustProps);
  }
};
const adjustSchema = (schema) => {
    if (!schema || !schema.type || !schema[schema.type]) return; // 防御性检查
    const obj = schema[schema.type];
    if (obj) {
        delete obj.strict; // 移除 Gemini 不支持的 strict
    }
    adjustProps(schema); // 递归调整属性
};


const harmCategory = [
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
  "HARM_CATEGORY_HARASSMENT",
  //"HARM_CATEGORY_CIVIC_INTEGRITY", // 可能导致严格审查，可选移除
  "HARM_CATEGORY_UNSPECIFIED" // 添加未指定类别，以防万一
];
const safetySettings = harmCategory.map(category => ({
  category,
  threshold: "BLOCK_NONE", // 设置为不阻止
}));

const fieldsMap = {
  stop: "stopSequences",
  n: "candidateCount", // not for streaming
  max_tokens: "maxOutputTokens",
  // max_completion_tokens: "maxOutputTokens", // 重复，移除
  temperature: "temperature",
  top_p: "topP",
  top_k: "topK", // non-standard but supported by Gemini
  // frequency_penalty: "frequencyPenalty", // Gemini 不直接支持
  // presence_penalty: "presencePenalty", // Gemini 不直接支持
};
const transformConfig = (req) => {
  let cfg = {};
  for (let key in req) {
    const matchedKey = fieldsMap[key];
    if (matchedKey) {
        // 验证值类型
        const value = req[key];
         if (key === 'temperature' && (value < 0 || value > 2)) continue; // Gemini temp range [0, 2]
         if (key === 'top_p' && (value < 0 || value > 1)) continue;
         if (key === 'top_k' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'max_tokens' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'n' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'stop') {
             if (typeof value === 'string') cfg[matchedKey] = [value];
             else if (Array.isArray(value) && value.every(s => typeof s === 'string')) cfg[matchedKey] = value;
             continue; // 跳过不符合类型的 stop
         }
      cfg[matchedKey] = req[key];
    }
  }

  // 处理 response_format
  if (req.response_format) {
    switch (req.response_format.type) {
      case "json_schema":
         // Gemini 的 JSON schema 支持仍在发展中，这里简化处理
         // adjustSchema(req.response_format); // 调整可能引入问题，暂时注释
         // cfg.responseSchema = req.response_format.json_schema?.schema;
         // 简单地设置为 JSON 输出模式
         cfg.responseMimeType = "application/json";
         console.warn("json_schema format requested, using standard JSON mode for Gemini.");
        break;
      case "json_object":
        cfg.responseMimeType = "application/json";
        break;
      case "text":
         // 默认即为 text/plain，无需设置
         // cfg.responseMimeType = "text/plain";
        break;
      default:
        console.warn(`Unsupported response_format type: ${req.response_format.type}. Ignoring.`);
        // 不抛出错误，而是忽略不支持的格式
        // throw new HttpError("Unsupported response_format.type", 400);
    }
  }
  return cfg;
};

const parseImg = async (url) => {
  let mimeType, data;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const response = await fetch(url); // 注意：Worker 中 fetch 外部 URL 可能受限或需要配置
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText} (${url})`);
      }
      mimeType = response.headers.get("content-type");
      if (!mimeType) throw new Error("Content-Type header missing for image URL");
      // 限制图片大小，例如 10MB
      const contentLength = response.headers.get("content-length");
      if (contentLength && parseInt(contentLength, 10) > 10 * 1024 * 1024) {
          throw new Error("Image size exceeds the 10MB limit.");
      }
      const buffer = await response.arrayBuffer();
       if (buffer.byteLength > 10 * 1024 * 1024) { // 双重检查
           throw new Error("Image size exceeds the 10MB limit.");
       }
      data = Buffer.from(buffer).toString("base64");
    } catch (err) {
      console.error("Error fetching image:", err);
      throw new HttpError("Error fetching or processing image URL: " + err.message, 400);
    }
  } else if (url.startsWith("data:")) {
    const match = url.match(/^data:(?<mimeType>image\/.*?)(?:;base64)?,(?<data>.*)$/); // 更严格匹配 image MIME
    if (!match || !match.groups.mimeType || !match.groups.data) {
      throw new HttpError("Invalid image data URI format.", 400);
    }
    ({ mimeType, data } = match.groups);
     // 检查 base64 数据大小
     const dataLength = data.length * 3 / 4; // 估算原始数据大小
     if (dataLength > 10 * 1024 * 1024) {
         throw new HttpError("Image size in data URI exceeds the 10MB limit.");
     }
  } else {
      throw new HttpError("Unsupported image URL format. Must be http(s) or data URI.", 400);
  }
  return {
    inlineData: {
      mimeType,
      data,
    },
  };
};

const transformMsg = async ({ content, tool_calls, tool_call_id, name }, fnames) => {
  const parts = [];

  // 处理 tool (function) call response
  if (tool_call_id !== undefined) {
    let responseContent;
    try {
        // OpenAI content 是字符串，Gemini 需要 object
        responseContent = typeof content === 'string' ? JSON.parse(content) : content;
        // Gemini 期望 response 是一个 object
        if (typeof responseContent !== 'object' || responseContent === null) {
             responseContent = { result: responseContent }; // 包装简单类型
        }
    } catch (err) {
      console.error("Error parsing tool response content:", content, err);
      throw new HttpError("Invalid tool response content: " + content, 400);
    }
    const functionName = fnames[tool_call_id] || name; // 从缓存或消息中获取函数名
    if (!functionName) {
        console.error("Could not determine function name for tool call ID:", tool_call_id);
        throw new HttpError("Missing function name for tool response.", 400);
    }
    parts.push({
      functionResponse: {
        name: functionName,
        response: responseContent, // Gemini 需要 object
      }
    });
    return parts;
  }

  // 处理 assistant 发起的 tool (function) calls
  if (tool_calls) {
    for (const tcall of tool_calls) {
      if (tcall.type !== "function") {
        console.warn(`Unsupported tool_call type: "${tcall.type}". Skipping.`);
        continue; // 忽略非 function 类型
      }
      const { function: { arguments: argstr, name: funcName }, id } = tcall;
      let args;
      try {
        args = JSON.parse(argstr);
      } catch (err) {
        console.error("Error parsing function arguments:", argstr, err);
        throw new HttpError("Invalid function arguments format: " + argstr, 400);
      }
      parts.push({
        functionCall: {
          name: funcName,
          args,
        }
      });
      // 缓存函数名，供后续 tool response 使用
      fnames[id] = funcName;
    }
    // 如果 assistant 消息只包含 tool_calls，Gemini 可能需要一个空的 text part
    if (content === null || content === undefined || content === "") {
        // parts.push({ text: "" }); // 根据 Gemini API 行为决定是否需要
    } else if (typeof content === 'string' && content.trim() !== '') {
         parts.push({ text: content }); // 添加文本内容（如果存在）
    }

    return parts;
  }

  // 处理普通文本或多模态内容
  if (typeof content === 'string') {
    parts.push({ text: content });
  } else if (Array.isArray(content)) {
    for (const item of content) {
      switch (item.type) {
        case "text":
          parts.push({ text: item.text });
          break;
        case "image_url":
           try {
               parts.push(await parseImg(item.image_url.url));
           } catch (e) {
               console.error("Failed to process image_url:", e);
               // 可以选择忽略图片或抛出错误
               throw e; // 重新抛出以中断请求
           }
          break;
        // case "input_audio": // Gemini 当前 API 不直接支持 audio input in messages
        //   console.warn("Audio input in messages is not directly supported by Gemini API via this adapter. Skipping.");
        //   break;
        default:
          console.warn(`Unknown content part type: "${item.type}". Skipping.`);
          // throw new HttpError(`Unknown "content" item type: "${item.type}"`, 400);
      }
    }
    // Gemini 要求多模态输入至少有一个 text part
    if (content.length > 0 && !content.some(item => item.type === "text")) {
      parts.push({ text: "" }); // 添加空文本部分
    }
  } else if (content === null && !tool_calls) {
      // 允许 content 为 null 的 assistant 消息（如果前面有 tool_calls）
      // 但如果 content 为 null 且没有 tool_calls，这可能是无效的
      console.warn("Assistant message has null content and no tool_calls.");
      parts.push({ text: "" }); // 添加空文本以防万一
  }

  return parts;
};


const transformMessages = async (messages) => {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new HttpError("Input 'messages' must be a non-empty array.", 400);
  }

  const contents = [];
  let system_instruction;
  const fnames = {}; // 缓存 tool_call_id -> function_name

  for (let i = 0; i < messages.length; i++) {
    const item = messages[i];

    if (!item || typeof item.role !== 'string') {
        throw new HttpError(`Invalid message format at index ${i}: Missing or invalid role.`, 400);
    }


    if (item.role === "system") {
        if (system_instruction) {
             console.warn("Multiple system messages found. Only the first one will be used as system_instruction.");
             // 可以选择合并内容或忽略后续的
        } else {
            // Gemini system_instruction 只能是文本
            if (typeof item.content === 'string') {
               system_instruction = { parts: [{ text: item.content }] };
            } else {
                 console.warn("System message content is not a string. Ignoring system message.");
                 // throw new HttpError("System message content must be a string for Gemini.", 400);
            }
        }
    } else {
      let role;
      switch (item.role) {
          case "user":
              role = "user";
              break;
          case "assistant":
              role = "model";
              break;
          case "tool":
              role = "function"; // Gemini 使用 'function' 角色表示 tool response
              break;
          default:
              console.warn(`Unknown message role: "${item.role}". Skipping message at index ${i}.`);
              continue; // 跳过未知角色
              // throw new HttpError(`Unknown message role: "${item.role}"`, 400);
      }

      try {
          const parts = await transformMsg(item, fnames);
          // Gemini 要求 user/model 角色必须有 parts
          if ((role === 'user' || role === 'model') && parts.length === 0) {
              // 如果 assistant 消息只有 tool_calls 且 content 为 null/空，parts 可能为空
              if (role === 'model' && item.tool_calls && !item.content) {
                  // 允许这种情况
              } else {
                 console.warn(`Message at index ${i} resulted in empty parts for role '${role}'. Skipping.`);
                 continue; // 跳过无效消息
              }
          }

          // 合并连续的同角色消息（可选，但 Gemini 推荐）
          const prevContent = contents[contents.length - 1];
          if (prevContent && prevContent.role === role && role !== 'function') { // 不合并 tool responses
              prevContent.parts.push(...parts);
          } else {
              contents.push({ role, parts });
          }
      } catch (e) {
          console.error(`Error transforming message at index ${i}:`, e);
          if (e instanceof HttpError) throw e;
          throw new HttpError(`Failed to transform message at index ${i}: ${e.message}`, 400);
      }
    }
  }

   // Gemini 要求 contents 不能为空，且第一个不能是 model
   if (contents.length === 0) {
       // 如果只有 system message，需要添加一个空的 user message
       if (system_instruction) {
           contents.push({ role: "user", parts: [{ text: "" }] });
       } else {
          throw new HttpError("No valid user or assistant messages found.", 400);
       }
   } else if (contents[0].role === "model") {
       // 在开头插入一个空的 user message
       contents.unshift({ role: "user", parts: [{ text: "" }] });
   }


  //console.info("Transformed messages:", JSON.stringify({ system_instruction, contents }, null, 2));
  return { system_instruction, contents };
};


const transformTools = (req) => {
  let tools, tool_config;

  // 处理 tools (Function Declarations)
  if (req.tools && Array.isArray(req.tools)) {
    const funcs = req.tools.filter(tool => tool.type === "function" && tool.function);
    if (funcs.length > 0) {
        // Gemini API 可能对 schema 有特定要求，adjustSchema 可能需要更新
        // funcs.forEach(adjustSchema); // 暂时禁用调整，以防引入问题
        tools = [{ functionDeclarations: funcs.map(schema => schema.function) }];
    }
  }

  // 处理 tool_choice
  if (req.tool_choice) {
    let mode = "AUTO"; // 默认
    let allowedFunctionNames;

    if (typeof req.tool_choice === "string") {
        const choice = req.tool_choice.toUpperCase();
        if (["NONE", "AUTO", "ANY", "REQUIRED"].includes(choice)) {
            mode = choice === "REQUIRED" ? "ANY" : choice; // Gemini 没有 REQUIRED，映射到 ANY
             if (choice === "REQUIRED") console.warn("tool_choice 'required' mapped to 'ANY' for Gemini.");
        } else {
            console.warn(`Invalid string tool_choice value: "${req.tool_choice}". Using AUTO.`);
        }
    } else if (typeof req.tool_choice === 'object' && req.tool_choice.type === "function" && req.tool_choice.function?.name) {
        mode = "ANY"; // 强制调用特定函数
        allowedFunctionNames = [req.tool_choice.function.name];
    } else {
         console.warn("Invalid tool_choice object format. Using AUTO.");
    }

    tool_config = {
      functionCallingConfig: {
        mode: mode,
        ...(allowedFunctionNames && { allowedFunctionNames })
      }
    };
  }

  return { tools, tool_config };
};


const transformRequest = async (req) => {
    const { system_instruction, contents } = await transformMessages(req.messages);
    const { tools, tool_config } = transformTools(req);
    const generationConfig = transformConfig(req);

    // Gemini 不允许空的 generationConfig 或 tool_config
    const payload = {
        ...(system_instruction && { systemInstruction: system_instruction }), // 使用 systemInstruction
        contents,
        ...(tools && { tools }),
        ...(tool_config && { toolConfig: tool_config }), // 使用 toolConfig
        safetySettings, // 应用安全设置
        ...(Object.keys(generationConfig).length > 0 && { generationConfig }),
    };
    // console.log("Gemini Request Payload:", JSON.stringify(payload, null, 2));
    return payload;
};


const generateChatcmplId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return "chatcmpl-" + Array.from({ length: 29 }, randomChar).join("");
};

const reasonsMap = { //https://ai.google.dev/api/rest/v1/GenerateContentResponse#finishreason
  "FINISH_REASON_UNSPECIFIED": null, // 不映射
  "STOP": "stop",
  "MAX_TOKENS": "length",
  "SAFETY": "content_filter",
  "RECITATION": "content_filter", // 归类为内容过滤
  "OTHER": null, // 不映射 "OTHER"
  // 新增 Gemini 1.5 可能的 Reason
  "FUNCTION_CALL": "tool_calls", // 映射到 tool_calls
};

const SEP = ""; // OpenAI 通常不加分隔符，除非是多部分文本

const transformCandidates = (key, cand) => {
  const message = { role: "assistant", content: null }; // 初始化 content 为 null
  const textParts = [];
  const toolCalls = [];

  if (cand.content?.parts && Array.isArray(cand.content.parts)) {
      for (const part of cand.content.parts) {
        if (part.text !== undefined && part.text !== null) {
          textParts.push(part.text);
        } else if (part.functionCall) {
          const fc = part.functionCall;
          // Gemini functionCall 可能没有 id，需要生成一个
          const callId = `call_${generateChatcmplId().substring(9)}`; // 生成唯一 ID
          toolCalls.push({
            id: callId,
            type: "function",
            function: {
              name: fc.name,
              arguments: JSON.stringify(fc.args || {}), // 确保 args 存在且为字符串
            }
          });
        }
      }
  }


  // 合并文本部分
  if (textParts.length > 0) {
      message.content = textParts.join(SEP);
  }


  // 添加 tool_calls
  if (toolCalls.length > 0) {
      message.tool_calls = toolCalls;
      // 如果只有 tool_calls 且没有文本，OpenAI 期望 content 为 null
      if (message.content === null) {
          // message.content = null; // 保持 null
      }
  }

   // 如果既没有文本也没有 tool_calls，设置 content 为空字符串或 null？
   // OpenAI 似乎期望至少有一个字段
   if (message.content === null && toolCalls.length === 0) {
       message.content = ""; // 设为空字符串以符合 OpenAI 格式
   }


  // 确定 finish_reason
  let finishReason = reasonsMap[cand.finishReason] !== undefined ? reasonsMap[cand.finishReason] : null;
  // 如果 Gemini 返回 FUNCTION_CALL reason，且我们生成了 tool_calls，则使用 tool_calls reason
  if (cand.finishReason === "FUNCTION_CALL" && toolCalls.length > 0) {
      finishReason = "tool_calls";
  } else if (finishReason === "tool_calls" && toolCalls.length === 0) {
      // 如果映射为 tool_calls 但实际没有生成，则回退
      finishReason = "stop"; // 或 null?
  }


  return {
    index: cand.index === undefined ? 0 : cand.index, // 处理 index 可能为 undefined
    [key]: message,
    logprobs: null, // Gemini 不提供 logprobs
    finish_reason: finishReason,
  };
};
const transformCandidatesMessage = transformCandidates.bind(null, "message");
const transformCandidatesDelta = transformCandidates.bind(null, "delta");

const transformUsage = (data) => {
    if (!data) return { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
    // Gemini 1.5 可能返回 totalTokenCount，旧版可能返回 candidatesTokenCount 等
    const completionTokens = data.candidatesTokenCount || data.completionTokens || 0; // 优先 candidatesTokenCount
    const promptTokens = data.promptTokenCount || 0;
    // totalTokenCount 可能是最可靠的
    const totalTokens = data.totalTokenCount || (promptTokens + completionTokens);

    return {
        completion_tokens: completionTokens,
        prompt_tokens: promptTokens,
        total_tokens: totalTokens
    };
};


const processCompletionsResponse = (data, model, id) => {
    if (!data || !Array.isArray(data.candidates)) {
        console.error("Invalid non-stream response structure:", data);
        // 返回一个表示错误的 OpenAI 格式响应
        return JSON.stringify({
            id,
            choices: [{
                index: 0,
                message: { role: "assistant", content: "Error: Invalid response structure from API." },
                finish_reason: "error",
            }],
            created: Math.floor(Date.now()/1000),
            model,
            object: "chat.completion",
            usage: { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 },
        });
    }
  return JSON.stringify({
    id,
    choices: data.candidates.map(transformCandidatesMessage),
    created: Math.floor(Date.now()/1000),
    model,
    // system_fingerprint: "fp_xxxxxxxxxx", // 可选添加
    object: "chat.completion",
    usage: transformUsage(data.usageMetadata), // 使用转换函数
  }, null, 2); // 添加缩进以便调试
};
