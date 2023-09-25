import css from "./Footer.module.css";
import logo from './Logo (1).png'
import email from "./Message.png";
import map from "./Map marker.png";
import icon from "./iconbase (1).png";
import faceBook from "./ic_facebbook_outlined.png";
import instagram from "./ic_instagram_outlined.png";
import base from "./iconbase1.png";
import base1 from "./iconbase.png";

function Footer() {
  return (
    <div className={css.footer}>
      <img src={logo} alt="" />
      <div className={css.footer_info}>
        <div className={css.title}>
          <p>
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
        </div>
        <div className={css.data}>
          <div>
            <img src={email} alt="" />
            <h4>info@example.com</h4>
          </div>
          <div>
            <img src={map} alt="" />
            <h4>655 Schaefer Dale</h4>
          </div>
        </div>
        <div className={css.textFielld}>
          <div className={css.input}>
            <input
              className={css.input_email}
              placeholder="Email Address"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className={css.btn}>
            <img src={icon} alt="" />
          </button>
        </div>
      </div>

      <div className={css.masanger_leader}>
        <button className={css.masanger}>
          <img src={faceBook} alt="" />
        </button>
        <button className={css.masanger}>
          <img src={instagram} alt="" />
        </button>
        <button className={css.masanger}>
          <img src={base} alt="" />
        </button>
        <button className={css.masanger}>
          <img src={base1} alt="" />
        </button>
      </div>

      <div className={css.help}>
        <p>© 2021. All rights reserved</p>
        <div>
          <p>Help Center</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
