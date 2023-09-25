import css from "./TravelCard.module.css";

function TravelCard(props) {
  const place = "196 Place";
  return (
    <div className={css.cityCard}>
      <img src={props.img} alt="" />
      <div className={css.cityTitle}>
        {" "}
        <div className={css.title}>{props.title}</div>
        <div className={css.place}>{place}</div>
      </div>
    </div>
  );
}

export default TravelCard;
