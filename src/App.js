import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/login/Login";
import Profile from "./pages/profile";
import News from "./pages/news";
import "./App.css";

function App() {
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
