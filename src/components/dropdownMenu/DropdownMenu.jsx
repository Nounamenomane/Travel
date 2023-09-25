import React, { useState } from "react";
import css from "./DropdownMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import SelectPages from "../selectPages/SelectPages";

function DropdownMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={css.header}>
      <button className={css.menu_button} onClick={() => setOpen(!isOpen)}>
        <GiHamburgerMenu size={30} />
      </button>
      <nav className={`${css.menu} ${isOpen ? css.active : ""}`}>
        <ul className={css.menu_list}>
          <Link to="/">
            <li className={css.menu_item}>Home</li>
          </Link>
          <li className={css.menu_item}>Components</li>
          <li className={css.menu_item}>
            <SelectPages />
          </li>
          <li className={css.menu_item}>Documentation</li>
        </ul>
      </nav>
    </header>
  );
}

export default DropdownMenu;
