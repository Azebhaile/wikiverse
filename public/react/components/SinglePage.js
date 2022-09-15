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
  return (
    <div id="singlePage">
      <h1>{page.title}</h1>
      {authorName && <h2>Author: {authorName}</h2>}{" "}
      <h2>{page.status}</h2>
      <h3>{page.createdAt}</h3>
      <p>{page.content}</p>
    </div>
  );
};

export default SinglePage;
