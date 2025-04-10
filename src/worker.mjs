import { Buffer } from "node:buffer";

// 添加API密钥库配置
// 从环境变量读取API密钥，格式为逗号分隔的密钥列表
// 例如: GEMINI_API_KEYS=key1,key2,key3
const API_KEYS = (function() {
  // 预设的密钥列表
  const predefinedKeys = [
    "AIzaSyCa5yUPn2Miz4ehq3Ak7USy7pR7INbd1D4",
    "AIzaSyBFBF6tCLj1ylVUNe05DU2ZB010z15J5rs",
    "AIzaSyCgk-aTLlS3mwK9zhb9tceyvn3eNXaV9YQ",
    "AIzaSyAxfmFOWgzhOSOvAhhwszbfkjM1FCgYpnA",
    "AIzaSyCHNVCrMyX5Ud0rvPy-G9DXtazD8JIbEvU",
    "AIzaSyA_iVclQbREs7FRSeAM9rno4AkexsSGK5I",
    "AIzzaSyACfVIGGEdNZ1e9reywq1xBfCUdSxYXBok",
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
    "AIzaSyDB5lc55kkDEh7nhGRFnHy-xPeffiENFd0",
    "AIzaSyDeEXtAG4qOV9z20GgDnYRREWPnAMtjlW8",
    "AIzaSyBpTgfUuODNgYKVbgtGxqCiAjd8lTtnsgI",
    "AIzaSyB8akwchatPzc8OG6JBd7kh-5MF798Maj4",
    "AIzaSyBLkqtK3JWIpBtDhztylwgquRFkXABRpnE",
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
"AIzaSyBIZfeSx6XmheGBDdc0zN3o1WwoKWDtL_k",
"AIzaSyCvnLhM4XWf70enFVo9eeV8YS_crvdd18Y"

  ];

  // 尝试获取环境变量
  const envKeys = typeof process !== 'undefined' && process.env ? 
                  process.env.GEMINI_API_KEYS : 
                  (typeof Deno !== 'undefined' ? Deno.env.get('GEMINI_API_KEYS') : null);
                  
  // 合并预设密钥和环境变量中的密钥
  const envKeyArray = envKeys ? 
    envKeys.split(',').map(k => k.trim()).filter(k => k) : 
    [];
  
  // 返回所有密钥的去重数组
  return [...new Set([...predefinedKeys, ...envKeyArray])];
})();

console.log(`Loaded ${API_KEYS.length} API keys from predefined keys and environment`);

// 密钥轮询计数器
let keyIndex = 0;

// 内存中的运行时密钥集合，用于动态添加的密钥
const RUNTIME_KEYS = new Set(API_KEYS);

// 获取当前轮换索引对应的密钥 (辅助函数)
function getApiKeyForRotation(index) {
    const keyArray = Array.from(RUNTIME_KEYS);
    if (keyArray.length === 0) {
        console.error("错误：密钥库中没有可用的 API 密钥。");
        return null;
    }
    // 确保索引有效
    const validIndex = index % keyArray.length;
    const key = keyArray[validIndex];
    // console.log(`为轮换提供索引 ${validIndex} 的密钥: ${key.substring(0, 5)}...`);
    return key;
}

// 获取要使用的 API 密钥 (惰性轮换逻辑)
// 此函数不改变全局 keyIndex
function getApiKey(providedKey) {
  // 1. 如果提供了具体密钥，直接使用
  if (providedKey && providedKey !== "rotate") {
    // console.log(`使用提供的特定密钥: ${providedKey.substring(0, 5)}...`);
    return providedKey;
  }
  // 2. 否则（请求轮换 "rotate" 或无密钥），返回当前 keyIndex 指向的密钥
  return getApiKeyForRotation(keyIndex);
}

