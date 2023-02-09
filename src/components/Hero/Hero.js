import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../../public/hero_one.png";
import { MdOutlineBusinessCenter } from "react-icons/md";
import FillButton from "../reusable/FillButton/FillButton";
import Link from "next/link";
import ShowCase from "../reusable/ShowCase/ShowCase";
import SocialMedia from "../reusable/SocialMedia/SocialMedia";

function Hero() {
  return (
    <section className={`container ${styles.hero_container}`}>
      <div className={styles.hero_content}>
        <div>
          <span className={styles.sayHello}>Hello </span>
          <h1 className={styles.hero_title}>
            I&apos;m <span className={styles.full_name}>Shahrear Ahamed </span>
            <span className={styles.designation}>Full-Stack</span> Developer
          </h1>
          <p className={styles.my_description}>
            Hey, I am Shahrear Ahamed, a professional and passionate, programmer
            and full-stack (MERN) web developer. If you want to develop or hire
            me, don&apos;t hesitate to contact me!
          </p>

          <div className={styles.buttons}>
            <FillButton
              left={<MdOutlineBusinessCenter style={{ marginRight: "10px" }} />}
              text="Hire Me"
            />

            <Link className={styles.portfolio_link} href="/portfolio">
              See Portfolio
            </Link>
          </div>

          <div className={styles.follow_social}>
            <span>Follow Me:</span>
            <SocialMedia />
          </div>
        </div>

        {/* // image  */}
        <div className={styles.image_div}>
          <ShowCase
            text="1+"
            title="Years of Experience"
            position={{ top: "20%", left: "0" }}
          />
          <Image
            src={HeroImage}
            alt="Shahrear ahamed Hero Image with blazer"
            height={500}
            width={500}
          />

          <ShowCase
            text="10+"
            title="Project Done"
            position={{ top: "25%", right: "0" }}
          />

          <ShowCase
            text="7+"
            title="Happy Clients"
            position={{ top: "85%", left: "30%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
