import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNews, recieveNews } from "../../redux/thunks/newsThunk";
import "./card.css";

const Card = ({ news, editPopup, index, fibNumber }) => {
  const dispatch = useDispatch();

  const deletItem = async () => {
    try {
      await dispatch(deleteNews(news));
      await dispatch(recieveNews());
    } catch (error) {}
  };

  console.log("fibNumber", fibNumber);

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <>
      <div className="card_block">
        <div className="news_content">
          <img
            className="card_img"
            src={news.image}
            alt={news.title}
            title={news.title}
          />
          <div className="fib">
            <p>Card {index + 1}</p>
            <p>Fibonacci Numbers: {fibNumber}</p>
            <p>{isPrime(fibNumber) ? " Prime" : "Not Prime"}</p>
          </div>

          <div className="title">{news.title}</div>
          <div className="description">{news.content}</div>
          <button onClick={() => deletItem()} className="delete_item">
            X
          </button>
          <button onClick={() => editPopup(news)} className="edit_item ">
            E
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
