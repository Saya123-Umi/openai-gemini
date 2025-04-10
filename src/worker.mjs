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
            // 成功时，更新全局 keyIndex 指向这个成功的密钥索引
            // 这样下次 rotate 请求会优先使用这个成功的密钥
            if (isRotating) {
                keyIndex = currentKeyIndex % keyArrayForMaxAttempts.length; // 更新全局索引
                console.log(`请求成功，全局 keyIndex 更新为 ${keyIndex}`);
            }
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
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // 明确允许的方法
  headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type, x-goog-api-client, X-Admin-Key"); // 添加 X-Admin-Key
  return { headers, status, statusText };
};

const handleOPTIONS = async () => {
  return new Response(null, {
    status: 204, // No Content for preflight
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS", // 添加 DELETE
      "Access-Control-Allow-Headers": "Authorization, Content-Type, x-goog-api-client, X-Admin-Key", // 添加 X-Admin-Key
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
  ...(apiKey && { "x-goog-api-key": apiKey }),
  ...more
});

async function handleModels (apiKey) {
  const response = await fetch(`${BASE_URL}/${API_VERSION}/models`, {
    headers: makeHeaders(apiKey),
  });
  let body = await response.text(); // 先获取文本
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
        // 返回原始 response 让上层处理
    }
  }
  // 无论是否 OK，都返回（可能已修改的）body 和原始 response 的状态/头部
  return new Response(body, fixCors(response));
}

