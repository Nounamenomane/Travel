import { useState } from "react";
import css from "./TrandingTopicks.module.css";

function TrandingTopicks(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={css.overlay}>
      <div
        className={`${css.background} ${isHovered ? css.hovered : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className={css.img} src={props.img} alt="" />
        {isHovered && (
          <div className={`${css.hover_text} ${css.fadeIn}`}>
            <div style={props.style} className={css.title}>
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrandingTopicks;
