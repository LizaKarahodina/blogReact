import React from "react";
import ArticleList from "../components/ArticleList/ArticleList.js";
import "../styles.css";
import articles from "../data";
function App() {
  return (
    <div className="App">
      <ArticleList articles={articles} />
      <h2>Just see magic happen!</h2>
    </div>
  );
}

export default App;
