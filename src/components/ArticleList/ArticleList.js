import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getArticles } from "../../redux/article/articleSelector";
import ArticleForm from "../ArticleForm/ArticleForm";

const ArticleList = () => {
  const articles = useSelector(getArticles);

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
