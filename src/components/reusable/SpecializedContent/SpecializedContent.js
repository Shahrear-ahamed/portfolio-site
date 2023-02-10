import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import styles from "./SpecializedContent.module.css";

function SpecializedContent() {
  return (
    <div className={styles.single_div}>
      <div className={styles.specialized_div}>
        <span className={styles.icon_div}>
          <FaMobileAlt />
        </span>

        <h3 className={styles.specialized_title}>Front end development</h3>

        <p className={styles.specialized_text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sequi
          vel corrupti nam quia optio ratione commodi distinctio id est?
        </p>
      </div>
    </div>
  );
}

export default SpecializedContent;
