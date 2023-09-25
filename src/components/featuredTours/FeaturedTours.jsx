import css from "./FeaturedTours.module.css";
import base from "./iconbase.png";
import clock from "./ic_clock.png";
import star from "./ic_star_fill.png";
import layer from "./layer.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function FeaturedTours() {
  const [clickedCards, setClickedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCardClick = (index) => {
    const updatedClickedCards = [...clickedCards];
    updatedClickedCards[index] = !updatedClickedCards[index];
    setClickedCards(updatedClickedCards);
    // localStorage.setItem("clickedCards", JSON.stringify(updatedClickedCards));
  };
  // const savedClickedCards = JSON.parse(localStorage.getItem('clickedCards')) || [false, false, false, false];

  return (
    <div className={css.featured_Cards}>
      <div className={css.featured_Card}>
        <div className={css.featured_img1}>
          <div className={css.featured_price}>
            <div>
              <h3>$299</h3>
            </div>
            <button className={css.featured_btn}>
              <img
                onClick={() => handleCardClick(0)}
                src={base}
                alt=""
                className={clickedCards[0] ? css.clicked : ""}
              />
            </button>
          </div>
        </div>
        <div className={css.featured_title}>
          <p>England</p>
          <h1>Warsaw Day Tour</h1>
        </div>
        <img className={css.layer} src={layer} alt="" />
        <div className={css.featured_time}>
          <div>
            <img src={clock} alt="" />
            <p>3 days 2 nights</p>
          </div>
          <div>
            <img src={star} alt="" />
            <h4>4.8</h4>
          </div>
        </div>
      </div>{" "}
      <div className={css.featured_Card}>
        <div className={css.featured_img2}>
          <div className={css.featured_price}>
            <div>
              <h3>$299</h3>
            </div>
            <button className={css.featured_btn}>
              <img
                onClick={() => handleCardClick(1)}
                src={base}
                alt=""
                className={clickedCards[1] ? css.clicked : ""}
              />
            </button>
          </div>
        </div>

        <div className={css.featured_title}>
          <p>England</p>
          <Link to="/travelDetail">
            <h1>Estonia City Tour</h1>
          </Link>
        </div>

        <img className={css.layer} src={layer} alt="" />
        <div className={css.featured_time}>
          <div>
            <img src={clock} alt="" />
            <p>3 days 2 nights</p>
          </div>
          <div>
            <img src={star} alt="" />
            <h4>4.8</h4>
          </div>
        </div>
      </div>{" "}
      <div className={css.featured_Card}>
        <div className={css.featured_img3}>
          <div className={css.featured_price}>
            <div>
              <h3>$299</h3>
            </div>
            <button className={css.featured_btn}>
              <img
                onClick={() => handleCardClick(2)}
                src={base}
                alt=""
                className={clickedCards[2] ? css.clicked : ""}
              />
            </button>
          </div>
        </div>
        <div className={css.featured_title}>
          <p>England</p>
          <h1>Thailand City Tour</h1>
        </div>
        <img className={css.layer} src={layer} alt="" />
        <div className={css.featured_time}>
          <div>
            <img src={clock} alt="" />
            <p>3 days 2 nights</p>
          </div>
          <div>
            <img src={star} alt="" />
            <h4>4.8</h4>
          </div>
        </div>
      </div>{" "}
      <div className={css.featured_Card}>
        <div className={css.featured_img4}>
          <div className={css.featured_price}>
            <div>
              <h3>$299</h3>
            </div>
            <button className={css.featured_btn}>
              <img
                onClick={() => handleCardClick(3)}
                src={base}
                alt=""
                className={clickedCards[3] ? css.clicked : ""}
              />
            </button>
          </div>
        </div>
        <div className={css.featured_title}>
          <p>England</p>
          <h1>Thailand City Tour</h1>
        </div>
        <img className={css.layer} src={layer} alt="" />
        <div className={css.featured_time}>
          <div>
            <img src={clock} alt="" />
            <p>3 days 2 nights</p>
          </div>
          <div>
            <img src={star} alt="" />
            <h4>4.8</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedTours;
