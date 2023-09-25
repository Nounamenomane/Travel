import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelAbout.module.css";
import img1 from "./IMG1.png";
import img2 from "./Teachers=1.png";
import img3 from "./Teachers=1 (1).png";
import img4 from "./Teachers=1 (2).png";
import plus from "./The starting point f.png";
import picture from "./illustration_vision.png";
import Testimonials from "../../components/testimonials/Testimonials";
import brand1 from "./brand_spotify.png";
import brand2 from "./brand_microsoft.png";
import brand3 from "./brand_heroku.png";
import brand4 from "./brand_vimeo.png";
import brand5 from "./brand_slack.png";
import brand6 from "./brand_dropbox.png";
import brand7 from "./brand_lenovo.png";
import brand8 from "./brand_airbnb.png";
import brand9 from "./brand_netflix.png";
import brand10 from "./brand_facebook.png";
import brand11 from "./brand_tripadvisor.png";
import brand12 from "./brand_google.png";
import LatestPostCard from "../../components/latestPostCard/LatestPostCard";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";

function TravelAbout() {
  const info = (title, text) => {
    return (
      <div className={css.info}>
        <div className={css.info_title}>
          <h1>{title}</h1>
          <img src={plus} alt="" />
        </div>
        <p>{text}</p>
      </div>
    );
  };

  const mission = (number, title, text) => {
    return (
      <div className={css.mission_card}>
        <h1>{number}</h1>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={css.travelAbout}>
      <HeaderStyle />
      <div className={css.about}>
        <div className={css.about_title}>
          <h1>About Us</h1>
          <p>
            Master Digital Marketing Strategy, Social Media Marketing, SEO,
            YouTube, Email, Facebook Marketing, Analytics & More!
          </p>
        </div>
        <div className={css.about_imgs}>
          <img src={img1} alt="" />
          <div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className={css.about_info}>
          <div>
            {info("130", "Air tickets sold")}
            {info("196", "Tours booked")}
          </div>
          <div>
            {info("10.68k", "Site visitors")}
            {info("877", "Verified hotels")}
          </div>
        </div>
      </div>
      <div className={css.text}>
        <h1>
          Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla.{" "}
        </h1>
        <div className={css.text_title}>
          <h3>Fusce convallis metus id felis luctus</h3>
          <p>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet
            imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo
            pellentesque facilisis.
          </p>
          <div>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. Maecenas nec odio et ante tincidunt tempus. Suspendisse enim
              turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum
              eu odio. Curabitur ullamcorper ultricies nisi.
            </p>
          </div>
        </div>
      </div>
      <div className={css.mission}>
        <div className={css.mission_title}>
          <h1>Our Mission</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
          </p>
        </div>
        <div className={css.missions}>
          <img src={picture} alt="" />
          <div className={css.missions_card}>
            {mission(
              "01",
              "Vestibulum",
              "Donec elit libero, sodales nec, volutpat a, suscipit non, turpis."
            )}{" "}
            <div>
              {mission(
                "02",
                "Fusce",
                "In dui magna, posuere eget, vestibulum et, tempor auctor, justo."
              )}{" "}
              {mission(
                "03",
                "Praesent",
                "Suspendisse feugiat. Quisque id odio."
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={css.team}>
        <div className={css.team_title}>
          <h1>Our Team</h1>
          <p>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </p>
        </div>
        <div className={css.overlay_desc}>
          <Team />
        </div>
      </div>
      <Testimonials />
      <div className={css.clients}>
        <div className={css.clients_title}>
          <div>
            <h1>Our Clients</h1>
          </div>
          <div>
            <h2>Enhance Your Life By Having A Sense Of Purpose</h2>
            <p>
              Around the world, food-borne illnesses have become increasingly
              common. In the United States alone, millions of people get a
              food-related illness each year.
            </p>
          </div>
        </div>
        <div className={css.brands}>
          <div>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
          </div>
          <div>
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
          </div>
          <div>
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
          </div>
          <div>
            <img src={brand10} alt="" />
            <img src={brand11} alt="" />
            <img src={brand12} alt="" />
          </div>
        </div>
      </div>
      <LatestPostCard />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default TravelAbout;
