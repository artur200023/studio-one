import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { recieveNews } from "../../redux/thunks/newsThunk";
import { newsSelector } from "../../redux/slices/news";
import Card from "../../components/card";
import "../../assets/scss/card.scss";
import "./news.css";
import NewsPopup from "../../components/popups/newsPopup";
const News = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [newsItem, setNewsItem] = useState({});

  const dispatch = useDispatch();
  const newsList = useSelector(newsSelector);

  useEffect(() => {
    dispatch(recieveNews());
  }, [dispatch]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const editPopup = (news) => {
    setNewsItem({ ...news });
    openPopup();
  };

  const fibonacci = (n) => {
    let fib = [1, 1];
    for (let i = 2; i <= n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

  const fib = fibonacci(newsList.length - 1);
  return (
    <>
      <div className="container">
        <DefaultLayout>
          <h1>News</h1>
          <div className="search_news">
            <input
              className="search"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="edit_btn" onClick={() => openPopup()}>
              Add News
            </button>
          </div>

          <div className="news_list">
            {newsList.length &&
              newsList
                .filter((news) => news.title.includes(searchText))
                .map((news, index) => {
                  return (
                    <Card
                      editPopup={editPopup}
                      news={news}
                      key={index}
                      index={index}
                      fibNumber={fib[index]}
                    />
                  );
                })}
          </div>

          <NewsPopup
            setShowPopup={(e) => setShowPopup(e)}
            news={newsItem}
            openProps={showPopup}
          />
        </DefaultLayout>
      </div>
    </>
  );
};

export default News;
