import css from "./Details.module.css";

function Details(props) {
  return (
    <div className={css.details}>
      <div className={css.title}>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
      </div>
      <h3>{props.data}</h3>
    </div>
  );
}

export default Details;
