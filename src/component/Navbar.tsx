import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <img src="src/assets/Logo.svg" alt="LearnHub Logo" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
        >
          Feed
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/Login"
          className={({ isActive }) =>
            isActive ? classes.LinkBottom : classes.inactiveLinkBottom
          }
        >
          Login
        </NavLink>

        <button className={classes.PrimaryBottom}> register</button>
      </div>
    </div>
  );
};

export default Navbar;