const DEFAULT_EMBEDDINGS_MODEL = "text-embedding-004";
async function handleEmbeddings (req, apiKey) {
  if (typeof req.model !== "string" || !req.model) {
    // 如果模型未指定或为空，使用默认值
    req.model = DEFAULT_EMBEDDINGS_MODEL;
    console.log(`Model not specified, using default: ${DEFAULT_EMBEDDINGS_MODEL}`);
  }
  if (!req.input) {
      throw new HttpError("input is missing", 400);
  }
  if (!Array.isArray(req.input)) {
    req.input = [ req.input ];
  }
   if (req.input.length === 0 || req.input.some(i => typeof i !== 'string' || !i)) {
      throw new HttpError("input must be a non-empty string or an array of non-empty strings", 400);
  }

  let model;
  if (req.model.startsWith("models/")) {
    model = req.model;
  } else {
    model = "models/" + req.model; // 使用用户指定的或默认的模型名称
  }

  const requestBody = JSON.stringify({
      "requests": req.input.map(text => ({
        model,
        content: { parts: [{ text }] }, // 确保 parts 是数组
        ...(req.dimensions && { outputDimensionality: req.dimensions }) // 仅在提供时添加维度
      }))
    });

  const response = await fetch(`${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
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
          model: req.model, // 返回用户请求的模型
          usage: { prompt_tokens: 0, total_tokens: 0 } // OpenAI 格式需要 usage
        }, null, "  ");
    } catch(e) {
        console.error("Error processing embeddings response:", e);
        // 返回原始 response 让上层处理
    }
  }
  return new Response(body, fixCors(response));
}

const DEFAULT_MODEL = "gemini-1.5-flash-latest"; // 使用 flash 作为默认
async function handleCompletions (req, apiKey) {
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

  // 处理 search 功能 (如果需要)
  let effectiveModel = model;
  // ... (search logic can be added here if needed, similar to previous version)

  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${effectiveModel}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; }

  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey, { "Content-Type": "application/json" }),
    body: JSON.stringify(requestBodyPayload),
  });

  let responseBody = response.body; // 默认使用原始 body (用于流或错误)
  if (response.ok) {
    let id = generateChatcmplId();
    if (req.stream) {
      responseBody = response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream(new SseParser())) // 使用类实例
        .pipeThrough(new TransformStream(new OpenAiStreamTransformer(req.stream_options?.include_usage, model, id))) // 使用类实例
        .pipeThrough(new TextEncoderStream());
      // 对于流式响应，直接返回转换后的流
      return new Response(responseBody, fixCors(response));
    } else {
      // 非流式成功响应
      const responseText = await response.text();
      try {
          const jsonData = JSON.parse(responseText);
          // 检查 jsonData 和 jsonData.candidates
          if (!jsonData || !Array.isArray(jsonData.candidates)) {
              console.error("Invalid non-stream response structure:", jsonData);
              throw new HttpError("Invalid response structure from upstream API", 502); // 抛出错误让上层捕获
          }
          responseBody = processCompletionsResponse(jsonData, model, id);
          // 成功处理，返回新的 Response
          return new Response(responseBody, fixCors(response));
      } catch (e) {
          console.error("Error processing non-stream response:", e);
          // 处理出错，也抛出错误
          throw new HttpError(`Error processing upstream response: ${e.message}`, 502);
      }
    }
  }
  // 如果 response.ok 为 false，直接返回原始 response (包含错误信息)
  // 不需要 new Response()，因为原始 response 包含了状态码和头部
  return response;
}

// --- Helper Classes for Streaming (Copied from previous version, ensure they are correct) ---

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
            try {
                // 尝试去除可能的 "data: " 前缀并解析
                const potentialJson = this.buffer.startsWith("data: ") ? this.buffer.substring(6) : this.buffer;
                const jsonData = JSON.parse(potentialJson);
                controller.enqueue(JSON.stringify(jsonData)); // 重新序列化以保持一致
            } catch (e) {
                console.error("Invalid trailing data in SSE stream:", this.buffer);
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
        if (!data || !Array.isArray(data.candidates) || data.candidates.length === 0) {
            console.error("Invalid data structure received in stream transformer:", data);
            return ""; // 返回空字符串避免中断流
        }

        const candidateIndex = data.candidates[0].index === undefined ? 0 : data.candidates[0].index;
        const item = transformCandidatesDelta(data.candidates[0]); // 使用外部函数

        switch (special) {
            case "stop":
                if (item.delta.tool_calls) {
                    item.finish_reason = "tool_calls";
                } else if (!item.finish_reason) {
                    // 如果 Gemini 没有提供 finishReason，且不是 tool_calls，则默认为 stop
                    item.finish_reason = item.finish_reason || "stop";
                }
                item.delta = {}; // 清空 delta 表示结束
                break;
            case "first":
                item.finish_reason = null;
                item.delta = item.delta || {};
                if (!item.delta.tool_calls && item.delta.content === undefined) {
                   item.delta.content = "";
                }
                break;
            default: // Normal chunk
                item.finish_reason = null;
                delete item.delta.role;
        }

        const output = {
            id: this.id,
            choices: [item],
            created: Math.floor(Date.now() / 1000),
            model: this.model,
            object: "chat.completion.chunk",
        };

        if (this.streamIncludeUsage) {
             output.usage = special === "stop" && data.usageMetadata ? transformUsage(data.usageMetadata) : null;
        }

        return "data: " + JSON.stringify(output) + this.delimiter;
    }


    transform(line, controller) {
        let data;
        try {
            data = JSON.parse(line);
        } catch (err) {
            console.error("Error parsing stream line:", line, err);
            const errorCandidate = {
                index: this.last.length,
                finishReason: "error",
                delta: { content: `Error parsing stream: ${err.message}` }
            };
             const errorData = { candidates: [errorCandidate] };
             controller.enqueue(this.transformResponseStream(errorData, "error"));
            return;
        }

         if (!data || !Array.isArray(data.candidates) || data.candidates.length === 0) {
            console.warn("Received stream chunk with no candidates:", data);
            return; // 忽略无效块
        }

        const cand = data.candidates[0];
        const index = cand.index === undefined ? 0 : cand.index;

        while (this.last.length <= index) {
            this.last.push(null);
        }

        if (!this.last[index]) { // 该 candidate 的第一帧
            controller.enqueue(this.transformResponseStream(data, "first"));
        }

        this.last[index] = data; // 存储最后状态

        // 只有当 candidate 包含实际内容或 tool_calls 时才发送普通帧
        const hasContent = cand.content && cand.content.parts && cand.content.parts.some(p => p.text || p.functionCall);
        const hasToolCalls = cand.tool_calls || (cand.content && cand.content.parts && cand.content.parts.some(p => p.functionCall));

        if (hasContent || hasToolCalls) {
             controller.enqueue(this.transformResponseStream(data));
        }
    }

    flush(controller) {
        if (this.last.length > 0) {
            this.last.forEach((data, index) => {
                if (data) { // 确保 data 存在
                   controller.enqueue(this.transformResponseStream(data, "stop"));
                }
            });
        }
        // 总是发送 DONE 消息
        controller.enqueue("data: [DONE]" + this.delimiter);
    }
}


// --- Transformation Logic (Copied from previous version, ensure correctness) ---

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
    if (!schema || !schema.type || !schema[schema.type]) return;
    const obj = schema[schema.type];
    if (obj) {
        delete obj.strict;
    }
    adjustProps(schema);
};


const harmCategory = [
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
  "HARM_CATEGORY_HARASSMENT",
  "HARM_CATEGORY_UNSPECIFIED"
];
const safetySettings = harmCategory.map(category => ({
  category,
  threshold: "BLOCK_NONE",
}));

const fieldsMap = {
  stop: "stopSequences",
  n: "candidateCount",
  max_tokens: "maxOutputTokens",
  temperature: "temperature",
  top_p: "topP",
  top_k: "topK",
};
const transformConfig = (req) => {
  let cfg = {};
  for (let key in req) {
    const matchedKey = fieldsMap[key];
    if (matchedKey) {
        const value = req[key];
         if (key === 'temperature' && (value < 0 || value > 2)) continue;
         if (key === 'top_p' && (value < 0 || value > 1)) continue;
         if (key === 'top_k' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'max_tokens' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'n' && (!Number.isInteger(value) || value < 1)) continue;
         if (key === 'stop') {
             if (typeof value === 'string') cfg[matchedKey] = [value];
             else if (Array.isArray(value) && value.every(s => typeof s === 'string')) cfg[matchedKey] = value;
             continue;
         }
      cfg[matchedKey] = req[key];
    }
  }

  if (req.response_format) {
    switch (req.response_format.type) {
      case "json_schema":
         cfg.responseMimeType = "application/json";
         console.warn("json_schema format requested, using standard JSON mode for Gemini.");
        break;
      case "json_object":
        cfg.responseMimeType = "application/json";
        break;
      case "text":
        break;
      default:
        console.warn(`Unsupported response_format type: ${req.response_format.type}. Ignoring.`);
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
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText} (${url})`);
      }
      mimeType = response.headers.get("content-type");
      if (!mimeType) throw new Error("Content-Type header missing for image URL");
      const contentLength = response.headers.get("content-length");
      if (contentLength && parseInt(contentLength, 10) > 10 * 1024 * 1024) {
          throw new Error("Image size exceeds the 10MB limit.");
      }
      const buffer = await response.arrayBuffer();
       if (buffer.byteLength > 10 * 1024 * 1024) {
           throw new Error("Image size exceeds the 10MB limit.");
       }
      data = Buffer.from(buffer).toString("base64");
    } catch (err) {
      console.error("Error fetching image:", err);
      throw new HttpError("Error fetching or processing image URL: " + err.message, 400);
    }
  } else if (url.startsWith("data:")) {
    const match = url.match(/^data:(?<mimeType>image\/.*?)(?:;base64)?,(?<data>.*)$/);
    if (!match || !match.groups.mimeType || !match.groups.data) {
      throw new HttpError("Invalid image data URI format.", 400);
    }
    ({ mimeType, data } = match.groups);
     const dataLength = data.length * 3 / 4;
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

  if (tool_call_id !== undefined) {
    let responseContent;
    try {
        responseContent = typeof content === 'string' ? JSON.parse(content) : content;
        if (typeof responseContent !== 'object' || responseContent === null) {
             responseContent = { result: responseContent };
        }
    } catch (err) {
      console.error("Error parsing tool response content:", content, err);
      throw new HttpError("Invalid tool response content: " + content, 400);
    }
    const functionName = fnames[tool_call_id] || name;
    if (!functionName) {
        console.error("Could not determine function name for tool call ID:", tool_call_id);
        throw new HttpError("Missing function name for tool response.", 400);
    }
    parts.push({
      functionResponse: {
        name: functionName,
        response: responseContent,
      }
    });
    return parts;
  }

  if (tool_calls) {
    for (const tcall of tool_calls) {
      if (tcall.type !== "function") {
        console.warn(`Unsupported tool_call type: "${tcall.type}". Skipping.`);
        continue;
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
      fnames[id] = funcName;
    }
    if (typeof content === 'string' && content.trim() !== '') {
         parts.push({ text: content });
    }
    return parts;
  }

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
               throw e;
           }
          break;
        default:
          console.warn(`Unknown content part type: "${item.type}". Skipping.`);
      }
    }
    if (content.length > 0 && !content.some(item => item.type === "text")) {
      parts.push({ text: "" });
    }
  } else if (content === null && !tool_calls) {
      console.warn("Assistant message has null content and no tool_calls.");
      parts.push({ text: "" });
  }

  return parts;
};


