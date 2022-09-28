import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/header/Nav";
import Map from "./pages/Map";
import Listpage from "./pages/Listpage";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import PlaceRegistration from "./pages/PlaceRegistration";
import Signup from "./pages/Signup";
import Detailpage from "./pages/Detailpage";
import ScrollToTop from "./hooks/useLocation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/place" element={<Listpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/regist" element={<PlaceRegistration />} />
          <Route path="/place/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;