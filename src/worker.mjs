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
    "AIzz`aSyACfVIGGEdNZ1e9reywq1xBfCUdSxYXBok",
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
    "AIzaSyCnVG19hbVR9CJuBV0Y3_a2cLo6oxw9oTM"
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

// 密钥轮询计数器 (用于确定下一次"rotate"请求的起始点)
let keyIndex = 0;

// 内存中的运行时密钥集合，用于动态添加/删除的密钥
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

// 获取用于*首次*尝试的 API 密钥
function getInitialApiKey(providedKey) {
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
      console.log(`Key added. Total keys: ${RUNTIME_KEYS.size}`);
      return new Response(JSON.stringify({ message: "Key added", count: RUNTIME_KEYS.size }),
        fixCors({ status: 200, headers: { "Content-Type": "application/json" } }));

    case "DELETE":
      // 删除密钥
      const { key: keyToDelete } = await request.json();
      if (!keyToDelete) {
        throw new HttpError("Missing key in request body", 400);
      }
      const deleted = RUNTIME_KEYS.delete(keyToDelete);
      console.log(`Key ${deleted ? 'deleted' : 'not found'}. Total keys: ${RUNTIME_KEYS.size}`);
      return new Response(JSON.stringify({
        message: deleted ? "Key deleted" : "Key not found",
        count: RUNTIME_KEYS.size
      }), fixCors({ status: deleted ? 200 : 404, headers: { "Content-Type": "application/json" } }));

    default:
      throw new HttpError("Method not allowed", 405);
  }
}

// --- Helper to route API calls ---
async function callApiHandler(clonedRequest, apiKey, pathname) {
    const assert = (success, method = "POST") => {
        if (!success) {
            throw new HttpError(`Method ${clonedRequest.method} not allowed for ${pathname}. Expected ${method}.`, 405);
        }
    };

    switch (true) {
        case pathname.endsWith("/chat/completions"):
            assert(clonedRequest.method === "POST");
            return await handleCompletions(await clonedRequest.json(), apiKey);
        case pathname.endsWith("/embeddings"):
            assert(clonedRequest.method === "POST");
            return await handleEmbeddings(await clonedRequest.json(), apiKey);
        case pathname.endsWith("/models"):
            assert(clonedRequest.method === "GET", "GET");
            // GET requests don't consume the body, so original request might be usable
            // However, using the clone is safer if headers/etc. were modified.
            return await handleModels(apiKey);
        default:
            // This path should ideally not be reached if called from the main fetch handler's logic
            throw new HttpError("404 Not Found - Invalid API Endpoint", 404);
    }
}

