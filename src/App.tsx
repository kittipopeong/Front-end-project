import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Learn from "./component/Learn";
import Footer from "./component/Footer";
import useContents from "./Hooks/useContents";

function App() {
  const { posts } = useContents();
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="feed-container">
        {posts &&
          posts.map((learn) => {
            return <Learn key={learn.id} content={learn} />;
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
