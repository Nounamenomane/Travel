import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelDetailPage.module.css";
import img1 from "./IMG1.png";
import img2 from "./IMG2.png";
import img3 from "./IMG3.png";
import img4 from "./IMG4.png";
import img5 from "./IMG5.png";
import share from "./EstoniaPage/iconbase1.png";
import love from "./EstoniaPage/iconbase (1).png";
import star from "./EstoniaPage/ic_star_fill.png";
import pin1 from "./EstoniaPage/ic_pin1.png";
import img from "./EstoniaPage/img.png";
import Overview from "../../components/overview/Overview";
import calendar1 from "./EstoniaPage/ic_calendar1.png";
import pin from "./EstoniaPage/ic_pin.png";
import clock from "./EstoniaPage/ic_clock.png";
import user1 from "./EstoniaPage/ic_user1.png";
import phone from "./EstoniaPage/ic_mobile.png";
import translate from "./EstoniaPage/ic_translate.png";
import calendar from "./EstoniaPage/ic_calendar.png";
import user from "./EstoniaPage/ic_user.png";
import onCheck from "./EstoniaPage/ic_check_2.png";
import offCheck from "./EstoniaPage/ic_check_1.png";
import TourIncludes from "../../components/tourIncludes/TourIncludes";
import TourProgram from "../../components/tourProgram/TourProgram";
import line from "./Rectangle 527.png";
import { Link, useNavigate } from "react-router-dom";
import avatar from "./Avatar.png";
import brand1 from "./ic_facebbook_outlined.png";
import brand2 from "./ic_instagram_outlined.png";
import brand3 from "./iconbase1.png";
import brand4 from "./iconbase2.png";
import CardReviews from "../../components/cardReviews/CardReviews";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import SliderNumber from "../../components/sliderNumber/SliderNumber";
import icon from "./iconbase.png";
import FeaturedTours from "../../components/featuredTours/FeaturedTours";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsletter/Newsletter";
import Check from "../../components/check/Check";
import Masangers from "../../components/masangers/Masangers";

