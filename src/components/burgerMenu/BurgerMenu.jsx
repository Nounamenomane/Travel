import React, { Component, useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import css from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";
import search from "./IconButton.png";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div style={this.props.style} className={`{css.burger_menu} ${isOpen ? "open" : ""}`}>
        <div className={css.burger_search}>
          {!isOpen && (
            <button className={css.burger_icon} onClick={this.toggleMenu}>
              <GiHamburgerMenu />
            </button>
          )}
          <img src={search} alt="" />
        </div>
        {isOpen && (
          <div className={css.menu_background}>
            <div className={css.menu_content}>
              <button className={css.close_icon} onClick={this.toggleMenu}>
                <GiCancel />
              </button>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="*">
                <p>Components</p>
              </Link>{" "}
              <Link to="*">
                <h5>Pages</h5>
              </Link>{" "}
              <Link to="*">
                <p>Documentation</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BurgerMenu;
