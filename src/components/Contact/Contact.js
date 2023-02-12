import React from "react";
import FillButton from "../reusable/FillButton/FillButton";
import styles from "./Contact.module.css";
import { TbLocation } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

function Contact() {
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Message sent");
  };
  return (
    <section
      className={`container container_wrapper ${styles.contact_section}`}>
      <div className={styles.contact_div}>
        <div className={styles.contact_details}>
          <h2 className={`section_title ${styles.title}`}>
            Let&apos;s <span className="highlight_text">Talk</span>
          </h2>
          <p className={styles.contact_Text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            rerum!
          </p>

          <div>
            <div className={styles.contact_item_body}>
              <div className={styles.contact_icon}>
                <HiOutlineMail />
              </div>
              <div className={styles.contact_single_details}>
                <h4>Email:</h4>
                <p>its.shahrear@gmail.com</p>
              </div>
            </div>

            <div className={styles.contact_item_body}>
              <div className={styles.contact_icon}>
                <IoCall />
              </div>
              <div className={styles.contact_single_details}>
                <h4>Whatsapp:</h4>
                <p>+8801517-821912</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={sendMessage} className={styles.contact_form}>
          <div className={styles.input_div}>
            <label className={styles.input_label} htmlFor="name">
              Name:
              <input type="text" name="name" id="name" />
            </label>
          </div>

          <div className={styles.input_div}>
            <label className={styles.input_label} htmlFor="email">
              Email:
              <input type="email" name="email" id="email" />
            </label>
          </div>

          <div className={styles.input_div}>
            <label className={styles.input_label} htmlFor="Subject">
              Subject:
              <input type="text" name="Subject" id="Subject" />
            </label>
          </div>

          <div className={styles.input_div}>
            <label className={styles.input_label_textarea} htmlFor="message">
              Message:
              <textarea name="message" id="message" cols="30" rows="4" />
            </label>
          </div>

          <FillButton
            text="Submit"
            right={<TbLocation style={{ marginLeft: "10px" }} />}
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
