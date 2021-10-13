import React from "react";
import { asideContent } from "./pages/Data";
import "./HeroArticle.css";
import HeroAside from "./HeroAside";

function HeroArticle({ mainTitle, article01, article02, img, subTitle }) {
  return (
    <>
      <div className="hero_article_main">
        <div className="hero_related_article"></div>
        <div className="hero_article_content">
          <div className="hero_article_banner"></div>
          <div className="hero_article_core">
            <div className="text-wrapper">
              <h1 className="article_title">{mainTitle}</h1>
              <p>{article01}</p>
              <h3>{subTitle}</h3>
              <img src={img} alt={img} />
              <p>{article02}</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias nam ipsam ea atque aut, et recusandae perspiciatis
                pariatur ullam, dicta quam vero voluptate ut laborum illum porro
                voluptates incidunt a? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae natus quasi earum. Unde expedita
                iste suscipit ab culpa ut eos accusantium modi esse commodi
                voluptate asperiores ullam, quod neque accusamus! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Possimus assumenda
                similique, sapiente natus, veniam quod aliquam blanditiis
                repudiandae reprehenderit ex vitae illum vero. Accusantium est
                et labore qui modi commodi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quibusdam quis, deserunt unde iste
                ipsum et. Quae impedit blanditiis vero, tenetur quo, nulla
                dolore corrupti quis ex maxime adipisci asperiores debitis!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias nam ipsam ea atque aut, et recusandae perspiciatis
                pariatur ullam, dicta quam vero voluptate ut laborum illum porro
                voluptates incidunt a? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae natus quasi earum. Unde expedita
                iste suscipit ab culpa ut eos accusantium modi esse commodi
                voluptate asperiores ullam, quod neque accusamus! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Possimus assumenda
                similique, sapiente natus, veniam quod aliquam blanditiis
                repudiandae reprehenderit ex vitae illum vero. Accusantium est
                et labore qui modi commodi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quibusdam quis, deserunt unde iste
                ipsum et. Quae impedit blanditiis vero, tenetur quo, nulla
                dolore corrupti quis ex maxime adipisci asperiores debitis!
              </p>
            </div>
          </div>
        </div>
        <HeroAside {...asideContent} />
      </div>
    </>
  );
}

export default HeroArticle;
