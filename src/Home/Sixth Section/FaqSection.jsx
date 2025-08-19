import React, { useState } from "react";
import styles from "./FaqSection.module.css";

// Import your actual images:
import DecorImg from "../../assets/image.png";
import IconPlus from "../../assets/add.png"; // right-arrow icon
import IconMinus from "../../assets/minus.png"; // rotated arrow (optional)

const FAQ_DATA = [
  {
    question: "What is the booking procedure for caterers?",
    answer:
      "To book a caterer, you choose your cuisine type, select date & time, then confirm payment. Our system connects you with a vetted chef for your event.",
  },
  {
    question: "What types of events can BookMyChef cater to?",
    answer:
      "We cater to weddings, corporate events, private parties, and any gathering where you need professional chefs on-site.",
  },
  {
    question: "Can you also provide a bartender and servers?",
    answer:
      "Yes—just select additional staffing when booking, and we’ll include bartenders or servers as needed.",
  },
  {
    question: "Are your chefs and other partners vetted for quality?",
    answer:
      "Absolutely—each chef and partner passes our rigorous quality checks before joining the platform.",
  },
  {
    question: "How can I hire a chef through BookMyChef?",
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
