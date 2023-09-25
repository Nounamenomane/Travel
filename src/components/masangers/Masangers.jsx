import css from "./Masangers.module.css";
import facebook from "./iconbase2.png";
import Instagram from "./iconbase3.png";
import LinkedIn from "./iconbase4.png";
import Twitter from "./iconbase.png";
import { Link } from "react-router-dom";

function Masangers() {
  return (
    <div className={css.masangers}>
      <div>
        <Link to="https://www.facebook.com/">
          <button className={css.masanger}>
            <img src={facebook} alt="" />
            <p>Facebook</p>
          </button>{" "}
        </Link>
        <Link to="https://www.instagram.com/">
          <button className={css.Instagram}>
            <img src={Instagram} alt="" />
            <p>Instagram</p>
          </button>{" "}
        </Link>
      </div>
      <div>
        <Link to="https://ru.linkedin.com/">
          <button className={css.masanger}>
            <img src={LinkedIn} alt="" />
            <p>LinkedIn</p>
          </button>{" "}
        </Link>
        <Link to="https://twitter.com/?lang=ru">
          <button className={css.masanger}>
            <img src={Twitter} alt="" />
            <p>Twitter</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Masangers;
