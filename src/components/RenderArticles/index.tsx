import articles from "../../../static/data/articles.json"

export default function RenderArticles() {
  return (
    <div>
      {articles.map((article) => (
        <div style={{margin: "15px"}}>
          {" "}
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            {article.title}
          </a>{" "}
          - {article.authors.join(", ")}{" "}
        </div>
      ))}
    </div>
  )
}
