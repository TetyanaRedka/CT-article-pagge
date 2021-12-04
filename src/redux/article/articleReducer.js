import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchListArticlesRequest,
  fetchListArticlesSuccess,
  fetchListArticlesError,
  fetchArticleByIdRequest,
  fetchArticleByIdSuccess,
  fetchArticleByIdError,
} from "./articleAction";

const articles = createReducer([], {
  [fetchListArticlesSuccess]: (_, { payload }) => payload,
});

const article = createReducer("", {
  [fetchArticleByIdSuccess]: (_, { payload }) => payload,
});

export default combineReducers({ articles, article });
