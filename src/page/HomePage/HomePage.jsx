import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import css from "./HomePage.module.css";
import clock from "./ic_clock.png";
import star from "./ic_star.png";
import currency from "./ic_currency.png";
import Ellipse1 from "./Ellipse 1.png";
import Ellipse2 from "./Ellipse 2.png";
import Ellipse3 from "./Ellipse 3.png";
import pin from "./ic_pin.png";
import video from "./Vector.png";
import personal from "./ic_popularity.svg";
import review from "./ic_reputation.svg";
import secure from "./ic_secure_payment.svg";
import Filter from "../../components/filter/Filter";
import ticket from "./ic_travel_tickets.svg";
import boot from "./ic_travel_booking.svg";
import site from "./ic_travel_site_visitors.svg";
import hotel from "./ic_travel_verified_hotels.svg";
import circle from "./Travel_d/Ellipse 10.png";
import FeaturedTours from "../../components/featuredTours/FeaturedTours";
import TravelCard from "../../components/travelCard/TravelCard";
import img1 from "./travel_c/IMG1.png";
import img2 from "./travel_c/IMG2.png";
import img3 from "./travel_c/IMG3.png";
import img4 from "./travel_c/IMG4.png";
import img5 from "./travel_c/IMG5.png";
import img6 from "./travel_c/IMG6.png";
import img7 from "./travel_c/IMG7.png";
import img8 from "./travel_c/IMG8.png";
import base from "./travel_c/iconbase.png";
import BlogSlider from "../../components/blogSlider/BlogSlider";
import LatestPost from "../../components/latestPost/LatestPost";
import layer from "./layer.png";
import Testimonials from "../../components/testimonials/Testimonials";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <div className={css.wrapper}>
      <div className={css.travel_hero}>
        <Header />
        <div className={css.tour}>
          <Link to="*">
            <p>New Tour</p>
          </Link>
          <h1>Thailand Tour</h1>
          <div className={css.items}>
            <div>
              <img src={clock} alt="" />
              <p>3 days 2 nights</p>
            </div>
            <div>
              <img src={star} alt="" />
              <p>34.8 reviews</p>
            </div>
            <div>
              <img src={currency} alt="" />
              <p>Starting at $69</p>
            </div>
          </div>
          <Link to="*">
            <div className={css.btn}>
              <button>Book Now</button>
            </div>
          </Link>
        </div>
        <div className={css.countres}>
          <Link to="*">
            <div className={css.countre}>
              <img src={Ellipse1} alt="" />
              <div>
                <h3>Thailand</h3>
                <div>
                  <img src={pin} alt="" />
                  <p>Asia</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="*">
            <div className={css.countre}>
              <img src={Ellipse2} alt="" />
              <div>
                <h3>London</h3>
                <div>
                  <img src={pin} alt="" />
                  <p>Europe</p>
                </div>
              </div>
            </div>
          </Link>{" "}
          <Link to="*">
            <div className={css.countre}>
              <img src={Ellipse3} alt="" />
              <div>
                <h3>India</h3>
                <div>
                  <img src={pin} alt="" />
                  <p>Asia</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Filter />
      </div>
      <div className={css.travel_different}>
        <div className={css.title}>
          <h1>Explore A Different Way To Travel</h1>
          <p>
            {" "}
            Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat
            massa quis enim.
          </p>
        </div>
        <div className={css.ratio}>
          <div className={css.border}>
            <div className={css.device}>
              <p>Device</p>
              <h1>
                The More
                <br /> Important the
                <br /> Work
              </h1>
            </div>
            <Link to="*">
              <div className={css.video}>
                <img src={video} alt="" />
                <p>Watch Video</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={css.reviews}>
          <div className={css.review}>
            <img src={personal} alt="" />
            <h3>Professional Tour Guides</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>{" "}
          <div className={css.review}>
            <img src={review} alt="" />
            <h3>Customer Satisfaction</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>{" "}
          <div className={css.review}>
            <img src={secure} alt="" />
            <h3>Secure Payment</h3>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>
        </div>
      </div>
      <div className={css.travel_fastest}>
        <div className={css.fastest_title}>
          <h1>Fastest Way to Book over 450 Great Tours</h1>
          <p>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
        </div>
        <div className={css.fastests}>
          <div className={css.fastest}>
            <img src={ticket} alt="" />
            <h2>130</h2>
            <p>Air tickets sold</p>
          </div>
          <div className={css.fastest}>
            <img src={boot} alt="" />
            <h2>196</h2>
            <p>Tours booked</p>
          </div>
          <div className={css.fastest}>
            <img src={site} alt="" />
            <h2>10,67k</h2>
            <p>Site visitors</p>
          </div>
          <div className={css.fastest}>
            <img src={hotel} alt="" />
            <h2>877</h2>
            <p>Verified hotels</p>
          </div>
        </div>
      </div>
      <div className={css.travel_distinations}>
        <div className={css.distinations_leader}>
          <h1>Our Favorite Destinations</h1>
          <p>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
          <div className={css.distinations_condition}>
            <div>
              <img src={circle} alt="" />
              <h3>First Class Flights</h3>
            </div>
            <div>
              <img src={circle} alt="" />
              <h3>5 Star Accommodations</h3>
            </div>
            <div>
              <img src={circle} alt="" />
              <h3>Inclusive Packages</h3>
            </div>
            <div>
              <img src={circle} alt="" />
              <h3>Latest Model Vehicles</h3>
            </div>
            <div>
              <img src={circle} alt="" />
              <h3>Handpicked Hotels</h3>
            </div>
            <div>
              <img src={circle} alt="" />
              <h3>Accesibility managment</h3>
            </div>
          </div>
        </div>
        <div className={css.distinations_imgs}>
          <div className={css.distinations_img}>
            <Link to="*">
              <div className={css.img1}>
                <div className={css.city1}>
                  <h1>Hongkong </h1>
                  <div>
                    <img src={pin} alt="" />
                    <p>Asia</p>
                  </div>
                </div>
              </div>{" "}
            </Link>
            <Link to="*">
              <div className={css.img2}>
                <div className={css.city}>
                  <h1>Ireland </h1>
                  <div>
                    <img src={pin} alt="" />
                    <p>Asia </p>
                  </div>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className={css.distinations_img1}>
            <Link to="*">
              <div className={css.img3}>
                <div className={css.city}>
                  <h1>Madagascar </h1>
                  <div>
                    <img src={pin} alt="" />
                    <p>Asia </p>
                  </div>
                </div>
              </div>{" "}
            </Link>
            <Link to="*">
              <div className={css.img}>
                <div className={css.city1}>
                  <h1>Vietnam </h1>
                  <div>
                    <img src={pin} alt="" />
                    <p>Asia </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={css.travel_featured}>
        <div className={css.featured_title}>
          <h1>Featured Tours</h1>
          <p>
            Our Featured Tours can help you find the trip that's perfect for
            you!
          </p>
        </div>
        <FeaturedTours />
        <Link to="/travelList">
          <div className={css.featured_btn}>
            <button>View All Tours</button>
          </div>
        </Link>
      </div>
      <div className={css.travel_toursCity}>
        <div className={css.toursCity_header}>
          <div className={css.toursCity_title}>
            <h1>Tours By City</h1>
            <p>
              Our Featured Tours can help you find the trip that's perfect for
              you!
            </p>
          </div>
          <Link to="*">
            <div className={css.toursCity_btn1}>
              <p>View All </p>
              <img src={base} alt="" />
            </div>
          </Link>
        </div>
        <div className={css.cityCards}>
          <div className={css.cityCard}>
            <TravelCard img={img1} title="Qatar" />
            <TravelCard img={img2} title="Barbados" />
            <TravelCard img={img3} title="Hungary" />
            <TravelCard img={img4} title="Netherlands" />
          </div>
          <div className={css.cityCard}>
            <TravelCard img={img5} title="Uganda" />
            <TravelCard img={img6} title="Eritrea" />
            <TravelCard img={img7} title="Gambia" />
            <TravelCard img={img8} title="Lebanon" />
          </div>
        </div>
        <Link to="*">
          <div className={css.toursCity_btn2}>
            <p>View All </p>
            <img src={base} alt="" />
          </div>
        </Link>
      </div>
      <div className={css.travel_blog}>
        <h1 className={css.h1}>Latest Posts </h1>

        <div className={css.business}>
          <BlogSlider />
        </div>
        <div className={css.blogDisc}>
          <h1 className={css.h2}>Latest Posts </h1>
          <LatestPost
            data=" 17 May 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            desc="Digital product design news, articles, and resources delivered straight to your inbox."
          />
          <img src={layer} alt="" />
          <LatestPost
            data="  13 Aug 2021"
            title="Any mechanical keyboard enthusiasts in design?"
            desc="Sidebar has been collecting the best design links of the day since October 2012. It's maintained by Sacha Greif and built with ..."
          />
          <img src={layer} alt="" />
          <LatestPost
            data="  04 Jul 2021"
            title="The More Important the Work, the More Important the Rest"
            desc="Interested in digital strategy? Subscribe and get the 5 most piping hot links of the week, emailed straight to your inbox."
          />
          <img src={layer} alt="" />
          <Link to="*">
            <div className={css.blog_btn3}>
              <p>View All </p>
              <img src={base} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