export default {
  async fetch (request) {
    if (request.method === "OPTIONS") {
      return handleOPTIONS();
    }
    const errHandler = (err) => {
      console.error("错误处理程序捕获:", err);
      // 确保即使在错误情况下也返回 CORS 头部
      const status = err instanceof HttpError ? err.status : 500;
      const message = err instanceof Error ? err.message : String(err);
      return new Response(JSON.stringify({ error: { message, type: err?.name ?? 'Error', code: status } }), fixCors({ status }));
    };

    try {
      const { pathname } = new URL(request.url);

      // --- 密钥管理端点处理 ---
      if (pathname.endsWith("/admin/keys")) {
        const adminKey = typeof process !== 'undefined' && process.env ?
                  process.env.ADMIN_KEY :
                  (typeof Deno !== 'undefined' ? Deno.env.get('ADMIN_KEY') : null);

        if (!adminKey) {
           return errHandler(new HttpError("Admin key not configured on server", 500));
        }
        // 管理端点不参与重试逻辑
        return await handleKeyManagement(request, adminKey).catch(errHandler);
      }

      // --- API 请求处理与无限重试逻辑 ---
      const auth = request.headers.get("Authorization");
      const providedKey = auth?.split(" ")[1]; // Might be undefined, "rotate", or a specific key

      const keyArray = Array.from(RUNTIME_KEYS);
      const numKeys = keyArray.length;

      if (numKeys === 0) {
          return errHandler(new HttpError("No API keys available in the runtime set.", 500));
      }

      // Determine the starting key and index for this request
      let initialApiKey = getInitialApiKey(providedKey);
      if (!initialApiKey) {
          // This should only happen if RUNTIME_KEYS was initially empty but got populated between checks.
          // Or if getApiKeyForRotation somehow fails. Re-check numKeys.
          if (Array.from(RUNTIME_KEYS).length === 0) {
             return errHandler(new HttpError("No API keys available after initial check.", 500));
          }
          // If keys exist now, try getting the first one again based on global keyIndex
          initialApiKey = getApiKeyForRotation(keyIndex);
          if (!initialApiKey) { // Still no key? Severe issue.
             return errHandler(new HttpError("Failed to retrieve any API key.", 500));
          }
      }

      let currentKeyIndex;
      if (providedKey && providedKey !== "rotate") {
          const foundIndex = keyArray.findIndex(k => k === initialApiKey);
          if (foundIndex !== -1) {
              currentKeyIndex = foundIndex;
          } else {
              // Provided key is not in the current RUNTIME_KEYS set.
              // Fallback to rotating from the global keyIndex.
              console.warn(`Provided key "${providedKey.substring(0, 5)}..." not found in runtime keys. Starting rotation from global index ${keyIndex % numKeys}.`);
              currentKeyIndex = keyIndex % numKeys;
              // Update initialApiKey to match the actual key at the fallback index
              initialApiKey = keyArray[currentKeyIndex];
          }
      } else {
          // Using "rotate" or no key provided, start from the global keyIndex
          currentKeyIndex = keyIndex % numKeys;
          // Ensure initialApiKey matches the key at currentKeyIndex
          initialApiKey = keyArray[currentKeyIndex];
      }

      console.log(`开始处理请求 ${pathname}. 初始密钥索引: ${currentKeyIndex}`);

      let keysTriedInCycle = 0; // Counter for attempts in the current cycle
      let lastErrorResponse = null;

      while (true) { // Indefinite loop
          const apiKeyToUse = keyArray[currentKeyIndex];
          keysTriedInCycle++;

          console.log(`尝试 #${keysTriedInCycle} (循环内): 使用密钥索引 ${currentKeyIndex} (${apiKeyToUse.substring(0, 5)}...${apiKeyToUse.substring(apiKeyToUse.length - 4)})`);

          // Clone request *inside* the loop for each attempt
          const clonedRequest = request.clone();
          let response;

          try {
              // Make the actual API call using the selected key
              response = await callApiHandler(clonedRequest, apiKeyToUse, pathname);

              // --- Check Response Status ---
              const status = response.status;
              // Define retryable status codes
              const isRetryable = [400, 429, 404, 500].includes(status);

              if (response.ok || !isRetryable) {
                  // Success (2xx) or a non-retryable error (e.g., 401, 403, 405, other 4xx/5xx)
                  console.log(`请求完成，状态码: ${status}. ${isRetryable ? "(Non-retryable error)" : (response.ok ? "(Success)" : "(Unknown non-retryable error)")}`);
                   // Important: Update the global keyIndex *only if* this attempt was successful *and*
                   // it was initiated by 'rotate' or no key. This maintains lazy rotation.
                   // If a specific key was provided and it worked (or failed non-retryably),
                   // the global index shouldn't advance.
                   // If rotation led to success/non-retryable failure on a *later* key,
                   // should the global index advance past the failing ones?
                   // Let's stick to advancing only if the *initial* key (from global index) works,
                   // or if rotation finds a working key, advance *past* that working key for the *next* rotation request.
                   // Current simple approach: Don't update global keyIndex here. It only determines the *start* of rotation.
                   // keyIndex = (currentKeyIndex + 1) % numKeys; // Optional: Advance global index past the last used key
                  return response; // Exit the loop and return the response
              }

              // --- Handle Retryable Error ---
              console.warn(`尝试 #${keysTriedInCycle} 失败，可重试状态码: ${status}. 准备尝试下一个密钥...`);
              lastErrorResponse = response.clone(); // Store the last error response

              // Move to the next key index, wrapping around
              currentKeyIndex = (currentKeyIndex + 1) % numKeys;

              // Log if a full cycle is completed
              if (keysTriedInCycle % numKeys === 0) {
                  console.warn(`已完成 ${numKeys} 个密钥的完整循环。 从头开始重试...`);
                  // Optional: Add a small delay between full cycles?
                  // await new Promise(resolve => setTimeout(resolve, 500));
              }
              // Continue to the next iteration of the while loop

          } catch (innerErr) {
              // --- Handle Errors Thrown by API Handlers (e.g., HttpError) ---
              console.error(`尝试 #${keysTriedInCycle} 时内部处理函数出错:`, innerErr);
              const status = innerErr instanceof HttpError ? innerErr.status : 500;
              const message = innerErr instanceof Error ? innerErr.message : String(innerErr);
              lastErrorResponse = new Response(JSON.stringify({ error: { message, type: innerErr?.name ?? 'Error', code: status } }), fixCors({ status }));

              // Check if the *error itself* represents a retryable condition
              const isRetryableFromInnerError = [400, 429, 404, 500].includes(status);

              if (!isRetryableFromInnerError) {
                  console.log(`内部错误导致不可重试状态 ${status}. 返回错误响应。`);
                  return lastErrorResponse; // Exit loop with the error response
              }

              // --- Retryable Error from Inner Handler ---
              console.warn(`内部错误导致可重试状态 ${status}. 准备尝试下一个密钥...`);
              // Move to the next key index, wrapping around
              currentKeyIndex = (currentKeyIndex + 1) % numKeys;

              if (keysTriedInCycle % numKeys === 0) {
                   console.warn(`已完成 ${numKeys} 个密钥的完整循环 (因内部错误结束)。 从头开始重试...`);
                   // Optional delay
              }
              // Continue to the next iteration of the while loop
          }
      } // End while(true)

    } catch (err) {
      // Catch top-level errors (e.g., URL parsing, initial setup)
      return errHandler(err);
    }
  }
};

// ... (HttpError, fixCors, handleOPTIONS, BASE_URL, API_VERSION, API_CLIENT, makeHeaders remain the same) ...
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
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE"); // Explicitly allow needed methods
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Admin-Key"); // Allow necessary headers
  return { headers, status, statusText };
};

const handleOPTIONS = async () => {
  return new Response(null, fixCors({ // Use fixCors to set headers correctly
    status: 204, // No Content for OPTIONS preflight
    headers: {
      "Access-Control-Max-Age": "86400", // Cache preflight response for 1 day
    }
  }));
};

const BASE_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";

// https://github.com/google-gemini/generative-ai-js/blob/cf223ff4a1ee5a2d944c53cddb8976136382bee6/src/requests/request.ts#L71
const API_CLIENT = "genai-js/0.21.0"; // npm view @google/generative-ai version
const makeHeaders = (apiKey, more) => ({
  "x-goog-api-client": API_CLIENT,
  ...(apiKey && { "x-goog-api-key": apiKey }),
  "Content-Type": "application/json", // Ensure Content-Type is always set for POST/etc.
  ...more
});

