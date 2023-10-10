import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h6>© 2020 Learnhub, Inc. All rights reserved.</h6>

      <div className={classes.socialicon}>
        <img src="src/assets/Social link.svg" alt="Facebook icon" />
        <img src="src/assets/Social link-1.svg" alt="Instagram Icon" />
        <img src="src/assets/Social link-2.svg" alt="Twitter Icon " />
        <img src="src/assets/Social link-3.svg" alt="Github Icon" />
        <img src="src/assets/Social link-4.svg" alt="Dribble Icon" />
      </div>
    </div>
  );
};

export default Footer;