function TravelDetailPage() {
  const navigate = useNavigate();

  const hadleNavigate = () => {
    navigate("/travelCheckout");
  };
  return (
    <div className={css.travel_detail}>
      <div className={css.header}>
        <HeaderStyle />
      </div>
      <div className={css.img}>
        <img src={img1} alt="" />
        <div className={css.ratio}>
          <div className={css.img_ratio}>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className={css.img_ratio}>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className={css.info_card}>
        <div className={css.info}>
          <div className={css.title}>
            <h1>Estonia City Tour</h1>
            <div>
              <button className={css.btn}>
                <img src={share} alt="" />
              </button>{" "}
              <button className={css.btn}>
                <img src={love} alt="" />
              </button>
            </div>
          </div>
          <div className={css.review}>
            <div>
              <img src={star} alt="" />
              <p>(234 reviews)</p>
            </div>
            <div>
              <img src={pin1} alt="" />
              <p>Tokyo, Jappan</p>
            </div>
            <div>
              <img src={img} alt="" />
              <p>Tour guide by </p>
              <h4> Kevin Francis</h4>
            </div>
          </div>
          <div className={css.overview}>
            <h1>Tour Overview</h1>
            <div className={css.items}>
              <div className={css.item}>
                <div>
                  <Overview
                    img={calendar1}
                    h3={"Available"}
                    data={"03/01/2019 - 01/30/2023"}
                  />{" "}
                </div>
                <div>
                  <Overview img={pin} h3={"Location"} data={"London"} />{" "}
                </div>
                <div>
                  <Overview
                    img={clock}
                    h3={"Durations"}
                    data={"4 days 3 nights"}
                  />{" "}
                </div>
              </div>
              <div className={css.item}>
                <div>
                  <Overview
                    img={user1}
                    h3={"Contact name"}
                    data={"Kevin Francis"}
                  />{" "}
                </div>
                <div>
                  <Overview
                    img={phone}
                    h3={"Contact phone"}
                    data={"(308) 555-0121"}
                  />{" "}
                </div>
                <div>
                  <Overview
                    img={translate}
                    h3={"Languages"}
                    data={"Russian, Spanish"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={css.desc}>
            <h1>Tour Description</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={css.Highlights}>
            <h1>Tour Highlights</h1>
            <ul>
              <li>
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </li>{" "}
              <li>Vulputate placerat amet pulvinar lorem nisl.</li>
              <li>
                {" "}
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </li>
              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
            </ul>
          </div>
          <div className={css.tourIncludes}>
            <h1>Tour Includes</h1>
            <div className={css.check_list}>
              <div className={css.onCheck}>
                <div>
                  <TourIncludes img={onCheck} title={"Audio guide"} />
                </div>
                <div>
                  <TourIncludes img={onCheck} title={"Food and drinks"} />
                </div>
                <div>
                  <TourIncludes img={offCheck} title={"Lunch"} />
                </div>
                <div>
                  <TourIncludes img={offCheck} title={"Private tour"} />
                </div>
                <div>
                  <TourIncludes img={offCheck} title={"Special activities"} />
                </div>
              </div>
              <div className={css.onCheck}>
                <div>
                  <TourIncludes img={onCheck} title={"Entrance fees"} />
                </div>
                <div>
                  <TourIncludes img={onCheck} title={"Gratuities"} />
                </div>
                <div>
                  <TourIncludes img={offCheck} title={"Pick-up and drop off"} />
                </div>
                <div>
                  <TourIncludes img={offCheck} title={"Professional guide"} />
                </div>
                <div>
                  <TourIncludes
                    img={offCheck}
                    title={"Transport by air-conditioned"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={css.tourProgram}>
            <h1>Tour Program</h1>
            <TourProgram img={line} h2={"Day 1"} />{" "}
            <TourProgram img={line} h2={"Day 2"} />{" "}
            <TourProgram img={line} h2={"Day 3"} />
          </div>
          <div className={css.share}>
            <h2>Share:</h2>
            <Masangers />
          </div>
        </div>
        <div className={css.card}>
          <div className={css.price}>
            <div className={css.title_card}>
              <h2>$199</h2>
              <h1>$119</h1>
              <p>/Tour</p>
            </div>
            <div className={css.textField}>
              <div className={css.input}>
                <div>
                  <img src={calendar} alt="" />
                  <input placeholder="Departure day" type="text" />
                </div>
              </div>{" "}
              <div className={css.input}>
                <div>
                  <img src={user} alt="" />
                  <input placeholder="Guests" type="text" />
                </div>
              </div>
            </div>
          </div>
          <Check btn="Reserve" onClick={hadleNavigate} />
        </div>
      </div>
      <div className={css.reviews}>
        <div className={css.card_personal}>
          <div className={css.card_review}>
            <img src={avatar} alt="" />
            <div className={css.person}>
              <h2>Kevin Francis</h2>
              <div>
                <img src={star} alt="" />
                <h3>4.8</h3>
                <p> (234 reviews)</p>
              </div>
            </div>
            <p>
              Described by Queenstown House & Garden magazine as having 'one of
              the best views we've ever seen' you will love relaxing in this
              newly built
            </p>
          </div>
          <div className={css.brands}>
            <button className={css.brand}>
              <img src={brand1} alt="" />
            </button>
            <button className={css.brand}>
              <img src={brand2} alt="" />
            </button>
            <button className={css.brand}>
              <img src={brand3} alt="" />
            </button>
            <button className={css.brand}>
              <img src={brand4} alt="" />
            </button>
          </div>
          <div className={css.contact}>
            <p>Member since Mar 15, 2021</p>
            <button className={css.guide}>
              <h1>Contact Tour Guide</h1>
            </button>
          </div>
        </div>
        <div className={css.comments}>
          <div className={css.comments_title}>
            <h1>123 Reviews</h1>
            <div>
              <div className={css.selector}>
                <select>
                  <option>Most recent</option>
                </select>
              </div>
              <button className={css.writeReviews}>
                <p>Write a Review</p>
              </button>
            </div>
          </div>
          <CardReviews img={img6} title={"Kathryn Murphy"} />
          <CardReviews img={img7} title={"Esther Howard"} />
          <CardReviews img={img8} title={"Kristin Watson"} />
          <CardReviews img={img9} title={"Dianne Russell"} />
          <CardReviews img={img10} title={"Darlene Robertson"} />
          <SliderNumber />
        </div>
      </div>
      <div className={css.featured}>
        <div className={css.featured_title}>
          <h1>You Might Like</h1>
          <Link to="*">
            <button className={css.featured_btn}>
              <p>View All</p>
              <img src={icon} alt="" />
            </button>
          </Link>
        </div>
        <FeaturedTours />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default TravelDetailPage;
