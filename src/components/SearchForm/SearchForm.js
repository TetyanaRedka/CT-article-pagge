import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchArticles } from "../../redux/article/articleOperation";
import { getArticles } from "../../redux/article/articleSelector";

import { InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import "./SearchForm.scss";
import { height } from "@mui/system";

export default function SearchForm() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const articles = useSelector(getArticles);

  const changeData = (e) => {
    const { value } = e.target;
    setData(value);
  };

  const searchArticles = () => {
    dispatch(fetchSearchArticles(data));
    setData("");
  };

  return (
    <>
      <span>Filter by keywords</span>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        value={data}
        onChange={changeData}
        onBlur={searchArticles}
      />
      <p>Results: {articles.length > 0 && <span> {articles.length}</span>} </p>
    </>
  );
}
