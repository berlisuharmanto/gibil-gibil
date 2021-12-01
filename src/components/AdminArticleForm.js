import React, { useState } from "react";
import "./AdminArticleForm.css";

function AdminArticleForm() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState([""]);
  const [preview, setPreview] = useState("");
  const [article, setArticle] = useState("");

  const addArticle = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title,
      img,
      preview,
      article,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/v1/article/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div
        className="add-article-main"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/addArticle.png"
          })`,
        }}
      >
        <form className="admin-article-form">
          <div className="admin-article-form__title">
            <h2>Add new article</h2>
          </div>
          <div className="admin-article-form__inputs">
            <div className="admin-article-form__inputs-title">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" />
            </div>
            <div className="admin-article-form__inputs-text">
              <label htmlFor="article">Article</label>
              <textarea id="article" />
            </div>
            <div className="admin-article-form__inputs-image">
              <label htmlFor="image">Image</label>
              <input type="text" id="image" />
            </div>
            <div className="admin-article-form__inputs-button">
              <button>Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminArticleForm;
