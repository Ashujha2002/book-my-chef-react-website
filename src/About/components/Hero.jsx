import styles from "../styles/aboutUs.module.css";
import decor from "../../assets/preview2.png";

function Hero({ ABOUTUS }) {
  return (
    <div className={`${styles.heroContainer} flex flex-col`}>
      <div className={styles.blackScreenForOpacity}></div>
      <div
        className={`${styles.heroChild} flex flex-col py-24 md:py-48 items-center text-center px-4`}
      >
        <p className="titleFont text-sm sm:text-md md:text-lg">OUR STORY</p>
        <span>
          <img className="w-16 sm:w-20 md:w-28" src={decor} />
        </span>
        <p className="titleFont text-2xl sm:text-4xl md:text-5xl">{ABOUTUS}</p>
      </div>
    </div>
  );
}

export default Hero;
