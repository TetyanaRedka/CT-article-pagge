import { createAction } from "@reduxjs/toolkit";

export const fetchListArticlesRequest = createAction(
  "articles/fetchListArticlesRequest"
);
export const fetchListArticlesSuccess = createAction(
  "articles/fetchListArticlesSuccess"
);
export const fetchListArticlesError = createAction(
  "articles/fetchListArticlesError"
);

export const fetchArticleByIdRequest = createAction(
  "articles/fetchArticleByIdRequest"
);
export const fetchArticleByIdSuccess = createAction(
  "articles/fetchArticleByIdSuccess"
);
export const fetchArticleByIdError = createAction(
  "articles/fetchArticleByIdError"
);


export const filterArticle = createAction('article/filter');