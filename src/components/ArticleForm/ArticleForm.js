export default function ArticleForm({ article }) {
  console.log(article);
  return (
    <div>
      <img src={article.imageUrl} alt={article.title} />
      <span>{article.publishedAt}</span>
      <p>{article.title}</p>
      <span>{article.summary}</span>
      <span>Read more </span>
    </div>
  );
}
