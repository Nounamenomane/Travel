import css from "./BLogCard.module.css";
import dot from "./Ellipse 16.png";
import avatar from "./img.png";

function BLogCard(props) {
  return (
    <div className={css.card}>
      <img src={props.img} alt="" />
      <div className={css.date}>
        <p>24 May 2019</p>
        <img src={dot} alt="" />
        <p>8 min read</p>
      </div>
      <h1>{props.title}</h1>
      <div className={css.avatar}>
        <img src={avatar} alt="" />
        <p>Jane Cooper</p>
      </div>
    </div>
  );
}

export default BLogCard;
