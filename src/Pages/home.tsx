import useContents from "../Hooks/useContents";
import Banner from "../component/Banner";
import Learn from "../component/Learn";
import classes from "./Home.module.css";

const Home = () => {
  const { posts } = useContents();
  return (
    <div className={classes.Containner}>
      <Banner />
      <div className={classes.feedContainer}>
        {posts &&
          posts.map((learn) => {
            return <Learn key={learn.id} content={learn} />;
          })}
      </div>
    </div>
  );
};

export default Home;
