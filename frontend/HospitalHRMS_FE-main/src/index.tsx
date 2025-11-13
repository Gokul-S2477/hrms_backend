import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { base_path } from "./envconfig";       // ✅ renamed
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/css/feather.css";
import "./index.scss";
import store from "./core/data/redux/appStore"; // ✅ renamed
import { Provider } from "react-redux";
import "./style/icon/boxicons/boxicons/css/boxicons.min.css";
import "./style/icon/weather/weathericons.css";
import "./style/icon/typicons/typicons.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/icon/ionic/ionicons.css";
import "./style/icon/tabler-icons/webfont/tabler-icons.css";
import AppRouter from "./feature-module/router/AppRouter"; // ✅ renamed
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
