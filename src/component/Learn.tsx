import classes from "./Learn.module.css";

const Learn = () => {
  return (
    <div className={classes.containercard}>
      <img src="src/assets/LearnImage.jpg" alt="Learn cover" />
      <div className={classes.containercontent}>
        <div>
          <h2>PASULOL กุ่ยนายฮอลและเสามงคล</h2>
          <h4>PASULOL</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
          </p>
        </div>
        <div className={classes.containtertittle}>
          <div>
            <h5>Shushi Washabi</h5>
            <p className={classes.tittleauthor}>Author</p>
          </div>
          <div>
            <div className={classes.containerrating}>
              <img src="src/assets/Star.svg" alt="Rating Star" />
              <img src="src/assets/Star.svg" alt="Rating Star" />
              <img src="src/assets/Star.svg" alt="Rating Star" />
              <img src="src/assets/Star.svg" alt="Rating Star" />
              <img src="src/assets/Star.svg" alt="Rating Star" />
            </div>
            <p className={classes.tittlerating}>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
