import Reaarticlet, { useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "../../redux/article/articleOperation";
import { getArticleDetales } from "../../redux/article/articleSelector";

export default function ArticlePage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch]);

  const article = useSelector(getArticleDetales);

  console.log(article.content);

  return (
    <>
      <div>
        seljkrgslfk
        <img src={article.imageUrl} alt={article.title} />
        <div>
          <p>{article.title}</p>
          <span>{article.summary}</span>
        </div>
        <button>Back to homepage</button>
      </div>
    </>
  );
}
