import React, { useState } from "react";
import apiURL from "../api";

import SinglePage from "./SinglePage";

export const Page = (props) => {
  const [pages, setPages] = useState();
  async function getPage(title) {
    let res = await fetch(`${apiURL}/wiki/slug/?slug=${title}`);
    const pageData = await res.json();
    setPages(pageData);
  }
  return (
    <>
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => {
          getPage(props.page.slug);
        }}
      >
        {props.page.title}
      </h3>

      {pages ? <SinglePage page={pages} /> : ""}
    </>
  );
};
