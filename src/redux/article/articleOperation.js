import axios from "axios";

import {
  fetchListArticlesRequest,
  fetchListArticlesSuccess,
  fetchListArticlesError,
  fetchArticleByIdRequest,
  fetchArticleByIdSuccess,
  fetchArticleByIdError,
} from "./articleAction";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetchArticles = () => (dispatch) => {
  dispatch(fetchListArticlesRequest());

  return axios
    .get("")
    .then(({ data }) => dispatch(fetchListArticlesSuccess(data)))
    .catch((error) => dispatch(fetchListArticlesError(error.message)));
};

export const fetchArticleById = (id) => (dispatch) => {
  dispatch(fetchArticleByIdRequest());

  return axios
    .get(`/${id}`)
    .then(({ data }) => dispatch(fetchArticleByIdSuccess(data)))
    .catch((error) => dispatch(fetchArticleByIdError(error.message)));
};
