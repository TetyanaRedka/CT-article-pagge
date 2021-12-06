import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchListArticlesRequest,
  fetchListArticlesSuccess,
  fetchListArticlesError,
  fetchArticleByIdRequest,
  fetchArticleByIdSuccess,
  fetchArticleByIdError,
  filterArticle,
} from "./articleAction";

const articles = createReducer([], {
  [fetchListArticlesRequest]: (_, __) => [],
  [fetchListArticlesSuccess]: (_, { payload }) => payload,
});

const article = createReducer("", {
  [fetchArticleByIdRequest]: (_, __) => "",
  [fetchArticleByIdSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [filterArticle]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchListArticlesRequest]: () => true,
  [fetchListArticlesSuccess]: () => false,
  [fetchListArticlesError]: () => false,
  [fetchArticleByIdRequest]: () => true,
  [fetchArticleByIdSuccess]: () => false,
  [fetchArticleByIdError]: () => false,
});

export default combineReducers({ articles, article, filter, loading });
