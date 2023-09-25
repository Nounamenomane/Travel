import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelContactPage.module.css";
import img1 from "./IMG1.png";
import img2 from "./IMG2.png";
import img3 from "./IMG3.png";
import pin from "./ic_pin.png";
import external from "./ic_external_link_outline.png";
import phone from "./ic_mobile.png";
import email from "./ic_email.png";
import illustration from "./illustration_travel_contact (1).png";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

function TravelContactPage() {
  const contactCard = (img, title, text, number, gmail) => {
    return (
      <div className={css.contact_card}>
        <img src={img} alt="" />
        <div className={css.info}>
          <h1>{title}</h1>
          <div className={css.contact_info}>
            <div className={css.address}>
              <div>
                <img src={pin} alt="" />
                <h3>Address</h3>
                <img src={external} alt="" />
              </div>
              <p>{text}</p>
            </div>
            <div className={css.phone_number}>
              <div>
                <img src={phone} alt="" />
                <h3>Phone</h3>
              </div>
              <p>{number}</p>
            </div>
            <div className={css.email}>
              <div>
                <img src={email} alt="" />
                <h3>Email</h3>
              </div>
              <p>{gmail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const suportInput = (placeHolder) => {
    return (
      <div className={css.input}>
        <input type="text" placeholder={placeHolder} />
      </div>
    );
  };
  return (
    <div className={css.travelContactPage}>
      <HeaderStyle />
      <div className={css.title}>
        <h1>We Work Worldwide.</h1>
        <p>We'd love to talk about how we can help you.</p>
      </div>
      <div className={css.contact_cards}>
        {contactCard(
          img1,
          "Jordan",
          "3891 Ranchview Dr. Richardson, California 62639",
          "(201) 555-0124",
          "jessica.hanson@example.com"
        )}{" "}
        {contactCard(
          img2,
          "Canada",
          "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
          "(603) 555-0123",
          "michelle.rivera@example.com"
        )}{" "}
        {contactCard(
          img3,
          "Portugal",
          "2118 Thornridge Cir. Syracuse, Connecticut 35624",
          "(217) 555-0113",
          "curtis.weaver@example.com"
        )}
      </div>
      <div className={css.suport}>
        <img src={illustration} alt="" />
        <form>
          <div className={css.suport_masang}>
            <div className={css.suport_title}>
              <h1>Drop Us A Line</h1>
              <p>We normally respond within 2 business days</p>
            </div>
            <div className={css.suport_input}>
              {suportInput("Full name")}
              {suportInput("Email")}
              {suportInput("Subject")}
              <div className={css.masang}>
                <input type="text" placeholder="Message" />
              </div>
            </div>
            <button className={css.btn}>Send Message</button>
          </div>
        </form>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default TravelContactPage;
