import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./SelectPage.module.css";

function SelectPages() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedPage = event.target.value;
    setSelectedValue(selectedPage);
    navigate(selectedPage);
  };

  return (
    <div className={css.selectContainer}>
      <select
        className={css.select}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          Pages
        </option>
        <option className={css.option} value="/">
          Home Page
        </option>
        <option className={css.option} value="/travelList">
          List Page
        </option>
        <option className={css.option} value="/travelDetail">
          Details Page
        </option>
        <option className={css.option} value="/travelCheckout">
          Checkout Page
        </option>
        <option className={css.option} value="/travelCompleted">
          Completed Page
        </option>
        <option className={css.option} value="/travelBlog">
          Blog Page
        </option>
        <option className={css.option} value="/travelBlogDetails">
          Blog-Details Page
        </option>
        <option className={css.option} value="/travelAbout">
          About Page
        </option>
        <option className={css.option} value="/travelContact">
          Contact Page
        </option>
      </select>
    </div>
  );
}

export default SelectPages;
