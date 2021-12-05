import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchArticles } from "../../redux/article/articleOperation";
import { getArticles } from "../../redux/article/articleSelector";


import { IconButton, InputBase, InputLabel, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchForm.scss";



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
    <div className="search-form">
    <InputLabel className='search-label' >Filter by keywords</InputLabel>
      
   <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, height: 50 }}
      type="text"
      name="name"
      value={data}
      onChange={changeData}
      onBlur={searchArticles}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Paper>

      <p>Results: {articles.length > 0 && <span> {articles.length}</span>} </p>
      
   
    </div>
  );
}
