import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "./Logo.png";
import search from "./IconButton.png";
import world from "./IconButton (1).png";
import SelectPages from "../selectPages/SelectPages";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

function Header() {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <img src={logo} alt="" />
        <div className={css.left}>
          {/* <img src={logo} alt="" /> */}
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="*">
            <p>Components</p>
          </Link>{" "}
          <SelectPages />
          <Link to="*">
            <p>Documentation</p>
          </Link>
        </div>
        <div className={css.BurgerMenu}>
          <DropdownMenu />
        </div>
        <div className={css.right}>
          <img src={search} alt="" />
          <img src={world} alt="" />
          {/* <ChageBackround /> */}
          <div className={css.vertical_line}></div>
          <Link to="/loginPage">
            {" "}
            <p>Login</p>
          </Link>

          <Link to="*">
            <button>Join Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
