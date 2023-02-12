import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNewsAction,
  updateNewsAction,
  recieveNews,
} from "../../redux/thunks/newsThunk";

const NewsPopup = ({ news, openProps, setShowPopup }) => {
  const dispatch = useDispatch();
  const [openPopup, showHide] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      content,
      image,
    };

    console.log("newsId", newsId);
    console.log("payload", payload);

    payload.id = !newsId ? new Date().getTime() : newsId;

    try {
      if (!newsId) {
        await dispatch(createNewsAction(payload));
      } else {
        await dispatch(updateNewsAction(payload));
      }

      await dispatch(recieveNews());

      shorOrHiderPopup(false)
    } catch (error) {}

    console.log("payload", payload);
  };

  const shorOrHiderPopup = (value) => {
    showHide(value);
    setShowPopup(value);
  };

  useEffect(() => {
    if (news.id) {
      setNewsId(news.id);
      setTitle(news.title);
      setContent(news.content);
      setImage(news.image);
    }
  }, [news]);

  useEffect(() => {
    shorOrHiderPopup(openProps);
  }, [openProps]);

  return openPopup ? (
    <div className="popup">
      <h3>This is a Popup</h3>
      <p>Click outside the popup to close it</p>
      <button className="close" onClick={() => shorOrHiderPopup(false)}>
        X
      </button>

      <form onSubmit={submitForm} className="add_news">
        <p className="add_text">Submit</p>

        <input
          placeholder="Add_title"
          className="add_title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="Add_content"
          className="add_content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <input
          placeholder="Add_img"
          className="add_content"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button className="add">{newsId?'Edit':'Add'}</button>
      </form>
    </div>
  ) : null;
};

export default NewsPopup;
