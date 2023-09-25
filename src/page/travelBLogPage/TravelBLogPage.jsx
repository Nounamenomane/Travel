import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelBLogPage.module.css";
import overlay1 from "./Image Ratio Overlay1.png";
import overlay2 from "./Image Ratio Overlay2.png";
import overlay3 from "./Image Ratio Overlay3.png";
import overlay4 from "./Image Ratio Overlay4.png";
import Overlay from "../../components/overlay/Overlay";
import TrandingTopicks from "../../components/trandingTopicks/TrandingTopicks";
import overlay5 from "./Image Ratio Overlay5.png";
import overlay6 from "./Image Ratio Overlay6.png";
import overlay7 from "./Image Ratio Overlay7.png";
import overlay9 from "./Image Ratio Overlay9.png";
import left from "./iconbaseLeft.png";
import rigth from "./iconbaseR.png";
import { useState } from "react";
import BLogCard from "../../components/blogCard/BLogCard";
import img1 from "./BLogCard/IMG1.png";
import img2 from "./BLogCard/IMG2.png";
import img3 from "./BLogCard/IMG3.png";
import img4 from "./BLogCard/IMG4.png";
import img5 from "./BLogCard/IMG5.png";
import img6 from "./BLogCard/IMG6.png";
import img7 from "./BLogCard/IMG7.png";
import SliderNumber from "../../components/sliderNumber/SliderNumber";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import BlogInfo from "../../components/blogInfo/BlogInfo";

function TravelBLogPage() {
  const topics = [
    { img: overlay5, title: "Travel", text: "12 posts" },
    { img: overlay6, title: "Business", text: "26 posts" },
    { img: overlay7, title: "Marketing", text: "16 posts" },
    { img: overlay9, title: "Sports", text: "26 posts" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + topics.length) % topics.length
    );
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
  };

  const overlayStyle1 = {
    width: "564px",
    padding: "200px 40px 40px 40px",
  };

  const overlayStyle2 = {
    width: "576px",
  };
  const overlay_small = {
    width: "270px",
  };

  const TitleStyle = {
    fontSize: "15px",
  };

  return (
    <div className={css.wrapper}>
      <HeaderStyle />
      <div className={css.travelBlog}>
        <div className={css.overlay}>
          {" "}
          <Overlay
            img={overlay1}
            title="Don't Waste Time! 7 Facts Until You Reach Your Event"
            style={overlayStyle1}
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          />
          <div className={css.overlay_small}>
            <Overlay
              img={overlay2}
              style={overlayStyle2}
              title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
            />{" "}
            <div>
              <Overlay
                img={overlay3}
                style={overlay_small}
                TitleStyle={TitleStyle}
                title="7 Places To Get Deals On Event"
              />{" "}
              <Overlay
                img={overlay4}
                style={overlay_small}
                TitleStyle={TitleStyle}
                title="The Next 7 Things You Should Do For Event Success"
              />
            </div>
          </div>
        </div>
        <div className={css.trendingTopics}>
          <h1>Trending Topics</h1>
          <div className={css.trendingTopics_card}>
            <TrandingTopicks img={overlay5} title="Travel" text="12 posts" />
            <TrandingTopicks img={overlay6} title="Business" text="26 posts" />
            <TrandingTopicks img={overlay7} title="Marketing" text="16 post2" />
            <TrandingTopicks img={overlay9} title="Sports" text="26 posts" />
          </div>
          <div className={css.trendingTopics_card_adaptiv}>
            <TrandingTopicks
              img={topics[currentIndex].img}
              title={topics[currentIndex].title}
              text={topics[currentIndex].text}
            />
          </div>
          <div className={css.btns}>
            <button onClick={handleLeft} className={css.btn}>
              <img src={left} alt="" />
            </button>
            <button onClick={handleRight} className={css.btn}>
              <img src={rigth} alt="" />
            </button>
          </div>
        </div>
        <div className={css.solo_title}>
          <h1>Today's Top Highlights</h1>
        </div>
        <div className={css.blog}>
          <div className={css.blog_card}>
            <div className={css.card}>
              <BLogCard
                img={img1}
                title="The 7 Most Successful Event Companies In Region"
              />
              <BLogCard
                img={img2}
                title="
Knowing These 7 Secrets Will Make Your Event Look Amazing
Jane Cooper"
              />
              <BLogCard
                img={img3}
                title="The Next 7 Things You Should Do For Event Success"
              />
              <BLogCard
                img={img4}
                title="Take Advantage Of Event - Read These 7 Tips"
              />
            </div>
            <div className={css.card}>
              <BLogCard
                img={img5}
                title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
              />
              <BLogCard
                img={img6}
                title="Believing These 7 Myths About Event Keeps You From Growing"
              />
              <BLogCard
                img={img7}
                title="How 7 Things Will Change The Way You Approach Event"
              />
              <BLogCard
                img={img1}
                title="Event On A Budget: 7 Tips From The Great Depression"
              />
              <div className={css.slider}>
                <SliderNumber />
              </div>
            </div>
          </div>
          <BlogInfo />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default TravelBLogPage;
