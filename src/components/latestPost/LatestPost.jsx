import css from "./LatestPost.module.css";

function LatestPost(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.LatestPost}>
        <div className={css.postTitle}>
          <div className={css.data}>{props.data}</div>
          <div className={css.title}>{props.title}</div>
        </div>
        <div className={css.postDesc}>
          <div className={css.desc}>{props.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
