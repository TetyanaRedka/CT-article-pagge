import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getArticles } from "../../redux/article/articleSelector";
import ArticleForm from "../ArticleForm/ArticleForm";
import "./ArticleList.scss";

const ArticleList = () => {
  const articles = useSelector(getArticles);

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 9 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {articles.length > 0 &&
        articles.map((article) => (
          <Grid key={article.id} item xs={4} sm={4} md={4}>
            <ArticleForm article={article} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ArticleList;
