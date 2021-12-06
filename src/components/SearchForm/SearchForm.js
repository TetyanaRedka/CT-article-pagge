import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchArticles } from "../../redux/article/articleOperation";
import { filterArticle } from "../../redux/article/articleAction";

import { IconButton, InputBase, InputLabel, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchForm.scss";

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(e.target.value);
      e.target.value = "";
    }
  };

  const setSearch = useCallback(
    (value) => {
      dispatch(fetchSearchArticles(value));
      dispatch(filterArticle(value));
    },
    [dispatch]
  );

  return (
    <div className="search-form">
      <InputLabel
        sx={{
          color: "primary",
        }}
        className="search-label"
      >
        Filter by keywords
      </InputLabel>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
          height: 50,
        }}
        type="text"
        name="name"
        onKeyDown={handleSearch}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>
    </div>
  );
}
