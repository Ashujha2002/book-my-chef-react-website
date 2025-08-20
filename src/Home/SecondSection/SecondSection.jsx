import React from "react";
import styles from "./SecondSection.module.css";
import ActionAreaCard from "./ActionAreaCard";

import img1 from "../../assets/PR2.jpeg";
import img2 from "../../assets/03.jpeg";
import img3 from "../../assets/04.jpeg";
import img4 from "../../assets/10.png";
import deco2 from "../../assets/deco23.png";

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Featured Cards</h2>
      <div className={styles.iconWrapper}>
        <img src={deco2} alt="Decoration Icon" />
      </div>

      <div className={styles.cardContainer}>
        <ActionAreaCard
          image={img1}
          title="Private chefs"
          description="Handpicked chefs, right in your kitchen. Perfect for cozy gatherings, date nights, or family celebrations."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img2}
          title="Catering services"
          description="Delicious menus and seamless service for all event sizes — from birthdays to weddings."
          bgColor="#151920"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img3}
          title="Chef’s table"
          description="Elevate your evenings with interactive fine dining prepared live by culinary masters."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img4}
          title="Bartender"
          description="Shake things up with premium cocktails served by expert bartenders for your event."
          bgColor="#151920"
          colors="#FFFFFF"
        />
      </div>

      <div className={styles.backgroundImage}></div>
    </section>
  );
};

export default SecondSection;
