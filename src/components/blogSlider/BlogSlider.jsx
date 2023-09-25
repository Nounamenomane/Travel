import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./BlogSlider.module.css";
import { Carousel } from "react-responsive-carousel";

function BlogSlider() {
  return (
    <div className={css.wrapper}>
      <Carousel
        width="95%"
        showIndicators={true}
        showStatus={false}
        showArrows={true}
        showThumbs={true}
        infiniteLoop
        className={css.carouselWithMargin}
      >
        <div>
          <div className={css.img}>
            <div className={css.leader}>
              <div className={css.title}>
                <p> 19 May 2021</p>
                <h1>To avoid conflicts it is recommended that business </h1>
              </div>
              <div className={css.disc}>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className={css.img}>
            <div className={css.leader}>
              <div className={css.title}>
                <p> 19 May 2021</p>
                <h1>To avoid conflicts it is recommended that business </h1>
              </div>
              <div className={css.disc}>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default BlogSlider;
