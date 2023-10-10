import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src="src/assets/Logo.svg" alt="LearnHub Logo" />

      <div>
        <button className={classes.LinkBottom}> Login</button>
        <button className={classes.PrimaryBottom}> register</button>
      </div>
    </div>
  );
};

export default Navbar;
