import { useState } from "react";
import css from "./Overlay.module.css";
import dot from "./Ellipse 16.png";
import avatar from './img.png'

function Overlay(props) {
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
              <div className={css.text}>
                <div>
                  <p>February 28, 2018</p>
                  <img src={dot} alt="" />
                  <p>8 min read</p>
                </div>
                <h2 className={css.title_header} style={props.TitleStyle}>{props.title}</h2>
                <p className={css.p}>{props.text}</p>
              </div>
              <div className={css.avatar}>
                <img src={avatar} alt="" />
                <p>Antoine Findlay</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overlay;
