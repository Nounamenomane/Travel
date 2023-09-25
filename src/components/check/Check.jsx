import css from "./Check.module.css";
import divider from "./Divider.png";
import { useState } from "react";

function Check(props) {
  const [fireworks, setFireworks] = useState([]);

  const generateFirework = (count) => {
    const newFireworks = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      newFireworks.push({ x, y });
      const randomColor = getRandomColor();

      newFireworks.push({ x, y, color: randomColor });
    }
    setFireworks((prevFireworks) => [...prevFireworks, ...newFireworks]);
  };

  setTimeout(() => {
    clearFireworks();
  }, 10000);

  const clearFireworks = () => {
    setFireworks([]);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={css.wrapper}>
      <div className={css.check}>
        <div>
          <p>Service charge</p>
          <h3>$357</h3>
        </div>
        <div>
          <p>Discount</p>
          <h3>-</h3>
        </div>
      </div>{" "}
      <div className={css.divider}>
        <img src={divider} alt="" />
      </div>
      <div className={css.total}>
        <div className={css.total_price}>
          <h3>Total</h3>
          <h4>$357</h4>
        </div>
        <button
          onClick={() => generateFirework(200)}
          style={props.styleBtn}
          className={css.reserve}
        >
          {props.btn}
        </button>
      </div>
      <div className={css["fireworks-container"]}>
        {fireworks.map((firework, index) => (
          <div
            key={index}
            className={css.firework}
            style={{
              top: `${firework.y}px`,
              left: `${firework.x}px`,
              backgroundColor: firework.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Check;
