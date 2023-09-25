import css from "./Testimonials.module.css";
import headphone from "./ic_quotes.png";
import img1 from "./Ellipse 1.png";
import img2 from "./Ellipse 2.png";
import img3 from "./Ellipse 3.png";
import img4 from "./Ellipse 4.png";
import img5 from "./Ellipse 5.png";
import img6 from "./Ellipse 6.png";
import img7 from "./Ellipse 7.png";
import orange from "./Ellipse 15.png";
import left from "./iconbase1.png";
import right from "./iconbase.png";
import { useState } from "react";

const slides = [
  "Slide 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Slide 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Slide 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
]; // Укажите текстовые слайды

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={css.travel_testimonials}>
      <div className={css.people}>
        <div className={css.testimonials_desc}>
          <h1>What Our Customer Say</h1>
          <div className={css.testimonial}>
            <img src={headphone} alt="" />
            <div className={css.desc}>
              <p>
                Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach.
              </p>
            </div>
          </div>
          <div className={css.person}>
            <img src={orange} alt="" />
            <p>Robert Fox</p>
          </div>
        </div>
        <div className={css.img}>
          <div className={css.img1}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>{" "}
          <div className={css.img2}>
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>{" "}
          <div className={css.img1}>
            <img src={img6} alt="" />
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
      <div className={css.btns}>
        <button onClick={prevSlide} className={css.btn}>
          <img src={left} alt="" />
        </button>
        <button onClick={nextSlide} className={css.btn}>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
