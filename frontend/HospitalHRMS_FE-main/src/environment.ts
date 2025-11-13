// src/environment.ts

// ✅ Base API URL (Hardcoded for local development)

//export const API_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000";
export const API_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000";

// 🌄 Image path
export const img_path = "/assets/img/";

// ⚙️ Base path for router
export const base_path = "/";

export default {
  API_BASE,
  img_path,
  base_path,
};
