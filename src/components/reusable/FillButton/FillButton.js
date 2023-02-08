import React from "react";
import styles from "./FillButton.module.css";

const FillButton = ({ left, text, right }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.btn_text}>
        {left} {text} {right}
      </span>
    </button>
  );
};

export default FillButton;
