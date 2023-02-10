import React from "react";
import styles from "./Specialized.module.css";
import SpecializedContent from "../reusable/SpecializedContent/SpecializedContent";

const Specialized = () => {
  const team = [1, 2, 3];
  return (
    <section className="container">
      <div className={styles.specialized_section}>
        <h2 className={styles.specialized_content_title}>
          I&apos;m Specialized in
        </h2>
        <div className={styles.specialized_container}>
          {team.map((item, i) => (
            <SpecializedContent key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialized;
