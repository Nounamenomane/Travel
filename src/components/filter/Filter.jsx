import css from "./Filter.module.css";
import geo from "./Vector0.png";
import users from "./ic_calendar.png";
import num from "./Vector1.png";
import search from "./OVERLAY COLOR.png";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <div className={css.filters}>
      <div className={css.filter}>
        <img src={geo} alt="" />
        <p>Where we go?</p>
      </div>
      <div className={css.vertical_line}></div>
      <div className={css.filter}>
        <img src={num} alt="" />
        <p>Departure day</p>
      </div>
      <div className={css.vertical_line}></div>
      <div className={css.filter}>
        <img src={users} alt="" />
        <p>Guests</p>
      </div>
      <Link to="*">
        <button className={css.btn1}>
          <img src={search} alt="" />
        </button>
      </Link>
    </div>
  );
}

export default Filter;
