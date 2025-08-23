import React from "react";
import { Link } from "react-router-dom";
import styles from "./Thanks.module.css"; // using the CSS you already created

export default function Thanks() {
  return (
    <section className={styles.thanksSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>🎉 Thank You!</h1>
        <p className={styles.message}>
          Your message has been successfully sent. I’ll get back to you as soon
          as possible.
        </p>
        <Link to="/" className={styles.homeBtn}>
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
