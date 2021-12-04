import { configureStore } from "@reduxjs/toolkit";
import articles from "./article/articleReducer";

const store = configureStore({
  reducer: {
    articles,
  },
});

export default store;
