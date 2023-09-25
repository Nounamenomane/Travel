import css from "./Newsletter.module.css";
import icon from "./iconbase.png";

function Newsletter() {
  return (
    <div className={css.travel_newsletter}>
      {/* <img className={css.img} src={img} alt="" /> */}
      <div className={css.img}>
        <div className={css.overlay}></div>
      </div>
      <div className={css.disc}>
        <h1>Newsletter</h1>
        <p>
          Sign up now to receive hot special offers and information about the
          best tours!{" "}
        </p>
        <div className={css.email}>
          <div className={css.input}>
            <input placeholder="Enter your email" type="text" />
          </div>
          <button className={css.btn}>
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
