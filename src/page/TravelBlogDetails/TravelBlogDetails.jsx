import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelBlogDetails.module.css";
import facebook from "./ic_facebbook_outlined.png";
import instagram from "./ic_instagram_outlined.png";
import linkedin from "./iconbas1e.png";
import twitter from "./iconbase2.png";
import img_ratio from "./IMG1.png";
import img_ratio2 from "./IMG2.png";
import airpods from "./ic_quotes.png";
import Masangers from "../../components/masangers/Masangers";
import avatar from "./img.png";
import BlogInfo from "../../components/blogInfo/BlogInfo";
import LatestPostCard from "../../components/latestPostCard/LatestPostCard";
import NewsLetter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

function TravelBlogDetails() {
  const masangers = (icon) => {
    return (
      <button className={css.masanger}>
        <img src={icon} alt="" />
      </button>
    );
  };

  const divider = {
    width: "100%",
  };

  const tags = (text) => {
    return <button className={css.tag}>{text}</button>;
  };
  return (
    <div className={css.travelBlogDetails}>
      <HeaderStyle />
      <div className={css.course}>
        <div className={css.course_desc}>
          <p>8 minute read</p>
          <h1>The Complete Digital Marketing Course - 12 Courses In 1</h1>
          <p>16 Mar 2020 12:35 PM</p>
          <div className={css.masangers}>
            {masangers(facebook)}
            {masangers(instagram)}
            {masangers(linkedin)}
            {masangers(twitter)}
          </div>
        </div>
      </div>
      <div className={css.blog}>
        <div className={css.blog_content}>
          <div className={css.blog_content1}>
            <div className={css.title}>
              <div className={css.title1}>
                <h2>
                  Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                  augue ac venenatis condimentum, sem libero volutpat nibh, nec
                  pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                  metus varius laoreet. Praesent egestas tristique nibh.
                </h2>
              </div>
              <div className={css.title2}>
                <div className={css.text}>
                  <h2>P</h2>
                  <p>
                    ellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                    augue ac venenatis condimentum, sem libero volutpat nibh,
                    nec pellentesque velit pede quis nunc. Phasellus viverra
                    nulla ut metus varius laoreet. Praesent egestas tristique
                    nibh.
                  </p>
                </div>
                <p>Donec posuere vulputate arcu. Quisque rutrum.</p>
              </div>
              <div className={css.title3}>
                <div className={css.text}>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                  ullamcorper mauris at ligula.{" "}
                </div>{" "}
                <div className={css.text1}>
                  Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                  augue ac venenatis condimentum, sem libero volutpat nibh, nec
                  pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                  metus varius laoreet. Praesent egestas tristique nibh.
                </div>
              </div>
              <div className={css.img_ratio}>
                <img className={css.img} src={img_ratio} alt="" />
              </div>
              <div className={css.title4}>
                <h1>Curabitur suscipit suscipit tellus</h1>
                <p>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                  ullamcorper mauris at ligula.
                </p>
              </div>
              <div className={css.title5}>
                <h1>Nullam accumsan lorem in</h1>
                <p>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                  ullamcorper mauris at ligula.
                </p>
              </div>
              <div className={css.title6}>
                <img src={airpods} alt="" />
                <h2>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo.
                </h2>
              </div>
              <img className={css.img} src={img_ratio2} alt="" />
              <div className={css.title7}>
                <div>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                  ullamcorper mauris at ligula.{" "}
                </div>{" "}
                <div className={css.text2}>
                  Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                  augue ac venenatis condimentum, sem libero volutpat nibh, nec
                  pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                  metus varius laoreet. Praesent egestas tristique nibh.{" "}
                </div>{" "}
                <div>
                  Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                  vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                  ullamcorper mauris at ligula.
                </div>
              </div>
            </div>
            <div className={css.tags}>
              <div>
                <h3>Tags:</h3>
                {tags("Marketing")}
                {tags("Development")}
              </div>
              <div>
                {tags("HR & Recruting")}
                {tags("Design")}
                {tags("Management")}
              </div>
            </div>
            <div className={css.share}>
              <h3>Share:</h3>
              <Masangers />
            </div>
            <img style={divider} src={divider} alt="" />
            <div className={css.reviews}>
              <img src={avatar} alt="" />
              <div className={css.reviews_desc}>
                <div className={css.reviews_title}>
                  <div>
                    <h1>Courtney Henry</h1>
                    <p>Curator of Marketing Course</p>
                  </div>
                  <div className={css.masangers1}>
                    {masangers(facebook)}
                    {masangers(instagram)}
                    {masangers(linkedin)}
                    {masangers(twitter)}
                  </div>
                </div>
                <p>
                  Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
                  Maecenas ullamcorper, dui et placerat feugiat, eros pede
                  varius nisi, condimentum viverra felis nunc et lorem..
                </p>
                <p>Member since Mar 15, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.blog_sidebar}>
          <div className={css.review}>
            <img src={avatar} alt="" />
            <div className={css.review_desc}>
              <div className={css.review_title}>
                <div>
                  <h1>Courtney Henry</h1>
                  <p>Curator of Marketing Course</p>
                </div>
              </div>
              <div className={css.masangers2}>
                {masangers(facebook)}
                {masangers(instagram)}
                {masangers(linkedin)}
                {masangers(twitter)}
              </div>
            </div>
          </div>
          <BlogInfo />
        </div>
      </div>
      <LatestPostCard />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default TravelBlogDetails;
