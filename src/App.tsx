import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Learn from "./component/Learn";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="feed-container">
        <Learn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
