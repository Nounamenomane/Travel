import css from "./TourProgram.module.css";

function TourProgram(props) {
  return (
    <div className={css.program}>
      <div>
        <img src={props.img} alt="" />
        <h2>{props.h2}</h2>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}

export default TourProgram;
