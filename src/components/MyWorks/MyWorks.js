import React from "react";
import MySingleWork from "./MySingleWork";
import styles from "./MyWorks.module.css";
import EchoImage from "../../../public/echo-electronics.jpg";

function MyWorks() {
  const works = [
    { image: EchoImage, title: "Echo electronics", text: "Front end" },
    { image: EchoImage, title: "Anchor auto", text: "Full stack" },
    { image: EchoImage, title: "Food panda", text: "Full stack" },
  ];
  return (
    <section className="container container_wrapper">
      <div className={styles.my_works_container}>
        <h2 className="section_title">
          My <span className="highlight_text">Work&apos;s</span>
        </h2>

        <div className={styles.works_div}>
          {works.map(({ image, title, text }, i) => (
            <MySingleWork key={i} image={image} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyWorks;
