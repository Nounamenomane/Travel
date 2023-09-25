import css from "./TourIncludes.module.css";

function TourIncludes(props) {
  return (
    <div className={css.includes}>
      <div className={css.check_list}>
        <div className={css.check}>
          <img src={props.img} alt="" />
          <h3>{props.title}</h3>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
}

export default TourIncludes;