const transformMessages = async (messages) => {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new HttpError("Input 'messages' must be a non-empty array.", 400);
  }

  const contents = [];
  let system_instruction;
  const fnames = {};

  for (let i = 0; i < messages.length; i++) {
    const item = messages[i];

    if (!item || typeof item.role !== 'string') {
        throw new HttpError(`Invalid message format at index ${i}: Missing or invalid role.`, 400);
    }

    if (item.role === "system") {
        if (!system_instruction && typeof item.content === 'string') {
           system_instruction = { parts: [{ text: item.content }] };
        } else if (system_instruction) {
             console.warn("Multiple system messages found. Only the first one is used.");
        } else {
             console.warn("System message content is not a string. Ignoring.");
        }
    } else {
      let role;
      switch (item.role) {
          case "user": role = "user"; break;
          case "assistant": role = "model"; break;
          case "tool": role = "function"; break;
          default:
              console.warn(`Unknown message role: "${item.role}". Skipping message at index ${i}.`);
              continue;
      }

      try {
          const parts = await transformMsg(item, fnames);
          if ((role === 'user' || role === 'model') && parts.length === 0 && !(role === 'model' && item.tool_calls && !item.content)) {
             console.warn(`Message at index ${i} resulted in empty parts for role '${role}'. Skipping.`);
             continue;
          }

          const prevContent = contents[contents.length - 1];
          if (prevContent && prevContent.role === role && role !== 'function') {
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

   if (contents.length === 0) {
       if (system_instruction) {
           contents.push({ role: "user", parts: [{ text: "" }] });
       } else {
          throw new HttpError("No valid user or assistant messages found.", 400);
       }
   } else if (contents[0].role === "model") {
       contents.unshift({ role: "user", parts: [{ text: "" }] });
   }

  return { system_instruction, contents };
};


const transformTools = (req) => {
  let tools, tool_config;

  if (req.tools && Array.isArray(req.tools)) {
    const funcs = req.tools.filter(tool => tool.type === "function" && tool.function);
    if (funcs.length > 0) {
        // adjustSchema might be needed depending on Gemini's strictness
        // funcs.forEach(adjustSchema);
        tools = [{ functionDeclarations: funcs.map(schema => schema.function) }];
    }
  }

  if (req.tool_choice) {
    let mode = "AUTO";
    let allowedFunctionNames;

    if (typeof req.tool_choice === "string") {
        const choice = req.tool_choice.toUpperCase();
        if (["NONE", "AUTO", "ANY"].includes(choice)) {
            mode = choice;
        } else if (choice === "REQUIRED") {
             mode = "ANY"; // Map REQUIRED to ANY
             console.warn("tool_choice 'required' mapped to 'ANY' for Gemini.");
        } else {
            console.warn(`Invalid string tool_choice value: "${req.tool_choice}". Using AUTO.`);
        }
    } else if (typeof req.tool_choice === 'object' && req.tool_choice.type === "function" && req.tool_choice.function?.name) {
        mode = "ANY";
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

    const payload = {
        ...(system_instruction && { systemInstruction: system_instruction }),
        contents,
        ...(tools && { tools }),
        ...(tool_config && { toolConfig: tool_config }),
        safetySettings,
        ...(Object.keys(generationConfig).length > 0 && { generationConfig }),
    };
    return payload;
};


const generateChatcmplId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return "chatcmpl-" + Array.from({ length: 29 }, randomChar).join("");
};

const reasonsMap = {
  "FINISH_REASON_UNSPECIFIED": null,
  "STOP": "stop",
  "MAX_TOKENS": "length",
  "SAFETY": "content_filter",
  "RECITATION": "content_filter",
  "OTHER": null,
  "FUNCTION_CALL": "tool_calls",
};

const SEP = ""; // Usually empty for OpenAI

const transformCandidates = (key, cand) => {
  const message = { role: "assistant", content: null };
  const textParts = [];
  const toolCalls = [];

  if (cand.content?.parts && Array.isArray(cand.content.parts)) {
      for (const part of cand.content.parts) {
        if (part.text !== undefined && part.text !== null) {
          textParts.push(part.text);
        } else if (part.functionCall) {
          const fc = part.functionCall;
          const callId = `call_${generateChatcmplId().substring(9)}`;
          toolCalls.push({
            id: callId,
            type: "function",
            function: {
              name: fc.name,
              arguments: JSON.stringify(fc.args || {}),
            }
          });
        }
      }
  }

  if (textParts.length > 0) {
      message.content = textParts.join(SEP);
  }

  if (toolCalls.length > 0) {
      message.tool_calls = toolCalls;
  }

   if (message.content === null && toolCalls.length === 0) {
       message.content = "";
   }

  let finishReason = reasonsMap[cand.finishReason] !== undefined ? reasonsMap[cand.finishReason] : null;
  if (cand.finishReason === "FUNCTION_CALL" && toolCalls.length > 0) {
      finishReason = "tool_calls";
  } else if (finishReason === "tool_calls" && toolCalls.length === 0) {
      finishReason = "stop";
  }

  return {
    index: cand.index === undefined ? 0 : cand.index,
    [key]: message,
    logprobs: null,
    finish_reason: finishReason,
  };
};
const transformCandidatesMessage = transformCandidates.bind(null, "message");
const transformCandidatesDelta = transformCandidates.bind(null, "delta");

const transformUsage = (data) => {
    if (!data) return { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
    const completionTokens = data.candidatesTokenCount || data.completionTokens || 0;
    const promptTokens = data.promptTokenCount || 0;
    const totalTokens = data.totalTokenCount || (promptTokens + completionTokens);
    return {
        completion_tokens: completionTokens,
        prompt_tokens: promptTokens,
        total_tokens: totalTokens
    };
};


const processCompletionsResponse = (data, model, id) => {
    if (!data || !Array.isArray(data.candidates)) {
        console.error("Invalid non-stream response structure in processCompletionsResponse:", data);
        // 不能在此处抛出错误，因为调用者期望字符串
        // 返回一个表示错误的 JSON 字符串
        return JSON.stringify({
            id,
            error: { message: "Invalid response structure from API.", type: "processing_error", code: 502 },
            model,
            object: "chat.completion",
        });
    }
  return JSON.stringify({
    id,
    choices: data.candidates.map(transformCandidatesMessage),
    created: Math.floor(Date.now()/1000),
    model,
    object: "chat.completion",
    usage: transformUsage(data.usageMetadata),
  }, null, 2); // Add indentation for debugging
};
