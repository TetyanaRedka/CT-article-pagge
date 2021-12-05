import React, { useEffect} from "react";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "../../redux/article/articleOperation";
import { getArticleDetales } from "../../redux/article/articleSelector";
import { Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./ArticlePage.scss"

export default function ArticlePage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch]);

  const article = useSelector(getArticleDetales);

  return (

      <div className ="article-page">
        <div className='image-container'  style={{backgroundImage: `url(${article.imageUrl})` }}></div>

        <Container maxWidth="sm" sx={{ bgcolor: '#FFFFFF'}} className="article-card">
        <Typography variant='h6'>{article.title}</Typography>
          <Typography variant='p'>{article.summary}</Typography>

       </Container>
    

        <Link to="/" className="link-back">
        <ArrowBackIcon sx={{ fontSize: 10 }} />
          Back to homepage</Link>
      </div>

  );
}
