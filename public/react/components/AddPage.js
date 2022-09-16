import React, { useState } from "react";
import apiURL from "../api";
import "./addPage.css";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [tags, setTags] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    const URL = `${apiURL}/wiki/`;
    const articleData = {
      title,
      content,
      name: authorName,
      email: authorEmail,
      tags,
    };
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    console.log(results);
    window.location.reload();
  }
  return (
    <form>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        required
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="Article Content"
        required
      />
      <input
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        type="text"
        placeholder="Author Name"
        required
      />
      <input
        value={authorEmail}
        onChange={(e) => setAuthorEmail(e.target.value)}
        type="text"
        placeholder="Author Email"
        required
      />
      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        type="text"
        placeholder="Tags"
        required
      />
      <button style={{ cursor: "pointer" }} onClick={submitForm}>
        Create Page
      </button>
    </form>
  );
};

export default AddPage;
