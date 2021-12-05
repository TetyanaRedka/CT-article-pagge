import { Container } from "@mui/material";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";

export default function HomePage() {
  return (

    <Container>
      <SearchForm />
      <ArticleList />
    </Container>

  );
}
