import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelCheckoutPage.module.css";
import num1 from "./#.png";
import Form from "../../components/form/Form";
import ToggleSwitch from "react-toggle-switch";
import "react-toggle-switch/dist/css/switch.min.css";
import { useState } from "react";
import divider from "./Divider1.png";
import num2 from "./# (1).png";
import paypal from "./ic_paypal.png";
import radio from "./Radio.png";
import masterCard from "./ic_mastercard.png";
import visa from "./ic_visa.png";
import img1 from "./IMG1.png";
import star from "./ic_star_fill.png";
import divider2 from "./Divider2.png";
import avatar from "./img.png";
import calendar from "./ic_calendar.png";
import users from "./ic_users_group.png";
import Check from "../../components/check/Check";
import divider4 from "./Divider.png";
import Footer from "../../components/footer/Footer";

function TravelCheckoutPage() {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };
  const styleBtn = {
    width: "400px",
  };

  const adaptiveStyleBtn = {
    width: "300px",
  };
  const adaptivedivider = {
    width: "200px",
  };

  const isMobileView = window.matchMedia("(max-width: 576px)").matches;
  return (
    <div className={css.wrapper}>
      <HeaderStyle />
      <div className={css.travelCheckout}>
        <div className={css.confrimAndPay}>
          <h1 className={css.title}>Confirm and Pay</h1>
          <img style={adaptivedivider} src={divider} alt="" />
          <div className={css.confrim}>
            <div className={css.onformation}>
              <div>
                <img src={num1} alt="" />
                <h1>Shipping Information</h1>
              </div>
              <p className={css.addressP}>Billing Address</p>
              <Form />
            </div>
            <div className={css.shipping}>
              <div className={css.address}>
                <p>Shipping Address</p>
                <div>
                  <h2>Same as Billing Address</h2>
                  <ToggleSwitch on={toggleState} onClick={handleToggle} />
                </div>
              </div>
              <Form />
            </div>
          </div>
          <img style={adaptivedivider} src={divider} alt="" />
          <div className={css.pay}>
            <div className={css.pay_title}>
              <img src={num2} alt="" />
              <h1>Payment Methods</h1>
            </div>
            <div className={css.paypal}>
              <input type="radio" />
              <div className={css.desc}>
                <h2>Pay with Paypal</h2>
                <p>
                  You will be redirected to PayPal website to complete your
                  purchase securely.
                </p>
              </div>
              <img src={paypal} alt="" />
            </div>
            <div className={css.cards}>
              <div className={css.credit}>
                <img src={radio} alt="" />
                <div className={css.credit_title}>
                  <h1>Credit / Debit Card</h1>
                  <p>We support Mastercard, Visa, Discover and Stripe.</p>
                </div>
                <div className={css.card}>
                  <img src={masterCard} alt="" />
                  <img src={visa} alt="" />
                </div>
              </div>
              <div className={css.card_info}>
                <div className={css.cardNumber}>
                  <div className={css.cardNumber_title}>
                    <h2>Card Number</h2>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                  </div>
                </div>{" "}
                <div className={css.cardHolder}>
                  <div className={css.cardHolder_title}>
                    <h2>Card Holder</h2>
                    <input type="text" name="" id="" placeholder="JOHN DOE" />
                  </div>
                </div>{" "}
                <div className={css.cardsDate}>
                  <div className={css.cardDate}>
                    <div className={css.cardDate_title}>
                      <h2>Expiration Date</h2>
                      <input type="text" name="" id="" placeholder="MM/YY" />
                    </div>
                  </div>
                  <div className={css.cardDate}>
                    <div className={css.cardDate_title}>
                      <h2>CVC</h2>
                      <input type="text" name="" id="" placeholder="***" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.cardBooking}>
          <div className={css.cardCheck}>
            <img className={css.img_ratio} src={img1} alt="" />
            <div className={css.cardBooking_title}>
              <div className={css.review}>
                <h1>Warsaw Day Tour</h1>
                <div>
                  <img src={star} alt="" />
                  <h3>4.6</h3>
                  <p>(234 reviews)</p>
                </div>
              </div>
              <img src={divider2} alt="" />
              <div className={css.user}>
                <img src={avatar} alt="" />
                <div>
                  <p>Tour guide by </p>
                  <h2>Kevin Francis</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={css.data}>
            <div className={css.dataPlace}>
              <img src={calendar} alt="" />
              <div>
                <p>Departure day</p>
                <h2>19 Apr 2019</h2>
              </div>
            </div>{" "}
            <img className={css.none} src={divider4} alt="" />
            <div className={css.dataPlace}>
              <img src={users} alt="" />
              <div>
                <p>Guests</p>
                <h2>4 guest</h2>
              </div>
            </div>
          </div>
          <Check
            btn="Complete Booking"
            styleBtn={isMobileView ? adaptiveStyleBtn : styleBtn}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TravelCheckoutPage;
