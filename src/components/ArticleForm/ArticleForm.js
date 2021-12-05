import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import './ArticleForm.scss'

export default function ArticleForm({ article }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 530,
      }}
      className='card'
    >
      <CardMedia
        component="img"
        height="210"
        image={article.imageUrl}
        alt={article.title}
      />
      <CardContent className='card-content'>
      <Typography variant="body1" color="text.secondary" className='article-date'>
        {moment(article.publishedAt).format("MMMM Do, YYYY")}
        </Typography>
        <Typography  gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {article.summary.length >= 100
            ? article.summary.slice(0, 100) + "..."
            : article.summary}
        </Typography>

        <Link
          to={{
            pathname: `/${article.id}`,
          }}
        >
          Read more
        </Link>
      </CardContent>
    </Card>
  );
}
