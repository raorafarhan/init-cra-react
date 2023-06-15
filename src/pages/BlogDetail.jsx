import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [article, setAtricel] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
          );
          if(!request.ok){
            setNotFound(true);
          }
          const response = await request.json();
          document.title = response.title;
        setAtricel(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound){
    return <h1>Article not found :(</h1>
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading article ...</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img className="article-img" src={article.imageUrl} alt={article.title} />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            {" "}
            Source :{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {" "}
              {article.newsSite}
            </a>{" "}
          </p>
        </article>
      )}
    </section>
  );
};

export default BlogDetail;
