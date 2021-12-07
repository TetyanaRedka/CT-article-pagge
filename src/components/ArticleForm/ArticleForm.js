import Highlighter from "react-highlight-words";

import { Card, CardContent, CardActions, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import "./ArticleForm.scss";

export default function ArticleForm({ article, searchData }) {
  const text =
    article.summary.length >= 100
      ? article.summary.slice(0, 100) + "..."
      : article.summary;

  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
      className="card"
    >
      <CardMedia
        component="img"
        height="210"
        image={article.imageUrl}
        alt={article.title}
      />
      <CardContent className="card-content">
        <Typography
          variant="body1"
          color="text.primary"
          className="article-date"
        >
          {moment(article.publishedAt).format("MMMM Do, YYYY")}
        </Typography>

        <Typography variant="h6" color="text.primary">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={searchData}
            autoEscape={true}
            textToHighlight={article.title}
          />
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          className="article-description"
        >
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={searchData}
            autoEscape={true}
            textToHighlight={text}
          />
        </Typography>
        </CardContent>
        <CardActions className="link-action">
        <Link
          className="link"
          to={{
            pathname: `/${article.id}`,
          }}
        >
          Read more
        </Link>
        </CardActions>
    </Card>
  );
}
