import LatestCard from "../latestCard/LatestCard";
import css from "./LatestPostCard.module.css";
import img1 from "./IMG1.png";
import img2 from "./IMG2.png";
import img3 from "./IMG3.png";
import img4 from "./IMG4.png";
import rigth from "./iconbase.png";

function LatestPostCard() {
  return (
    <div className={css.latestPostCard}>
      <div className={css.title}>
        <h1>Latest Posts</h1>
        <div>
          <p>View All</p>
          <img src={rigth} alt="" />
        </div>
      </div>
      <div className={css.latestCard}>
        <LatestCard img={img1} />
        <LatestCard img={img2} />
        <LatestCard img={img3} />
        <LatestCard img={img4} />
      </div>
    </div>
  );
}

export default LatestPostCard;
