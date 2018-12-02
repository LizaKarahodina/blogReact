import React from "react";
import Article from "../Headerpost";
import "./ArticleList.scss";

export default function ActicleList({ articles }) {
  const articlesElements = articles.map(article => (
    <div className="acticleElement">
      <Article key={article.id} article={article} />
    </div>
  ));
  return <div>{articlesElements}</div>;
}