// 管理密钥的函数
async function handleKeyManagement(request, adminKey) {
  // 检查管理密钥
  const auth = request.headers.get("X-Admin-Key");
  if (!auth || auth !== adminKey) {
    throw new HttpError("Unauthorized. Admin key required.", 401);
  }
  
  // 根据请求方法执行不同操作
  switch (request.method) {
    case "GET":
      // 返回所有密钥（注意：实际生产环境中应该隐藏完整密钥）
      return new Response(JSON.stringify({
        count: RUNTIME_KEYS.size,
        keys: Array.from(RUNTIME_KEYS).map(k => k.substring(0, 5) + "..." + k.substring(k.length - 4))
      }, null, 2), fixCors({ status: 200, headers: { "Content-Type": "application/json" } }));
      
    case "POST":
      // 添加新密钥
      const { key } = await request.json();
      if (!key) {
        throw new HttpError("Missing key in request body", 400);
      }
      RUNTIME_KEYS.add(key);
      return new Response(JSON.stringify({ message: "Key added", count: RUNTIME_KEYS.size }), 
        fixCors({ status: 200, headers: { "Content-Type": "application/json" } }));
        
    case "DELETE":
      // 删除密钥
      const { key: keyToDelete } = await request.json();
      if (!keyToDelete) {
        throw new HttpError("Missing key in request body", 400);
      }
      const deleted = RUNTIME_KEYS.delete(keyToDelete);
      return new Response(JSON.stringify({ 
        message: deleted ? "Key deleted" : "Key not found", 
        count: RUNTIME_KEYS.size 
      }), fixCors({ status: deleted ? 200 : 404, headers: { "Content-Type": "application/json" } }));
      
    default:
      throw new HttpError("Method not allowed", 405);
  }
}

