import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { API_BASE } from "../../../environment";

type PasswordField = "password";

const Login3: React.FC = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const [error, setError] = useState("");

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // LOGIN FAILED
      if (!response.ok || !data.access) {
        setError("❌ Invalid username or password");
        return;
      }

      // SAVE TOKENS
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      // SAVE USER INFO
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.username || username,
          role: data.role || "employee",
        })
      );

      // ROLE-BASED REDIRECT
      if (data.role === "admin" || data.role === "hr") {
        navigate("/admin-dashboard");
      } else {
        navigate("/employee-dashboard");
      }

    } catch (error) {
      console.error("Login error:", error);
      setError("⚠️ Unable to connect to backend. Please try again.");
    }
  };

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
          <div className="col-md-4 mx-auto vh-100">
            <form className="vh-100" onSubmit={handleLogin}>
              <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                <div className="mx-auto mb-5 text-center">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>

                <div>
                  <div className="text-center mb-3">
                    <h2 className="mb-2">Sign In</h2>
                    <p className="mb-0">
                      Please enter your details to sign in
                    </p>
                  </div>

                  {error && (
                    <p className="text-danger text-center fw-bold">{error}</p>
                  )}

                  {/* Username Field */}
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control border-end-0"
                        placeholder="Enter your username"
                        required
                      />
                      <span className="input-group-text border-start-0">
                        <i className="ti ti-user" />
                      </span>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.password ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pass-input form-control"
                        placeholder="Enter your password"
                        required
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("password")}
                      ></span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="form-check form-check-md mb-0">
                      <input
                        className="form-check-input"
                        id="remember_me"
                        type="checkbox"
                      />
                      <label
                        htmlFor="remember_me"
                        className="form-check-label mt-0"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="text-end">
                      <Link
                        to={all_routes.forgotPassword3}
                        className="link-danger"
                      >
                        Forgot Password
                      </Link>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Sign In
                    </button>
                  </div>

                  <div className="text-center">
                    <h6 className="fw-normal text-dark mb-0">
                      Don’t have an account?
                      <Link to={all_routes.register3} className="hover-a">
                        {" "}
                        Create Account
                      </Link>
                    </h6>
                  </div>

                  <div className="login-or">
                    <span className="span-or">Or</span>
                  </div>

                  <div className="mt-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/facebook-logo.svg"
                            alt="Facebook"
                          />
                        </Link>
                      </div>
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/google-logo.svg"
                            alt="Google"
                          />
                        </Link>
                      </div>
                      <div className="text-center flex-fill">
                        <Link
                          to="#"
                          className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/apple-logo.svg"
                            alt="Apple"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pb-4 text-center">
                  <p className="mb-0 text-gray-9">
                    Copyright © 2024 - Smarthr
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login3;