// --- Model Handling ---
async function handleModels (apiKey) {
  const url = `${BASE_URL}/${API_VERSION}/models`;
  console.log(`Fetching models using key: ${apiKey.substring(0, 5)}...`);
  const response = await fetch(url, {
    method: "GET", // Explicitly set method
    headers: makeHeaders(apiKey),
  });

  // Clone the response to read the body while preserving the original for return
  const responseClone = response.clone();
  let body;

  if (response.ok) {
      try {
          const { models } = await responseClone.json(); // Read body from clone
          body = JSON.stringify({
              object: "list",
              data: models.map(({ name, ...rest }) => ({ // Keep other potentially useful fields?
                  id: name.replace("models/", ""),
                  object: "model",
                  created: 0, // Placeholder
                  owned_by: "google", // Placeholder
                  // Include other fields if needed, e.g., description, supportedGenerationMethods
                  ...rest // Include all other fields returned by the API
              })),
          }, null, "  ");
          // Return the *original* response with modified body and CORS headers
          return new Response(body, fixCors(response));
      } catch (e) {
          console.error("Error parsing models response:", e);
          // Fallback to returning the original error response
          throw new HttpError("Failed to parse models response", 500); // Throw error to trigger retry if applicable
      }
  } else {
      console.error(`Failed to fetch models: ${response.status}`);
      // Throw HttpError to allow the main fetch handler's retry logic to catch it
      throw new HttpError(`Upstream API error: ${response.statusText}`, response.status);
  }
}

// --- Embeddings Handling ---
const DEFAULT_EMBEDDINGS_MODEL = "text-embedding-004";
async function handleEmbeddings (req, apiKey) {
    if (typeof req.model !== "string" || !req.model) { // Added check for empty string
        console.warn("Embeddings model not specified or empty, using default:", DEFAULT_EMBEDDINGS_MODEL);
        req.model = DEFAULT_EMBEDDINGS_MODEL;
        // No HttpError here, just use default. Client should specify if needed.
    }
    if (!req.input) {
        throw new HttpError("`input` field is missing or empty", 400);
    }
    if (!Array.isArray(req.input)) {
        req.input = [req.input];
    }
    if (req.input.length === 0 || req.input.some(item => typeof item !== 'string' || !item.trim())) {
        throw new HttpError("`input` must be a non-empty string or an array of non-empty strings", 400);
    }

    let model;
    if (req.model.startsWith("models/")) {
        model = req.model;
    } else {
        // Assume it's a short name, prefix with models/
        model = "models/" + req.model;
    }

    const url = `${BASE_URL}/${API_VERSION}/${model}:batchEmbedContents`;
    console.log(`Requesting embeddings from ${model} using key: ${apiKey.substring(0, 5)}...`);

    const response = await fetch(url, {
        method: "POST",
        headers: makeHeaders(apiKey), // Content-Type is added by makeHeaders now
        body: JSON.stringify({
            "requests": req.input.map(text => ({
                model, // Gemini API expects the full model path here
                content: { parts: [{ text }] }, // Correct structure for embedContents
                // outputDimensionality: req.dimensions, // Only include if provided
                ...(req.dimensions && { outputDimensionality: req.dimensions })
            }))
        })
    });

    const responseClone = response.clone();
    let body;

    if (response.ok) {
        try {
            const { embeddings } = await responseClone.json();
            if (!embeddings) {
                console.error("Embeddings field missing in successful response:", await responseClone.text());
                throw new HttpError("Invalid response format from upstream API (missing embeddings)", 500);
            }
            body = JSON.stringify({
                object: "list",
                data: embeddings.map(({ values }, index) => ({ // Gemini uses 'values'
                    object: "embedding",
                    index,
                    embedding: values,
                })),
                model: req.model, // Return the model name the user requested (or the default)
                usage: { // Placeholder usage data - Gemini Batch API doesn't provide token counts
                    prompt_tokens: 0,
                    total_tokens: 0,
                }
            }, null, "  ");
            return new Response(body, fixCors(response));
        } catch (e) {
            console.error("Error parsing embeddings response:", e);
            throw new HttpError("Failed to parse embeddings response", 500);
        }
    } else {
        console.error(`Failed to get embeddings: ${response.status}`);
        const errorBody = await responseClone.text();
        console.error("Error body:", errorBody);
        // Throw HttpError so the main loop can retry
        throw new HttpError(`Upstream API error: ${response.statusText}. ${errorBody}`, response.status);
    }
}


