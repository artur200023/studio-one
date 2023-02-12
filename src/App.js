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
  console.log("pathname", pathname);
  const userLoggedIn = useSelector(userLoggedInSelector);
  
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn == 'true') {
     dispatch(setUserLoggedIn(true));
    console.log('loggedIn ', loggedIn );
  }


  useEffect( () => {
    /// nayuma ete reduxum userLoggedIn false - a u logini kam registeri ejum ches profile-i ej
   
    console.log('userLoggedIn ', userLoggedIn );

    if (!userLoggedIn) {
      console.log(666);
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
