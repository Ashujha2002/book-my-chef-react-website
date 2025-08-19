import React from "react";
import styles from "./FirstSection.module.css";

import topRight from "../../assets/Group27.png";
import bottomRight from "../../assets/bg-2.png";
import bottomLeft from "../../assets/bg4.png";

import cardBg from "../../assets/gold.png";
import desi from "../../assets/preview2.png";

import card1 from "../../assets/cardReIm.jpeg";
import card2 from "../../assets/55.jpeg";
import card3 from "../../assets/57.jpeg";
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
        <h2>Flavors for royalty</h2>
        <img src={desi} alt="" />

        <p>
          Make your event stress-free with our all-inclusive catering packages!
          From effortless breakfast spreads to satisfying lunch and dinner
          options, we offer a wide range of multi-cuisine choices to suit every
          taste. 
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        <CardGoldBack img={card1} />
        <CardGoldBack img={card2} margin="50px" />
        <CardGoldBack img={card3} />
      </div>
      <button className={styles.Button1}>View All Packages</button>
    </section>
  );
}

export default FirstSection;
