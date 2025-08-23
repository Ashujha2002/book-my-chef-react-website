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
          description="Handpicked chefs who bring restaurant-quality dining to your kitchen. Perfect for intimate gatherings, anniversaries, or cozy get-togethers."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img2}
          title="Catering services"
          description="Seamless catering solutions for weddings, corporate events, birthdays, and festivals—crafted with precision and warmth."
          bgColor="#151920"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img3}
          title="Chef’s table"
          description="An exclusive fine-dining experience where you watch our culinary masters create exquisite dishes right in front of you."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image={img4}
          title="Bartender"
          description="From classic cocktails to refreshing mocktails, our bartenders ensure your guests enjoy every sip at your celebration."
          bgColor="#151920"
          colors="#FFFFFF"
        />
      </div>

      <div className={styles.backgroundImage}></div>
    </section>
  );
};

export default SecondSection;
