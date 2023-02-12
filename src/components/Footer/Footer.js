import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import LogoImage from "../../../public/shahrear_logo.png";
import SocialMedia from "../reusable/SocialMedia/SocialMedia";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer_container}>
      <div className={`container ${styles.footer_body}`}>
        <Image
          className={styles.footer_logo}
          src={LogoImage}
          alt="Shahrear ahamed logo"
          width={150}
        />

        <SocialMedia />
      </div>
      <hr className={styles.line_break} />
      <p className={styles.copyright}>&#169; Shahrear ahamed {year} | V 1.0</p>
    </footer>
  );
}

export default Footer;