// --- Completions Handling ---
const DEFAULT_MODEL = "gemini-1.5-flash-latest"; // Use flash as a faster default
async function handleCompletions (req, apiKey) {
  let model = req.model || DEFAULT_MODEL; // Use default if not provided

  // Normalize model name (remove prefix if present)
  if (model.startsWith("models/")) {
      model = model.substring(7);
  }
  // else: Assume it's already in the correct format (e.g., "gemini-1.5-pro-latest")

  const TASK = req.stream ? "streamGenerateContent" : "generateContent";
  let url = `${BASE_URL}/${API_VERSION}/models/${model}:${TASK}`;
  if (req.stream) { url += "?alt=sse"; } // Server-Sent Events for streaming

  console.log(`Requesting completions from ${model} (${TASK}) using key: ${apiKey.substring(0, 5)}...`);

  let requestBody;
  try {
      requestBody = JSON.stringify(await transformRequest(req));
  } catch (e) {
      // Catch errors during request transformation (e.g., invalid image URL)
      console.error("Error transforming completion request:", e);
      throw new HttpError(`Failed to transform request: ${e.message}`, 400); // Bad request
  }

  const response = await fetch(url, {
    method: "POST",
    headers: makeHeaders(apiKey),
    body: requestBody,
  });

  // Do not clone stream responses immediately
  let body = response.body;
  const responseStatus = response.status; // Capture status before potential body read
  const responseHeaders = new Headers(response.headers); // Capture headers

  if (response.ok) {
    const id = generateChatcmplId(); // Generate a unique ID for the completion
    if (req.stream) {
      // Handle streaming response
      body = body // response.body is already a ReadableStream
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TransformStream(createStreamParser())) // Use helper for parser state
        .pipeThrough(new TransformStream(createOpenAIStreamTransformer({ // Use helper for transformer state
            streamIncludeUsage: req.stream_options?.include_usage,
            model,
            id,
        })))
        .pipeThrough(new TextEncoderStream());
      // Return response immediately with the stream
      return new Response(body, fixCors({ headers: responseHeaders, status: responseStatus }));

    } else {
      // Handle non-streaming response
      try {
          const responseText = await response.text(); // Read full text
          const jsonData = JSON.parse(responseText);
          const processedBody = processCompletionsResponse(jsonData, model, id);
          // Return new response with processed body
          return new Response(processedBody, fixCors({ headers: responseHeaders, status: responseStatus }));
      } catch (e) {
          console.error("Error parsing non-stream completion response:", e);
          // Throw error, let retry logic handle it
          throw new HttpError(`Failed to parse upstream response: ${e.message}`, 500);
      }
    }
  } else {
      // Handle error response (both stream and non-stream)
      const errorText = await response.text(); // Read error body
      console.error(`Upstream API error (${response.status}): ${errorText}`);
      // Throw HttpError to be caught by the main retry loop
      throw new HttpError(`Upstream API Error: ${response.statusText}. ${errorText}`, response.status);
  }
}

// --- Request/Response Transformation Helpers ---

const harmCategory = [
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
  "HARM_CATEGORY_HARASSMENT",
  // "HARM_CATEGORY_CIVIC_INTEGRITY", // Often causes issues, maybe keep commented
  // "HARM_CATEGORY_UNSPECIFIED",
  // "HARM_CATEGORY_DEROGATORY",
  // "HARM_CATEGORY_TOXICITY",
  // "HARM_CATEGORY_VIOLENCE",
  // "HARM_CATEGORY_MEDICAL",
  // "HARM_CATEGORY_DANGEROUS",
];
const safetySettings = harmCategory.map(category => ({
  category,
  threshold: "BLOCK_NONE", // Be less restrictive by default
}));

const fieldsMap = {
  // OpenAI -> Gemini
  stop: "stopSequences",
  n: "candidateCount", // Note: Only affects non-streaming. Max 1 for streaming.
  max_tokens: "maxOutputTokens",
  // max_completion_tokens: "maxOutputTokens", // Alias
  temperature: "temperature",
  top_p: "topP",
  top_k: "topK", // Gemini supports this directly
  frequency_penalty: "frequencyPenalty", // Not directly supported? Check docs. May need custom logic or ignore.
  presence_penalty: "presencePenalty",   // Not directly supported? Check docs. May need custom logic or ignore.
  // seed: "seed", // Gemini supports seed
  // user: "user", // No direct equivalent, maybe ignore
  // logprobs: "logprobs", // No direct equivalent for simple generation
  // top_logprobs: "top_logprobs", // No direct equivalent
};

const transformConfig = (req) => {
  let generationConfig = {};
  for (let key in req) {
    const geminiKey = fieldsMap[key];
    if (geminiKey && req[key] !== undefined && req[key] !== null) {
        // Special handling for n/candidateCount in streaming
        if (geminiKey === "candidateCount" && req.stream && req[key] > 1) {
            console.warn("Gemini streaming only supports `n=1` (candidateCount=1). Setting to 1.");
            generationConfig[geminiKey] = 1;
        } else if (geminiKey === "stopSequences" && typeof req[key] === "string") {
            // Gemini expects an array of strings
             generationConfig[geminiKey] = [req[key]];
        } else {
             generationConfig[geminiKey] = req[key];
        }
    } else if (key === 'frequency_penalty' || key === 'presence_penalty') {
        // Log if unsupported fields are provided
        // console.warn(`Field '${key}' is not directly supported by Gemini API and will be ignored.`);
    }
  }

  // Handle response_format (JSON mode)
  if (req.response_format?.type === "json_object") {
      generationConfig.responseMimeType = "application/json";
  }
  // Gemini doesn't have a direct equivalent for text mode other than default
  // Gemini schema support is more complex than just setting mime type

  // Add temperature=0 if top_p=0 (common pattern, though not strictly required)
  // if (generationConfig.topP === 0 && generationConfig.temperature === undefined) {
  //    generationConfig.temperature = 0;
  // }

  // Ensure temperature and topP have valid ranges if provided
  if (generationConfig.temperature !== undefined && (generationConfig.temperature < 0 || generationConfig.temperature > 2)) {
       console.warn(`Temperature ${generationConfig.temperature} out of range [0, 2]. Clamping or check API docs.`);
       // generationConfig.temperature = Math.max(0, Math.min(2, generationConfig.temperature)); // Optional: clamp
  }
   if (generationConfig.topP !== undefined && (generationConfig.topP < 0 || generationConfig.topP > 1)) {
       console.warn(`Top_p ${generationConfig.topP} out of range [0, 1]. Clamping or check API docs.`);
       // generationConfig.topP = Math.max(0, Math.min(1, generationConfig.topP)); // Optional: clamp
  }


  return generationConfig;
};

