import css from "./Form.module.css";

function Form() {
  return (
    <div className={css.form}>
      <div className={css.little_form}>
        <div className={css.textField}>
          <input type="text" placeholder="First Name" />
        </div>
        <div className={css.textField}>
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className={css.textFieldlong}>
        <input type="text" placeholder="Full Address" />
      </div>{" "}
      <div className={css.textFieldlong}>
        <input type="text" placeholder="Full Address 2 (optional)" />
      </div>
    </div>
  );
}

export default Form;
