import styles from "../styles/aboutUs.module.css";
import decor from "../../assets/preview2.png";

function Hero({ ABOUTUS }) {
  return (
    <div className={`${styles.heroContainer} flex flex-col`}>
      <div className={styles.blackScreenForOpacity}></div>
      <div
        className={`${styles.heroChild} flex flex-col py-24 md:py-48 items-center`}
      >
        <p className="titleFont text-md md:text-lg">OUR STORY</p>
        <span>
          <img src={decor} />
        </span>
        <p className="titleFont text-4xl md:text-5xl">{ABOUTUS}</p>
      </div>
    </div>
  );
}

export default Hero;
