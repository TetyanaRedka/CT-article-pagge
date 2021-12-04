import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/article/articleSelector";

export default function SearchForm() {
  const articles = useSelector(getArticles);
  return (
    <>
      <span>Filter by keywords</span>
      <input />
      <p>Results: {articles.length > 0 && <span> {articles.length}</span>} </p>

    </>
  );
}
