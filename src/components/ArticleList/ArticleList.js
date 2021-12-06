import { Grid, InputLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { getArticles, getFilter, getLoading } from "../../redux/article/articleSelector";
import ArticleForm from "../ArticleForm/ArticleForm";
import "./ArticleList.scss";

const ArticleList = () => {
  const articles = useSelector(getArticles);
  const searchData = useSelector(getFilter)
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
    const loading = useSelector(getLoading);


  return (
    <div className="list">
      {loading && <h1>...</h1>}
      <InputLabel
        sx={{
          color: "primary",
        }}
        className="result"
      >
        Results:{" "}
        {articles.length > 0 && (
          <span className="result"> {articles.length}</span>
        )}
      </InputLabel>

      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.length > 0 &&
          articles.map((article) => (
            <Grid key={article.id} item xs={4} sm={4} md={4}>
              <ArticleForm article={article} searchData={searchData} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ArticleList;
