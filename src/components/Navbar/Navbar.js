import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaRegPaperPlane } from "react-icons/fa";
import logoImage from "../../../public/shahrear_logo.png";
import Image from "next/image";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Navbar() {
  const [isNav, setIsNav] = useState(false);
  const menus = ["About", "Services", "Portfolio", "Testimonials"];
  return (
    <nav className={styles.nav_wrapper}>
      <div className={"container " + styles.nav_container}>
        <div className={styles.nav_logo}>
          <Image src={logoImage} alt="shahrear ahamed logo" />
        </div>

        {/* nav links and buttons with toggle switch */}

        <div className={styles.nav_menu}>
          <ul className={styles.nav_items}>
            {menus.map((menu, i) => (
              <li key={i} className={styles.nav_item}>
                {menu}
              </li>
            ))}
          </ul>

          <div className={styles.nav_contact}>
            <ToggleSwitch />
            <button className={styles.nav_contact_btn}>
              <span className={styles.nav_btn_text}>
                <FaRegPaperPlane style={{ marginRight: "10px" }} /> Let&apos;s
                talk
              </span>
            </button>
          </div>
        </div>

        {/* // hamburger menu */}
        <div className={styles.mobile_menu}>
          <ToggleSwitch />
          <div
            onClick={() => setIsNav(!isNav)}
            className={`${styles.menu_box} ${isNav && styles.animate}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* // mobile menu  */}
      <div
        className={`${styles.nav_menu_mobile}  ${
          isNav && styles.mobile_nav_active
        }`}>
        <ul className={styles.nav_items_mobile}>
          {menus.map((menu, i) => (
            <li key={i} className={styles.nav_item_mobile}>
              {menu}
            </li>
          ))}
          <li>
            <button className={styles.nav_contact_btn_mobile}>
              <span className={styles.nav_btn_text}>
                <FaRegPaperPlane style={{ marginRight: "10px" }} /> Let&apos;s
                talk
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
