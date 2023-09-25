import css from "./CardReviews.module.css";
import raiting from "./Rating.png";
import dot from "./Ellipse.png";
import { useState } from "react";
import HideComments from "../hideComments/HideComments";

function CardReviews(props) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={css.reviews}>
      <img src={props.img} alt="" />
      <div className={css.review_card}>
        <div className={css.title}>
          <h1>{props.title}</h1>
          <img src={raiting} alt="" />
        </div>
        <p className={css.date}>09 Mar 2020</p>
        <div className={css.desc}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={css.btns}>
          <button className={css.btn} onClick={() => setShowComments(true)}>
            {" "}
            <h2>show</h2>
          </button>
          <img src={dot} alt="" />
          <button className={css.btn} onClick={() => setShowComments(false)}>
            <h2>hide</h2>
          </button>
        </div>
        {showComments ? <HideComments /> : null}
      </div>
    </div>
  );
}

export default CardReviews;
