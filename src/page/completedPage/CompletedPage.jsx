import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./CompletedPage.module.css";
import img_ratio from "./IMG (1).png";
import completed from "./Completed 🎉.png";
import star from "./ic_star_fill.png";
import avatar from "./img.png";
import Details from "../../components/details/Details";
import calendar from "./ic_calendar.png";
import users from "./ic_users_group.png";
import cube from "./ic_cube_outline.png";
import receipt from "./ic_receipt.png";
import card from "./ic_credit_card.png";
import icon from "./iconbase.png";
import icon1 from "./iconbase (1).png";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function CompletedPage() {
  const divider = {
    width: "100%",
  };
  return (
    <div className={css.wrapper}>
      <HeaderStyle />
      <div className={css.travelCompleted}>
        <div className={css.img_ratio}>
          <img src={img_ratio} alt="" />
        </div>
        <div className={css.completed}>
          <div className={css.title}>
            <img src={completed} alt="" />
          </div>
          <div className={css.reviews}>
            <div className={css.review}>
              <h3>Warsaw Day Tour</h3>
              <div className={css.grade}>
                <img src={star} alt="" />
                <h4>4.6</h4>
                <p>(234 reviews)</p>
              </div>
            </div>
            <div className={css.avatar}>
              <img src={avatar} alt="" />
              <div>
                <p>Tour guide by </p>
                <h3>Kevin Francis</h3>
              </div>
            </div>
          </div>
          <div className={css.BookingDetails}>
            <h2>Booking Details</h2>
            <Details img={calendar} title="Departure day" data="19 Apr 2019" />
            <Details img={users} title="Guests" data="2 guest" />
            <img style={divider} src={divider} alt="" />
            <Details img={cube} title="Booking code" data="KU_H8SDM" />
            <Details img={calendar} title="Booking day" data="23 Dec 2019" />
            <Details img={receipt} title="Total" data="$357" />
            <Details img={card} title="Payment method" data="Paypal" />
          </div>
          <div className={css.btns}>
            <Link to="/">
              <div className={css.btn1}>
                <img src={icon1} alt="" />
                <p>Back Home</p>
              </div>
            </Link>
            <div className={css.btn2}>
              <img src={icon} alt="" />
              <p>Download Invoice</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedPage;
