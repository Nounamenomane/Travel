import css from "./HideComments.module.css";
import avatar from "./img.png";

function HideComments() {
  return (
    <div className={css.comment}>
      <img src={avatar} alt="" />
      <div className={css.info_comment}>
        <h1>Esther Howard</h1>
        <p>17 May 2021</p>
        <h3>    
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h3>
      </div>
    </div>
  );
}

export default HideComments;
