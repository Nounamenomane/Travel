import css from "./SliderNumber.module.css";
import left from "./iconbase (2).png";
import right from "./iconbase (3).png";

function SliderNumber() {
  return (
    <div className={css.numbers}>
      <div className={css.number}>
        <button className={css.arrows}>
          <img src={left} alt="" />
        </button>
        <div className={css.number_center}>
          <button>
            <p>1</p>
          </button>
          <button>
            <p>2</p>
          </button>
          <button>
            <p>3</p>
          </button>
          <button>
            <p>4</p>
          </button>
          <button>
            <p>5</p>
          </button>
        </div>
        <button className={css.arrows}>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
}

export default SliderNumber;
