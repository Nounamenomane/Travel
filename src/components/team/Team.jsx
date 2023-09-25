import React, { Component } from "react";
import css from "./Team.module.css"; // Подключите свои стили
import overlay1 from "./IMG.1.png";
import overlay2 from "./IMG.2.png";
import overlay3 from "./IMG.3.png";
import overlay4 from "./IMG.4.png";
import overlay5 from "./IMG.5.png";
import overlay6 from "./IMG.6.png";
import overlay7 from "./IMG.7.png";
import icon1 from "./iconbase1.png";
import icon2 from "./iconbase2.png";
import icon3 from "./iconbase3.png";
import icon4 from "./iconbase4.png";

const masanders = (icon) => {
  return (
    <button className={css.masander}>
      <img src={icon} alt="" />
    </button>
  );
};
const images = [
  overlay1,
  overlay2,
  overlay3,
  overlay4,
  overlay5,
  overlay6,
  overlay7,
];

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.switchOverlayDesc, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  switchOverlayDesc = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % 7, // Обновите количество изображений
    }));
  };

  render() {
    const overlayDescs = [
      { name: "Savannah Nguyen", role: "Marketing" },
      { name: "John Doe", role: "Designer" },
      { name: "Jane Smith", role: "Developer" },
      { name: "Alex Johnson", role: "Sales" },
      { name: "Emily Brown", role: "HR" },
      { name: "Michael Wilson", role: "Manager" },
      { name: "Olivia White", role: "Product" },
    ];

    const { currentIndex } = this.state;
    const currentDesc = overlayDescs[currentIndex] || {};

    return (
      <div className={css.team}>
        <div className={css.team_imgs}>
          <img src={images[currentIndex]} alt="" className="team-img" />
          <div className={css.overlay}>
            <div className={css.overlay_desc}>
              <div className={css.overlay_title}>
                <h2>{currentDesc.name}</h2>
                <p>{currentDesc.role}</p>
              </div>
              <div className={css.masanders}>
                {masanders(icon1)}
                {masanders(icon2)}
                {masanders(icon3)}
                {masanders(icon4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
