import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import AboutImage from "../../../public/hero_one.png";
import { FaRegPaperPlane, FaTools, FaLaptopCode } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import FillButton from "../reusable/FillButton/FillButton";
import ShowCase from "../reusable/ShowCase/ShowCase";

function About() {
  return (
    <section className="container container_wrapper">
      <div className={styles.about_wrapper}>
        {/* // image  */}
        <div className={styles.about_image_div}>
          <ShowCase
            icon={<FaLaptopCode />}
            title="Front-end"
            style={styles.showcase_one}
            anim_delay={{ animationDelay: "0.5s", animationDuration: "9s" }}
          />
          <Image
            src={AboutImage}
            alt="Shahrear ahamed Hero Image with blazer"
            height={400}
            width={400}
          />

          <ShowCase
            icon={<FaTools />}
            title="Back-end"
            style={styles.showcase_two}
            anim_delay={{ animationDelay: "1.5s", animationDuration: "10s" }}
          />

          <ShowCase
            icon={<SiAltiumdesigner />}
            title="Industry standard"
            style={styles.showcase_three}
            anim_delay={{ animationDelay: "1s", animationDuration: "8s" }}
          />
        </div>

        <div>
          <h1 className={styles.about_title}>
            Full-stack developer are here to
            <span className={styles.about_highlight}> help</span> you!
          </h1>
          <p className={styles.about_desc}>
            Hey, I am Shahrear Ahamed, a professional and passionate, programmer
            and full-stack (MERN) web developer. If you want to develop or hire
            me, don&apos;t hesitate to contact me!
          </p>

          <FillButton
            left={<FaRegPaperPlane style={{ marginRight: "10px" }} />}
            text="Let's talk"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
