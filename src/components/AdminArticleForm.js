import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./AdminArticleForm.css";

function AdminArticleForm({ item }) {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState([""]);
  const [preview, setPreview] = useState("");
  const [article, setArticle] = useState("");
  const [curTitle, setCurTitle] = useState(item.title);
  const [curImg, setCurImg] = useState(item.img);
  const [curPreview, setCurPreview] = useState(item.preview);
  const [curArticle, setCurArticle] = useState(item.article);

  let history = useHistory();

  const location = useLocation();

  const editArticle = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      title: curTitle,
      img: curImg,
      preview: curPreview,
      article: curArticle,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://gibil-server.vercel.app/api/v1/article/edit/${item._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        history.push("/adminarticles");
      })
      .catch((error) => console.log("error", error));
  };

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

    fetch("https://gibil-server.vercel.app/api/v1/article/", requestOptions)
      .then((response) => response.json())
      .then((result) => history.push("/adminarticles"))
      .catch((error) => console.log("error", error));
  };

  if (location.pathname === `/adminarticles/${item._id}`) {
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
          <form className="admin-article-form" onSubmit={(e) => editArticle(e)}>
            <div className="admin-article-form__title">
              <h2>Add new article</h2>
            </div>
            <div className="admin-article-form__inputs">
              <div className="admin-article-form__inputs-title">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={curTitle}
                  onChange={(e) => setCurTitle(e.target.value)}
                />
              </div>
              <div className="admin-article-form__inputs-text">
                <label htmlFor="article">Article</label>
                <textarea
                  id="article"
                  value={curArticle}
                  onChange={(e) => setCurArticle(e.target.value)}
                />
              </div>
              <div className="admin-article-form__inputs-image">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  value={curImg}
                  onChange={(e) => setCurImg(e.target.value)}
                />
              </div>
              <div className="admin-article-form__inputs-preview">
                <label htmlFor="preview">Preview</label>
                <input
                  type="text"
                  id="preview"
                  value={curPreview}
                  onChange={(e) => setCurPreview(e.target.value)}
                />
              </div>
              <div className="admin-article-form__inputs-button">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

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
        <form className="admin-article-form" onSubmit={(e) => addArticle(e)}>
          <div className="admin-article-form__title">
            <h2>Add new article</h2>
          </div>
          <div className="admin-article-form__inputs">
            <div className="admin-article-form__inputs-title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="admin-article-form__inputs-text">
              <label htmlFor="article">Article</label>
              <textarea
                id="article"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
            </div>
            <div className="admin-article-form__inputs-image">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="admin-article-form__inputs-preview">
              <label htmlFor="preview">Preview</label>
              <input
                type="text"
                id="preview"
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
              />
            </div>
            <div className="admin-article-form__inputs-button">
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminArticleForm;
