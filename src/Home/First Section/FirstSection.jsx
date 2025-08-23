import React from "react";
import styles from "./FirstSection.module.css";

import topRight from "../../assets/Group27.png";
import bottomRight from "../../assets/bg-2.png";
import bottomLeft from "../../assets/bg4.png";

import cardBg from "../../assets/gold.png";
import desi from "../../assets/preview2.png";

import card1 from "../../assets/pexels-chanwalrus-958546.jpg";
import card2 from "../../assets/5151.webp";
import card3 from "../../assets/pexels-cha.webp";
import CardGoldBack from "../../Components/CardGoldBack";

function FirstSection() {
  return (
    <section className={styles.section}>
      {/* Background decorative images */}
      <img src={topRight} alt="" className={styles.topRight} />
      <img src={bottomRight} alt="" className={styles.bottomRight} />

      <img src={bottomLeft} alt="" className={styles.bottomLeft} />

      {/* Content */}
      <div className={styles.content}>
        <h2>Flavors Made for Royalty</h2>
        <img src={desi} alt="" />

        <p>
          Hosting an event shouldn’t be stressful. At Book My Chef, we make it
          effortless. Choose from our all-inclusive catering packages designed
          for every occasion—whether it’s a traditional North Indian wedding, a
          corporate lunch, or a festive Diwali dinner. Our chefs craft menus
          that celebrate India’s diverse culinary heritage while also offering
          global cuisines for modern tastes. With us, every event becomes an
          unforgettable culinary journey.  
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        <CardGoldBack img={card1} title="Casual" />
        <CardGoldBack img={card2} margin="50px" title="Gourmet" />
        <CardGoldBack img={card3} title="Chef's Table" />
      </div>
      <button className={styles.Button1}>View All Packages</button>
    </section>
  );
}

export default FirstSection;
