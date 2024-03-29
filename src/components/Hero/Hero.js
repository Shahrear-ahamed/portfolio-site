import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../../public/hero_one.png";
import {BsCloudDownload} from "react-icons/bs";
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
                        <Link
                            className={styles.btn}
                            download
                            href="/Shahrear_ahamed.pdf"
                            alt="Download my resume"
                            rel="noopener noreferrer">
              <span className={styles.btn_text}>
                Download Resume
                <BsCloudDownload style={{marginLeft: "20px"}}/>
              </span>
                        </Link>

                        <Link className={styles.portfolio_link} href="/portfolio">
                            See Works
                        </Link>
                    </div>

                    <div className={styles.follow_social}>
                        <span className={styles.follow_text}>Follow Me:</span>
                        <SocialMedia/>
                    </div>
                </div>

                {/* // image  */}
                <div className={styles.image_div}>
                    <ShowCase
                        text="1+"
                        title="Years Experience"
                        style={styles.showcase_one}
                        anim_delay={{animationDelay: "0.5s", animationDuration: "9s"}}
                    />
                    <Image
                        src={HeroImage}
                        alt="Shahrear ahamed Hero Image with blazer"
                        height={500}
                        width={500}
                    />

                    <ShowCase
                        text="10+"
                        title="Projects Done"
                        style={styles.showcase_two}
                        anim_delay={{animationDelay: "1.5s", animationDuration: "10s"}}
                    />

                    <ShowCase
                        text="7+"
                        title="Happy Clients"
                        style={styles.showcase_three}
                        anim_delay={{animationDelay: "1s", animationDuration: "8s"}}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
