import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerCollapse: false,
  sidebarCollapse: false,
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleHeaderCollapse(state) {
      state.headerCollapse = !state.headerCollapse;
    },
    toggleSidebar(state) {
      state.sidebarCollapse = !state.sidebarCollapse;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  toggleHeaderCollapse,
  toggleSidebar,
  toggleDarkMode,
} = themeSlice.actions;

export default themeSlice.reducer;
