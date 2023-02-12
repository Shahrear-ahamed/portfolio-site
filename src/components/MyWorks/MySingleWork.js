import Image from "next/image";
import React from "react";
import styles from "./MyWorks.module.css";

function MySingleWork({ image, title, text }) {
  return (
    <div className={styles.image_div}>
      <Image src={image} alt="Echo electronics" className={styles.image} />

      <div className={styles.image_overlay}>
        <h4 className={styles.image_overlay_title}>{title}</h4>
        <p className={styles.image_overlay_text}>{text}</p>
      </div>
    </div>
  );
}

export default MySingleWork;
