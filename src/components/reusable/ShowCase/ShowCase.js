import React from "react";
import styles from "./ShowCase.module.css";

function ShowCase({ icon, text, title, style, anim_delay }) {
  return (
    <div style={anim_delay} className={`${styles.showCase_container} ${style}`}>
      <span className={styles.textOrIcon}>{icon || text}</span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default ShowCase;
