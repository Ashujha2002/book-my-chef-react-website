import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// Import your actual images:
import DecorImg from "../../assets/image.png";
import IconPlus from "../../assets/add.png"; // right-arrow icon
import IconMinus from "../../assets/minus.png"; // rotated arrow (optional)

const FAQ_DATA = [
  {
    question: "What cuisines do your chefs specialize in?",
    answer:
      "From North Indian, South Indian, Bengali, and Gujarati to Continental, Chinese, and Italian, our chefs can prepare a wide variety of cuisines.",
  },
  {
    question: "Can I book chefs for festivals like Diwali or Holi?",
    answer:
      "Absolutely! We specialize in festive catering and ensure menus reflect traditional flavors with a modern twist.",
  },
  {
    question: "Are your chefs available across India?",
    answer:
      "Yes, Book My Chef services are available in major cities like Delhi, Mumbai, Bengaluru, Hyderabad, Jaipur, and expanding rapidly.",
  },
  {
    question: "Can I book a chef for just a small gathering?",
    answer:
      "Of course. Whether it’s a dinner for two, a birthday for 10, or a wedding for 500+, we’ve got you covered.",
  },
  {
    question: "How can I hire a chef through Chef Choice Menu?",
    answer:
      "Simply create an account, browse available chefs, choose your date, and book directly through our site.",
  },
  // …add more items as needed
];

export default function FaqSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <img src={DecorImg} alt="" className={styles.decor} />
      <ul className={styles.list}>
        {FAQ_DATA.map((item, idx) => (
          <FaqItem key={idx} {...item} />
        ))}
      </ul>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <li className={`${styles.item} ${open ? styles.open : ""}`}>
      <button className={styles.button} onClick={toggle} aria-expanded={open}>
        <span className={styles.qText}>{question}</span>
        <img
          src={open ? IconMinus : IconPlus}
          alt={open ? "Collapse" : "Expand"}
          className={styles.icon}
        />
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </li>
  );
}
