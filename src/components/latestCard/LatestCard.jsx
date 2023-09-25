import css from "./LatestCard.module.css";
import dot from "./Ellipse 16.png";
import avatar from "./img.png";

function LatestCard(props) {
  return (
    <div className={css.card}>
      <img className={css.img} src={props.img} alt="" />
      <div className={css.title}>
        <div className={css.date}>
          <p>24 May 2019</p>
          <img src={dot} alt="" />
          <p>8 min read</p>
        </div>
        <h1>The More Important the Work, the More Important the Rest</h1>
      </div>
      <div className={css.avatar}>
        <img src={avatar} alt="" />
        <p>Suraj Gregory</p>
      </div>
    </div>
  );
}

export default LatestCard;
