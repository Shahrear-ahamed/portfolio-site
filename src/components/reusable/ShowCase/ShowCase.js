import React from "react";
import styles from "./ShowCase.module.css";

function ShowCase({ icon, text, title, style, anim_delay }) {
  console.log(icon);
  const paddingStyle = icon ? { padding: "8px 10px" } : { padding: "6px 10px" };
  const animation = { ...anim_delay, ...paddingStyle };
  return (
    <div style={animation} className={`${styles.showCase_container} ${style}`}>
      <span className={styles.textOrIcon} style={icon && { fontSize: "21px" }}>
        {icon || text}
      </span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default ShowCase;
