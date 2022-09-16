import React, { useEffect, useState } from "react";
import apiURL from "../api";
import "./singlepage.css";
const SinglePage = ({ page }) => {
  const [authorName, setAuthorName] = useState();

  useEffect(() => {
    const getAuthor = async () => {
      const res = await fetch(`${apiURL}/users/${page.authorId}`);
      const data = await res.json();

      setAuthorName(data.name);
    };
    getAuthor();
  }, [authorName]);

  async function deleteArticle(slug) {
    const URL = `${apiURL}/wiki/slug/?slug=${slug}`;
    const response = await fetch(URL, {
      method: "DELETE",
    });
    const res = await response.json();
    console.log(response);
    window.location.reload();
  }

  return (
    <div id="singlePage">
      <h1>{page.title}</h1>
      {authorName && <h2>Author: {authorName}</h2>} <h2>{page.status}</h2>
      <h3>{page.createdAt}</h3>
      <p>{page.content}</p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => window.location.reload()}
      >
        Back to wiki list
      </button>
      <button
        onClick={() => deleteArticle(page.slug)}
        style={{ cursor: "pointer" }}
      >
        DELETE
      </button>
    </div>
  );
};

export default SinglePage;
