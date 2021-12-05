import React, { useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "../../redux/article/articleOperation";
import { getArticleDetales } from "../../redux/article/articleSelector";

export default function ArticlePage() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch]);

  const article = useSelector(getArticleDetales);

  return (
    <>
      <div>
        {/* <img src={article.imageUrl} alt={article.title} /> */}
        <div>
          <p>{article.title}</p>
          <span>{article.summary}</span>
        </div>

        <NavLink to="/">Back to homepage</NavLink>
      </div>
    </>
  );
}
