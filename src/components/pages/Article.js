import React from "react";
import HeroArticle from "../HeroArticle";
import { articleContent } from "./Data";

function Article() {
  return (
    <>
      <HeroArticle {...articleContent} />
    </>
  );
}

export default Article;
