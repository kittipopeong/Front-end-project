import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import PostDetail from "./Pages/PostDetail";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/learn/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
