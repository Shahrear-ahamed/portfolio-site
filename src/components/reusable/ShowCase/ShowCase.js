import React from "react";
import styles from "./ShowCase.module.css";

function ShowCase({ icon, text, title, position }) {
  return (
    <div style={position} className={styles.showCase_container}>
      <span className={styles.textOrIcon}>{icon || text}</span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default ShowCase;
