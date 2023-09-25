import { Link } from "react-router-dom";
import css from "./HeaderStyle.module.css";
import logo from "./Logo (2).png";
import search from "./iconbase1.png";
import world from "./iconbase (1).png";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import SelectPages from "../selectPages/SelectPages";

function HeaderStyle(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <img src={logo} alt="" />
        <div className={css.left}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="*">
            <p>Components</p>
          </Link>{" "}
          <SelectPages />
          {/* <h5 style={props.style}>Pages</h5> */}
          <Link to="*">
            <p>Documentation</p>
          </Link>
        </div>
        <div className={css.right}>
          <img src={search} alt="" />
          <img src={world} alt="" />
          <div className={css.vertical_line}></div>
          <Link to="/loginPage">
            {" "}
            <p>Login</p>
          </Link>

          <Link to="*">
            <button>Join Us</button>
          </Link>
        </div>
        <div className={css.adaptiv}>
          <div className={css.burgerMenu}>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderStyle;