export default {
  async fetch (request) {
    // --- 更靠前、更明确的日志记录 ---
    // console.log(">>> [Worker Log] fetch handler started <<<"); // Removed for brevity

    let pathname = "[URL 解析错误]";
    try {
        pathname = new URL(request.url).pathname;
    } catch (urlError) {
        console.error(">>> [Worker Log] Error parsing request URL:", urlError);
    }
    // console.log(`>>> [Worker Log] Method: ${request.method}, Path: ${pathname}`); // Removed for brevity

    // 记录部分关键请求头
    const headersToLog = ['Authorization', 'Content-Type', 'User-Agent', 'Accept'];
    const loggedHeaders = {};
    for (const headerName of headersToLog) {
        if (request.headers.has(headerName)) {
            // 对 Authorization 头进行部分隐藏
            if (headerName === 'Authorization' && request.headers.get(headerName).includes('Bearer ')) {
                 const token = request.headers.get(headerName).split(' ')[1];
                 loggedHeaders[headerName] = `Bearer ${token.substring(0, 5)}...${token.substring(token.length - 4)}`;
            } else {
                 loggedHeaders[headerName] = request.headers.get(headerName);
            }
        }
    }
    // console.log(`>>> [Worker Log] Headers (partial): ${JSON.stringify(loggedHeaders)}`); // Removed for brevity

    // --- Request Body Logging Removed for performance ---

    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }
    const errHandler = (err) => {
      console.error("错误处理程序捕获:", err);
      // 确保即使在错误情况下也返回 CORS 头部
      const status = err instanceof HttpError ? err.status : 500;
      const message = err instanceof Error ? err.message : String(err);
      return new Response(JSON.stringify({ error: { message, type: err.name, code: status } }), fixCors({ status }));
    };

    try {
      const { pathname } = new URL(request.url);

      // --- 密钥管理端点处理 ---
      if (pathname.endsWith("/admin/keys")) {
        const adminKey = typeof process !== 'undefined' && process.env ?
                  process.env.ADMIN_KEY :
                  (typeof Deno !== 'undefined' ? Deno.env.get('ADMIN_KEY') : null);

        if (!adminKey) {
          throw new HttpError("Admin key not configured on server", 500);
        }
        // 管理端点不参与重试逻辑
        return await handleKeyManagement(request, adminKey).catch(errHandler);
      }

      // --- API 请求处理与重试逻辑 ---
      const auth = request.headers.get("Authorization");
      const providedKey = auth?.split(" ")[1];
      const isRotating = !providedKey || providedKey === "rotate"; // 判断是否启用轮换/重试模式

      const keyArrayForMaxAttempts = Array.from(RUNTIME_KEYS); // 用于确定最大尝试次数
      const maxAttempts = isRotating ? keyArrayForMaxAttempts.length * 3 : 1; // 最多轮询 3 轮
      let lastErrorResponse = null;
      let attempts = 0;
      let currentKeyIndex = keyIndex; // 本次请求开始时的索引，仅在轮换失败时递增

      // console.log(`开始处理请求 ${pathname}. 轮换模式: ${isRotating}, 最大尝试次数: ${maxAttempts} (最多3轮), 初始索引: ${currentKeyIndex}`); // Removed for brevity

      while (attempts < maxAttempts) {
        attempts++;
        // 获取当前尝试使用的密钥
        const apiKey = getApiKey(providedKey === "rotate" ? getApiKeyForRotation(currentKeyIndex) : providedKey);

        if (!apiKey) {
          console.error(`尝试 ${attempts}: 未能获取到 API 密钥 (索引 ${currentKeyIndex})。`);
          if (!lastErrorResponse) { // 如果是第一次尝试就没key
             throw new HttpError("No API key available.", 500);
          } else { // 如果是重试中发现没key了（例如被动态删除了）
             break; // 结束重试，返回上一个错误
          }
        }
        const currentRound = keyArrayForMaxAttempts.length > 0 ? Math.floor((attempts - 1) / keyArrayForMaxAttempts.length) + 1 : 1;
        // 保留此日志以显示正在尝试哪个密钥
        console.log(`轮次 ${currentRound}/3 | 尝试 ${attempts}/${maxAttempts} | 密钥 ...${apiKey.slice(-6)}`); // 显示密钥后6位

        // 克隆请求对象，因为 body 只能读取一次
        const clonedRequest = request.clone();
        let response;

        try {
          // --- 根据路径调用相应的处理函数 ---
          const assert = (success) => {
            if (!success) {
              throw new HttpError("The specified HTTP method is not allowed for the requested resource", 405); // 405 Method Not Allowed 更合适
            }
          };

          switch (true) {
            case pathname.endsWith("/chat/completions"):
              assert(clonedRequest.method === "POST");
              response = await handleCompletions(await clonedRequest.json(), apiKey);
              break;
            case pathname.endsWith("/embeddings"):
              assert(clonedRequest.method === "POST");
              response = await handleEmbeddings(await clonedRequest.json(), apiKey);
              break;
            case pathname.endsWith("/models"):
              assert(clonedRequest.method === "GET");
              response = await handleModels(apiKey); // GET 请求不需要读取 body，无需克隆的 json()
              break;
            default:
              // 如果之前的尝试有错误，返回那个错误，否则返回 404
              if (lastErrorResponse) {
                 response = lastErrorResponse;
                 break; // 跳出 switch
              }
              throw new HttpError("404 Not Found", 404);
          }

          // --- 检查响应 ---
          if (response.ok) {
            // console.log(`尝试 ${attempts} 成功，状态码: ${response.status}`); // Removed for brevity, only log errors
            return response; // 成功，直接返回
          }

          // --- 处理失败响应 ---
          console.warn(`尝试 ${attempts} 失败，状态码: ${response.status}`);
          lastErrorResponse = response.clone(); // 保存错误响应副本以备后用

          // 检查是否是可重试的错误且处于轮换模式
          // 新增 404 和 500 作为可重试错误
          const shouldRetry = isRotating && [400, 429, 404, 500].includes(response.status);

          if (shouldRetry) {
            // console.log(`遇到可重试错误 (状态码 ${response.status}) 且处于轮换模式，递增密钥索引并准备重试...`); // Removed for brevity, failure log is sufficient
            // 只有在需要重试时才递增索引
            currentKeyIndex++; // 下次循环将使用下一个索引的密钥 (取模运算会自动处理绕回)
            // keyIndex = currentKeyIndex % keyArrayForMaxAttempts.length; // 可选：更新全局索引
            // 保持注释，实现惰性轮换：下次新请求仍从上次成功或初始的 key 开始
            // 继续下一次循环
          } else {
            // console.log(`遇到不可重试错误 (状态码 ${response.status})、非轮换模式或请求成功，将返回当前响应。`); // Removed for brevity
            // 如果成功，keyIndex 保持不变。下次 rotate 请求将继续使用这个成功的 key。
            return response; // 不可重试、非轮换模式或成功，直接返回当前响应
          }

        } catch (innerErr) {
           // 捕获 handleCompletions/Embeddings/Models 内部可能抛出的错误
           console.error(`尝试 ${attempts} 时内部处理函数出错:`, innerErr);
           const status = innerErr instanceof HttpError ? innerErr.status : 500;
           lastErrorResponse = new Response(JSON.stringify({ error: { message: innerErr.message, type: innerErr.name, code: status } }), fixCors({ status }));

           // 检查是否是可重试的错误且处于轮换模式
           // 新增 404 和 500 作为可重试错误
           const shouldRetryFromInnerError = isRotating && [400, 429, 404, 500].includes(status);

           if (shouldRetryFromInnerError) {
               // console.log(`内部错误可重试 (状态码 ${status}) 且处于轮换模式，递增密钥索引并准备重试...`); // Removed for brevity
               currentKeyIndex++; // 递增索引以尝试下一个密钥 (取模运算会自动处理绕回)
               // keyIndex = currentKeyIndex % keyArrayForMaxAttempts.length; // 可选：更新全局索引
           } else {
               // console.log(`内部错误不可重试 (状态码 ${status}) 或非轮换模式，返回错误。`); // Removed for brevity
               return lastErrorResponse; // 不可重试或非轮换模式，返回错误
           }
           // 继续循环
        }
      } // end while loop

      // 如果循环结束仍未成功（尝试了所有密钥）
      console.warn(`在 ${maxAttempts} 次尝试 (最多3轮轮询) 后均失败，返回最后记录的错误。`);
      return lastErrorResponse ?? new Response(JSON.stringify({ error: { message: `All API key attempts failed after ${maxAttempts} tries (up to 3 rounds).`, type: "RetryError", code: 500 } }), fixCors({ status: 500 })); // 如果连 lastErrorResponse 都没有，返回通用错误

    } catch (err) {
      // 捕获 fetch 函数顶层的错误 (例如 URL 解析错误)
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

const DEFAULT_MODEL = "gemini-1.5-pro-latest";
async function handleCompletions (req, apiKey) {
  let model = DEFAULT_MODEL;
  switch(true) {
    case typeof req.model !== "string":
      break;
    case req.model.startsWith("models/"):
      model = req.model.substring(7);
      break;
    case req.model.startsWith("gemini-"):
    case req.model.startsWith("learnlm-"):
      model = req.model;
  }
  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${model}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }
  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify(await transformRequest(req)), // try
  });

  let body = response.body;
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
      // --- 修改：仅在 response.ok 时处理响应体 ---
      if (response.ok) {
        try {
          body = await response.text();
          const jsonData = JSON.parse(body);
          // 添加对 jsonData 和 jsonData.candidates 的检查
          if (!jsonData || !jsonData.candidates) {
              console.error("处理非流式响应时出错：解析后的 JSON 缺少 candidates 字段。", jsonData);
              // 返回一个表示处理错误的响应，或者直接返回原始的 response 让上层处理
              // 这里选择返回原始 response，让 fetch 中的重试逻辑判断状态码
              // throw new HttpError("Invalid response structure from upstream API", 502); // 或者抛出错误
          } else {
             body = processCompletionsResponse(jsonData, model, id);
             // 成功处理后，需要创建一个新的 Response 对象，因为原始 response 的 body 可能已被读取
             return new Response(body, fixCors(response));
          }
        } catch (e) {
           console.error("处理非流式响应时 JSON 解析或处理出错:", e);
           // 解析或处理出错，也返回原始 response，让上层根据状态码判断
           // throw new HttpError(`Error processing upstream response: ${e.message}`, 502); // 或者抛出错误
        }
      } else {
        // 如果 response.ok 为 false，不处理 body，直接返回原始 response
        console.warn(`handleCompletions 收到非 OK 响应 (状态码 ${response.status})，直接返回原始响应。`);
        // 不需要 new Response，直接返回原始的，让 fetch 里的逻辑处理
        // return new Response(response.body, fixCors(response)); // 错误，应该直接返回 response
      }
      // --- 修改结束 ---
    }
  }
  // 如果 response.ok 为 false，或者处理过程中出错（且未抛出），则原始 response 会在这里被返回
  return response; // 返回原始 response 或经过流处理的 response
}

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
    switch(req.response_format.type) {
      case "json_schema":
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
      throw new Error("Invalid image data: " + url);
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

const transformMsg = async ({ role, content }) => {
  const parts = [];
  if (!Array.isArray(content)) {
    // system, user: string
    // assistant: string or null (Required unless tool_calls is specified.)
    parts.push({ text: content });
    return { role, parts };
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
        throw new TypeError(`Unknown "content" item type: "${item.type}"`);
    }
  }
  if (content.every(item => item.type === "image_url")) {
    parts.push({ text: "" }); // to avoid "Unable to submit request because it must have a text parameter"
  }
  return { role, parts };
};

