import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../redux/article/articleOperation";
import { getArticles } from "../../redux/article/articleSelector";
import ArticleForm from "../ArticleForm/ArticleForm";

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  console.log(articles);
  return (
    <ul>
      {articles.length > 0 &&
        articles.map((article) => (
          <li key={article.id}>
            <Link
              to={{
                pathname: `/${article.id}`,
              }}
            >
              <ArticleForm article={article} />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ArticleList;