// Fetches image data and returns Gemini part format
const parseImg = async (url) => {
  let mimeType, data;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const response = await fetch(url); // Use fetch defined in the environment
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} fetching image: ${url}`);
      }
      mimeType = response.headers.get("content-type");
      if (!mimeType || !mimeType.startsWith('image/')) {
          throw new Error(`Invalid content type for image: ${mimeType} from ${url}`);
      }
      const buffer = await response.arrayBuffer();
      data = Buffer.from(buffer).toString("base64"); // Use node:buffer
    } catch (err) {
      console.error("Error fetching image:", err);
      throw new Error(`Error fetching image from ${url}: ${err.message}`);
    }
  } else if (url.startsWith("data:image/")) {
    const match = url.match(/^data:(image\/.*?)(;base64)?,(.*)$/);
    if (!match) {
      throw new Error("Invalid image data URI format");
    }
    mimeType = match[1];
    // Data is already base64 if ';base64' is present, otherwise needs encoding?
    // Assume standard data URIs are base64 encoded if the marker is present.
    // If no marker, the data is URL-encoded, which we might need to decode first?
    // Let's assume base64 is standard for large data. Need to verify Gemini requirements.
    // Assuming data URIs are typically base64:
    data = match[3];
    if (!match[2]) { // If ';base64' is *not* present
       // The data is URL encoded (e.g. %20 for space). We need to decode then base64 encode.
       // However, most browser/client implementations use base64 for images in data URIs.
       // Let's assume for now it's already base64 compatible, or raise warning.
       console.warn("Image data URI does not explicitly specify base64 encoding. Assuming data is base64.");
       // If it fails, proper URL decoding and re-encoding would be needed:
       // const decodedData = decodeURIComponent(match[3]);
       // data = Buffer.from(decodedData).toString('base64');
    }

  } else {
      throw new Error("Unsupported image URL format. Use http(s):// or data:image/... URI.");
  }

  if (!data) {
      throw new Error(`Could not extract image data from ${url.substring(0, 50)}...`);
  }

  return {
    inlineData: {
      mimeType,
      data,
    },
  };
};

// Transforms a single OpenAI message to Gemini format
const transformMsg = async ({ role, content, tool_calls, tool_call_id, name }) => {
    let geminiRole = "user"; // Default
    if (role === "assistant") {
        geminiRole = "model";
    } else if (role === "system") {
        // System messages handled separately in transformMessages
        return { role: "system", parts: [{ text: content }] };
    } else if (role === "tool") {
        geminiRole = "function"; // Gemini uses 'function' role for tool responses
    }
    // else role === 'user', geminiRole is already 'user'

    const parts = [];

    // Handle content (text or multimodal)
    if (typeof content === 'string') {
        if (content.trim()) { // Only add non-empty text parts
           parts.push({ text: content });
        }
    } else if (Array.isArray(content)) {
        // Handle multimodal user content
        let hasText = false;
        for (const item of content) {
            if (item.type === "text") {
                 if (item.text.trim()) {
                    parts.push({ text: item.text });
                    hasText = true;
                 }
            } else if (item.type === "image_url") {
                try {
                    parts.push(await parseImg(item.image_url.url));
                } catch (e) {
                    // Propagate image parsing errors
                    throw new Error(`Failed to process image_url: ${e.message}`);
                }
            }
            // Add other types here if needed (e.g., audio)
        }
        // Gemini requires *some* text part in multimodal input? Check docs.
        // Let's add an empty text part if only images were provided, just in case.
        // if (geminiRole === 'user' && parts.length > 0 && !hasText) {
        //    parts.push({ text: "" }); // Or maybe "Describe the image(s)."
        // }
    } else if (content === null && role === "assistant" && tool_calls) {
        // Valid case: Assistant message with only tool calls and null content
    } else if (content !== null) {
        // Invalid content type
        throw new HttpError(`Invalid content type for role '${role}': ${typeof content}`, 400);
    }


    // Handle tool calls (outgoing from model)
    if (tool_calls && Array.isArray(tool_calls)) {
        if (geminiRole !== 'model') {
            console.warn("Tool calls found in non-assistant message, ignoring.");
        } else {
            parts.push(...tool_calls.map(tc => ({
                functionCall: { // Gemini uses functionCall
                    name: tc.function.name,
                    args: JSON.parse(tc.function.arguments), // Gemini expects parsed object
                }
            })));
        }
    }

    // Handle tool responses (incoming from user/client)
    if (role === "tool" && tool_call_id && typeof content === 'string') {
        if (geminiRole !== 'function') {
             console.warn("Tool response found for non-tool role, adjusting role to 'function'.");
             geminiRole = 'function';
        }
        // Gemini expects a functionResponse part
        parts.push({
            functionResponse: {
                name: name || tool_call_id, // Use 'name' if provided (OpenAI convention), else tool_call_id
                response: {
                    // Gemini expects the content here. It should be JSON for Gemini tools.
                    // OpenAI sends it as a string. Assume it's stringified JSON? Or just content?
                    // Let's assume content *is* the response value Gemini expects.
                    // If Gemini tools expect structured JSON, the client sending the tool
                    // response needs to ensure 'content' is the appropriate JSON object/value.
                    // For now, just pass the string content. This might need adjustment based on
                    // how Gemini Tools actually expects the response part.
                    // A common pattern is { "content": "<stringified_json_result>" }
                    // Let's try putting the raw content string directly first.
                     content: content, // Or potentially: name: content ?
                     // If Gemini expects a specific structure like { name: tool_name, content: result }
                     // then the caller of *this* worker needs to format the 'tool' message content appropriately.
                }
            }
        });
    }


    // Ensure 'parts' is not empty unless it's an assistant message starting a tool call
    if (parts.length === 0 && !(geminiRole === 'model' && tool_calls)) {
       // Add an empty text part if role is user and content was empty or only whitespace
       if (geminiRole === 'user') {
           // parts.push({ text: "" }); // Avoid sending empty parts if possible
           console.warn(`User message resulted in empty parts for content: ${JSON.stringify(content)}`);
           // Maybe skip this message entirely? Or return error?
           // Let's allow it for now, Gemini might handle it.
       } else if (geminiRole !== 'model') { // e.g. tool role with no content?
           console.warn(`Role '${geminiRole}' resulted in empty parts.`);
           // This might be invalid for Gemini, potentially causing an error upstream.
       }
    }


  return { role: geminiRole, parts };
};

// Transforms OpenAI messages array to Gemini contents array + system instruction
const transformMessages = async (messages) => {
    if (!messages || messages.length === 0) {
        throw new HttpError("Messages array is empty or missing", 400);
    }

    const contents = [];
    let system_instruction = null; // Gemini expects a single top-level instruction object

    // Separate system instruction first
    const systemMessages = messages.filter(m => m.role === "system");
    if (systemMessages.length > 1) {
        console.warn("Multiple system messages found. Concatenating them.");
        // Concatenate content of all system messages
        const combinedSystemContent = systemMessages.map(m => m.content).join("\n\n");
        system_instruction = { role: "system", parts: [{ text: combinedSystemContent }] };
    } else if (systemMessages.length === 1) {
        // Using 'await' in case system message transformation becomes async later
        system_instruction = await transformMsg(systemMessages[0]);
        // The transformMsg returns { role: "system", parts: [...] }
        // We only need the parts for the final system_instruction object
        if (system_instruction && system_instruction.parts) {
             system_instruction = { parts: system_instruction.parts }; // Structure Gemini expects
        } else {
             system_instruction = null; // Handle case where system message was empty
        }
    }

    // Process non-system messages
    const otherMessages = messages.filter(m => m.role !== "system");
    let currentContent = null;

    for (const message of otherMessages) {
        // Gemini expects alternating user/model roles ideally.
        // Handle potential consecutive messages of the same role by merging 'user' messages.
        const transformed = await transformMsg(message);

        // Skip empty transformed messages (e.g., user message with only whitespace)
        if (!transformed || transformed.parts.length === 0) {
            console.warn(`Skipping message with empty parts: ${JSON.stringify(message)}`);
            continue;
        }


        if (currentContent && currentContent.role === transformed.role && transformed.role === 'user') {
            // Merge consecutive user messages
            console.warn("Merging consecutive user messages.");
            currentContent.parts.push(...transformed.parts);
        } else if (currentContent && currentContent.role === transformed.role && transformed.role === 'model') {
             // Cannot merge model messages directly, start a new content entry
             console.warn("Consecutive model messages detected. Starting new content entry.");
             if (currentContent.parts.length > 0) { // Avoid pushing empty previous content
                 contents.push(currentContent);
             }
             currentContent = transformed;
        } else {
            // Different role, or first message after system
            if (currentContent && currentContent.parts.length > 0) { // Push previous if exists and not empty
                contents.push(currentContent);
            }
            currentContent = transformed;
        }
    }
    // Push the last processed message
    if (currentContent && currentContent.parts.length > 0) {
        contents.push(currentContent);
    }

    // Gemini specific validation/adjustments:
    // 1. Must start with 'user' message if system instruction is not present.
    if (!system_instruction && contents.length > 0 && contents[0].role !== 'user') {
        console.warn("First message is not 'user'. Prepending an empty user message.");
        contents.unshift({ role: 'user', parts: [{ text: "(Previous turn context)" }] }); // Or just "" ?
    }
     // 2. Ensure conversation ends with a 'user' message for the model to respond to.
     //    (This is usually handled by the client, but good to be aware of)
     // if (contents.length > 0 && contents[contents.length - 1].role !== 'user') {
     //    throw new HttpError("Conversation history must end with a user message", 400);
     // }


    return { system_instruction, contents };
};

// Main request transformation function
const transformRequest = async (req) => {
    const { system_instruction, contents } = await transformMessages(req.messages);
    const generationConfig = transformConfig(req);
    const finalRequest = {
        contents,
        safetySettings, // Apply safety settings
        generationConfig,
    };
    if (system_instruction) {
        finalRequest.systemInstruction = system_instruction; // Use correct field name
    }
    // Handle tools if provided
    if (req.tools && Array.isArray(req.tools)) {
        finalRequest.tools = req.tools.map(t => ({
             // Assuming OpenAI tool format is { type: "function", function: { name:, description:, parameters: } }
             // And Gemini expects { functionDeclarations: [...] }
             // This needs careful mapping based on Gemini's Tool spec
             functionDeclarations: [
                {
                    name: t.function.name,
                    description: t.function.description,
                    parameters: t.function.parameters // Assuming schema is compatible
                }
             ]
        }));
        // Add tool_config if needed (e.g., mode: AUTO, ANY, NONE)
        // finalRequest.tool_config = { function_calling_config: { mode: "AUTO" } }; // Example
    }

    // console.log("Transformed Gemini Request:", JSON.stringify(finalRequest, null, 2));
    return finalRequest;
};

// --- Response Transformation Helpers ---

const generateChatcmplId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];
  return "chatcmpl-" + Array.from({ length: 29 }, randomChar).join("");
};

const reasonsMap = { // https://ai.google.dev/api/rest/v1beta/GenerateContentResponse#finishreason
  "FINISH_REASON_UNSPECIFIED": null, // Don't map unspecified
  "STOP": "stop",
  "MAX_TOKENS": "length",
  "SAFETY": "content_filter",
  "RECITATION": "content_filter", // Map recitation to content_filter too
  "OTHER": "stop", // Map 'OTHER' to 'stop' as a fallback? Or null? Let's use stop.
  "TOOL_CODE": "tool_calls", // Not a direct OpenAI reason, mapping to tool_calls
  "FUNCTION_CALL": "tool_calls", // Legacy? Mapping to tool_calls
};

const transformCandidate = (candidate, key = "message") => {
    let content = null;
    let tool_calls = null;

    if (candidate.content?.parts) {
        // Extract text content
        const textParts = candidate.content.parts
            .filter(p => p.text !== undefined && p.text !== null)
            .map(p => p.text);
        if (textParts.length > 0) {
             content = textParts.join(""); // Concatenate text parts
        }

        // Extract tool calls (function calls in Gemini)
        const functionCallParts = candidate.content.parts
             .filter(p => p.functionCall);

        if (functionCallParts.length > 0) {
            tool_calls = functionCallParts.map((p, index) => ({
                 id: `${candidate.index || 0}_${index}_${p.functionCall.name}`, // Generate a unique ID for the tool call
                 type: "function",
                 function: {
                     name: p.functionCall.name,
                     // OpenAI expects arguments as a string, Gemini provides an object
                     arguments: JSON.stringify(p.functionCall.args || {}),
                 }
            }));
             // If there was no text content but there are tool calls, set content to null (OpenAI spec)
            // if (content === null) {
            //      content = null; // Explicitly null for tool calls
            // }
        }
    }


    // Determine finish reason
    let finish_reason = reasonsMap[candidate.finishReason] !== undefined
                      ? reasonsMap[candidate.finishReason]
                      : (candidate.finishReason ? "stop" : null); // Fallback unknown reasons to "stop" or null if absent

    // If tool calls are present, the finish reason should be 'tool_calls'
    if (tool_calls && tool_calls.length > 0) {
        finish_reason = "tool_calls";
    }

    const message = {
        role: "assistant",
        content: content,
        ...(tool_calls && { tool_calls: tool_calls }), // Include tool_calls field only if present
    };

    return {
        index: candidate.index || 0,
        [key]: message, // Use 'message' or 'delta' key
        logprobs: null, // Not provided by Gemini
        finish_reason: finish_reason,
    };
};


const transformUsage = (usageMetadata) => {
    if (!usageMetadata) return { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };
    // Gemini provides promptTokenCount, candidatesTokenCount (sum of all candidates), totalTokenCount
    return {
        prompt_tokens: usageMetadata.promptTokenCount || 0,
        // OpenAI expects tokens for the *chosen* completion. Gemini gives sum of candidates.
        // If candidateCount > 1, this isn't accurate. Assume candidateCount=1 for usage.
        completion_tokens: usageMetadata.candidatesTokenCount || 0,
        total_tokens: usageMetadata.totalTokenCount || 0,
    };
};

// Process non-streaming response
const processCompletionsResponse = (data, model, id) => {
  // console.log("Raw Gemini Response:", JSON.stringify(data, null, 2)); // Debug
  if (!data.candidates || data.candidates.length === 0) {
      // Handle cases like safety blocks or other errors returned in a 200 OK
      let errorMessage = "No candidates received from upstream API.";
      let finishReason = "error"; // Or "content_filter" if safety related
      if (data.promptFeedback?.blockReason) {
          errorMessage = `Request blocked due to ${data.promptFeedback.blockReason}.`;
          finishReason = "content_filter";
           if (data.promptFeedback.safetyRatings) {
               errorMessage += ` Details: ${JSON.stringify(data.promptFeedback.safetyRatings)}`;
           }
      }
      // Return an OpenAI-like error structure within the choices array
      return JSON.stringify({
         id,
         choices: [{
            index: 0,
            message: { role: "assistant", content: `Error: ${errorMessage}` }, // Provide error message in content
            logprobs: null,
            finish_reason: finishReason,
         }],
         created: Math.floor(Date.now()/1000),
         model,
         object: "chat.completion",
         usage: transformUsage(data.usageMetadata),
     }, null, 2); // Pretty print JSON
  }

  const choices = data.candidates.map(c => transformCandidate(c, "message"));

  return JSON.stringify({
    id,
    choices,
    created: Math.floor(Date.now()/1000),
    model, // Return the normalized model name used
    object: "chat.completion",
    usage: transformUsage(data.usageMetadata),
    // system_fingerprint: data.systemFingerprint // Include if Gemini provides it
  }, null, 2); // Pretty print JSON
};


// --- Streaming Helpers ---
const responseLineRE = /^data:\s*(.*)(?:\r\n|\r|\n){2}/; // More robust regex for line breaks
const delimiter = "\n\n";

// Helper to create a stateful parser for TransformStream
function createStreamParser() {
    let buffer = "";
    return {
        transform(chunk, controller) {
            buffer += chunk;
            // console.log("--- Buffer ---");
            // console.log(buffer);
            // console.log("--------------");
            let match;
            while ((match = buffer.match(responseLineRE))) {
                const jsonLine = match[1].trim();
                if (jsonLine) { // Avoid empty data lines
                    // console.log("Enqueueing JSON:", jsonLine); // Debug
                    controller.enqueue(jsonLine);
                } else {
                    // console.log("Skipping empty data line"); // Debug
                }
                buffer = buffer.substring(match[0].length);
            }
        },
        flush(controller) {
            if (buffer.trim()) {
                // Attempt to parse any remaining buffer content, might be an incomplete JSON
                console.warn("Stream ended with non-empty buffer:", buffer);
                // Try parsing, might fail if incomplete
                try {
                    const jsonData = JSON.parse(buffer.replace(/^data:\s*/, '').trim());
                    controller.enqueue(JSON.stringify(jsonData)); // Enqueue if valid JSON remains
                } catch (e) {
                    console.error("Failed to parse trailing stream buffer:", e);
                    // Optionally enqueue an error object or just drop it
                    // controller.enqueue(JSON.stringify({ error: "Incomplete stream data" }));
                }
            }
            // console.log("Stream parser flushed."); // Debug
        }
    };
}


// Helper to create a stateful transformer for converting Gemini stream chunks to OpenAI format
function createOpenAIStreamTransformer(options) {
    const { streamIncludeUsage, model, id } = options;
    let firstChunk = true;
    let cumulativeUsage = null; // Store usage if needed

    return {
        transform(jsonLine, controller) {
            // console.log("Transforming JSON Line:", jsonLine); // Debug
            let data;
            try {
                data = JSON.parse(jsonLine);
            } catch (err) {
                console.error("Failed to parse JSON line in stream:", jsonLine, err);
                // Create an error chunk?
                const errorChunk = {
                    id: id,
                    choices: [{
                        index: 0,
                        delta: { role: "assistant", content: `\n\n[Error parsing stream: ${err.message}]` },
                        finish_reason: "error",
                    }],
                    created: Math.floor(Date.now() / 1000),
                    model: model,
                    object: "chat.completion.chunk",
                };
                controller.enqueue("data: " + JSON.stringify(errorChunk) + delimiter);
                return; // Stop processing this line
            }

            // Handle potential errors within the Gemini stream chunk itself
            if (!data.candidates || data.candidates.length === 0) {
                let finishReason = "error";
                let errorContent = "Stream error: No candidates received.";
                 if (data.promptFeedback?.blockReason) {
                     errorContent = `Stream blocked due to ${data.promptFeedback.blockReason}.`;
                     finishReason = "content_filter";
                      if (data.promptFeedback.safetyRatings) {
                          errorContent += ` Details: ${JSON.stringify(data.promptFeedback.safetyRatings)}`;
                      }
                 } else if (data.error) { // Check for explicit error field
                     errorContent = `Stream error: ${data.error.message || JSON.stringify(data.error)}`;
                 }

                console.warn("Received stream chunk with no candidates or error:", JSON.stringify(data));
                const errorChunk = {
                    id: id,
                    choices: [{
                        index: 0,
                        delta: { content: `\n[${errorContent}]` }, // Role might be missing if first chunk
                        finish_reason: finishReason,
                    }],
                    created: Math.floor(Date.now() / 1000),
                    model: model,
                    object: "chat.completion.chunk",
                };
                 if (firstChunk) {
                     errorChunk.choices[0].delta.role = "assistant"; // Add role on first error chunk
                 }
                controller.enqueue("data: " + JSON.stringify(errorChunk) + delimiter);
                firstChunk = false; // Treat error as the first chunk if it happens first
                return; // Stop processing this chunk
            }


            // Assume only one candidate in streaming (Gemini standard)
            const candidate = data.candidates[0];

            // Transform the candidate delta
            // The transformCandidate function needs modification for delta
            const choice = transformCandidate(candidate, "delta");

            // Stream specific adjustments for OpenAI format:
            // 1. First chunk needs role.
            // 2. Subsequent chunks should omit role.
            // 3. Delta content should be present. Empty delta object if only finish_reason changes.
            // 4. Finish reason should only be in the *last* relevant chunk for that choice.

            if (firstChunk) {
                // Ensure role is present in the first chunk's delta
                choice.delta.role = "assistant";
                firstChunk = false; // No longer the first chunk
            } else {
                // Remove role from subsequent deltas for the same choice index
                delete choice.delta.role;
            }

            // If only finish_reason is present, delta message might be empty
            if (!choice.delta.content && !choice.delta.tool_calls) {
                 // If finish_reason is set, send an empty delta object {}
                 if (choice.finish_reason) {
                    choice.delta = {}; // Send empty delta if only reason changed
                 } else {
                    // No content, no tool calls, no finish reason? Skip this chunk?
                    // This might happen with safety settings filtering parts.
                    // console.warn("Skipping stream chunk with no content, tools, or finish reason:", JSON.stringify(choice));
                    // Let's send it anyway with an empty delta, client should handle.
                     choice.delta = {};
                 }
            }


            // If usage is requested and present in this chunk, store it.
            // Gemini often sends usage *only* in the final chunk.
            if (streamIncludeUsage && data.usageMetadata) {
                cumulativeUsage = transformUsage(data.usageMetadata);
                // OpenAI stream expects usage *only* in the final chunk associated with a finish_reason.
                // We will add it in the flush phase or when finish_reason is detected.
            }

            const outputChunk = {
                id: id,
                choices: [choice], // Wrap in array
                created: Math.floor(Date.now() / 1000),
                model: model,
                object: "chat.completion.chunk",
                // Usage is added only to the *final* chunk for a choice (when finish_reason is non-null)
                ...(streamIncludeUsage && choice.finish_reason && cumulativeUsage && { usage: cumulativeUsage }),
            };

            controller.enqueue("data: " + JSON.stringify(outputChunk) + delimiter);
        },

        flush(controller) {
            // Send the [DONE] marker
            controller.enqueue("data: [DONE]" + delimiter);
            // console.log("OpenAI stream transformer flushed."); // Debug
        }
    };
}
