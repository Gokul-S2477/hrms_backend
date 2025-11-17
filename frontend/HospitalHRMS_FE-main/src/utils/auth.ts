export function getUserRole() {
  try {
    const token = localStorage.getItem("access_token");

    if (!token) return "";

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role || "";
  } catch {
    return "";
  }
}
