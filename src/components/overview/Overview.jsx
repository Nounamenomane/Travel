import css from "./Overview.module.css";

function Overview(props) {
  return (
      <div className={css.item}>
        <img src={props.img} alt="" />
        <div className={css.title}>
          <h3>{props.h3}</h3>
          <p>{props.data}</p>
        </div>
      </div>
  );
}

export default Overview;
