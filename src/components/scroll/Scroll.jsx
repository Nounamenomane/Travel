import { useEffect, useState } from "react";
import css from "./Scrool.module.css";
import up from "./3148312.png";

function Scroll() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`${css.start} ${showButton ? css.active : ""}`}
      onClick={scrollToTop}
    >
      <img src={up} alt="Scroll to Top" />
    </div>
  );
}

export default Scroll;