const transformMessages = async (messages) => {
  if (!messages) { return; }
  const contents = [];
  let system_instruction;
  for (const item of messages) {
    if (item.role === "system") {
      delete item.role;
      system_instruction = await transformMsg(item);
    } else {
      item.role = item.role === "assistant" ? "model" : "user";
      contents.push(await transformMsg(item));
    }
  }
  if (system_instruction && contents.length === 0) {
    contents.push({ role: "model", parts: { text: " " } });
  }
  //console.info(JSON.stringify(contents, 2));
  return { system_instruction, contents };
};

const transformRequest = async (req) => ({
  ...await transformMessages(req.messages),
  safetySettings,
  generationConfig: transformConfig(req),
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
  // :"function_call",
};
const SEP = "\n\n|>";
const transformCandidates = (key, cand) => ({
  index: cand.index || 0, // 0-index is absent in new -002 models response
  [key]: {
    role: "assistant",
    content: cand.content?.parts.map(p => p.text).join(SEP) },
  logprobs: null,
  finish_reason: reasonsMap[cand.finishReason] || cand.finishReason,
});
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
async function parseStream (chunk, controller) {
  chunk = await chunk;
  if (!chunk) { return; }
  this.buffer += chunk;
  do {
    const match = this.buffer.match(responseLineRE);
    if (!match) { break; }
    controller.enqueue(match[1]);
    this.buffer = this.buffer.substring(match[0].length);
  } while (true); // eslint-disable-line no-constant-condition
}
async function parseStreamFlush (controller) {
  if (this.buffer) {
    console.error("Invalid data:", this.buffer);
    controller.enqueue(this.buffer);
  }
}

function transformResponseStream (data, stop, first) {
  const item = transformCandidatesDelta(data.candidates[0]);
  if (stop) { item.delta = {}; } else { item.finish_reason = null; }
  if (first) { item.delta.content = ""; } else { delete item.delta.role; }
  const output = {
    id: this.id,
    choices: [item],
    created: Math.floor(Date.now()/1000),
    model: this.model,
    //system_fingerprint: "fp_69829325d0",
    object: "chat.completion.chunk",
  };
  if (data.usageMetadata && this.streamIncludeUsage) {
    output.usage = stop ? transformUsage(data.usageMetadata) : null;
  }
  return "data: " + JSON.stringify(output) + delimiter;
}
const delimiter = "\n\n";
async function toOpenAiStream (chunk, controller) {
  const transform = transformResponseStream.bind(this);
  if (cand.content) { // prevent empty data (e.g. when MAX_TOKENS)
    controller.enqueue(transform(data));
  }
}
async function toOpenAiStreamFlush (controller) {
  const transform = transformResponseStream.bind(this);
  if (this.last.length > 0) {
    for (const data of this.last) {
      controller.enqueue(transform(data, "stop"));
    }
    controller.enqueue("data: [DONE]" + delimiter);
  }
}
