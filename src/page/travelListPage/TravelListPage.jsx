import HeaderStyle from "../../components/headerStyle/HeaderStyle";
import css from "./TravelListPage.module.css";
import Filter from "../../components/filter/Filter";
import FeaturedTours from "../../components/featuredTours/FeaturedTours";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import SliderNumber from "../../components/sliderNumber/SliderNumber";

function TravelListPage() {
  const styleHeader_h5 = {
    color: "black",
  };
  return (
    <div className={css.travel_list}>
      <div className={css.header}>
        <HeaderStyle/>
      </div>
      <div className={css.filter}>
        <Filter />
      </div>
      <div className={css.card}>
        <FeaturedTours />
        <FeaturedTours />
        <FeaturedTours />
      </div>
      <SliderNumber/>
      <div className={css.newletter}>
        <Newsletter />
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default TravelListPage;
