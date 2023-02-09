import React from "react";
import styles from "./SocialMedia.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

function SocialMedia() {
  return (
    <ul className={styles.socials_container}>
      <li>
        <Link href="https://www.facebook.com/its.shahrear" target="_blank">
          <FaFacebookF />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/shahrear_ahamed/" target="_blank">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/shahrear-ahamed/"
          target="_blank">
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Shahrear-ahamed" target="_blank">
          <FaGithub />
        </Link>
      </li>
    </ul>
  );
}

export default SocialMedia;
