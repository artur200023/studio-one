import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/login/Login";
import Profile from "./pages/profile";
import News from "./pages/news";
import { userLoggedInSelector, setUserLoggedIn } from "./redux/slices/auth";
import "./App.css";
import { useEffect } from "react";
import { whiteList } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const userLoggedIn = useSelector(userLoggedInSelector);
  
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn == 'true') {
     dispatch(setUserLoggedIn(true));
  }


  useEffect( () => {
    if (!userLoggedIn) {
      navigate("/login");
    }
  }, [userLoggedIn]);
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not found 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
