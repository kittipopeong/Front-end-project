import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.BannerContainer}>
      <h1>
        Learn<span>Hub</span>
      </h1>
      <p>
        Hub for Educational Videos For Everyone Who want to be the best in area
      </p>
      <div>
        <button className={classes.PrimaryBottom}>Create New Video</button>
        <button className={classes.SecondaryBottom}> All Videos</button>
      </div>
    </div>
  );
};

export default Banner;
