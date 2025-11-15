import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import themeSettingReducer from "./themeSettingSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    themeSetting: themeSettingReducer,
  },
});

export default store;


