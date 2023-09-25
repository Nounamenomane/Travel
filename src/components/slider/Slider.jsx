import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import css from "./Slider.module.css";
import { Link } from "react-router-dom";

function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 576 }); // Определяем адаптивное состояние

  if (!isMobile) {
    return null; // Если не в адаптивке, не рендерим слайдер
  }
  return (
    <div className={css.wrapper}>
      <Carousel>
        <div className={css.items}>
          <div>
            {/* <img src={clock} alt="" /> */}
            <p>3 days 2 nights</p>
          </div>
          <div>
            {/* <img src={star} alt="" /> */}
            <p>34.8 reviews</p>
          </div>
          <div>
            {/* <img src={currency} alt="" /> */}
            <p>Starting at $69</p>
          </div>
        </div>
        <div className={css.countres}>
          <Link to="*">
            <div className={css.countre}>
              {/* <img src={Ellipse1} alt="" /> */}
              <div>
                <h3>Thailand</h3>
                <div>
                  {/* <img src={pin} alt="" /> */}
                  <p>Asia</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="*">
            <div className={css.countre}>
              {/* <img src={Ellipse2} alt="" /> */}
              <div>
                <h3>London</h3>
                <div>
                  {/* <img src={pin} alt="" /> */}
                  <p>Europe</p>
                </div>
              </div>
            </div>
          </Link>{" "}
          <Link to="*">
            <div className={css.countre}>
              {/* <img src={Ellipse3} alt="" /> */}
              <div>
                <h3>India</h3>
                <div>
                  {/* <img src={pin} alt="" /> */}
                  <p>Asia</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
export default Slider;
