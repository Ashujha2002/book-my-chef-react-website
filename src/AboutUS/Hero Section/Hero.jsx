import style from "./Hero.module.css";
import deco from "../../assets/image.png";
import { styleEffect } from "motion";
const Hero = ({ Heading, AboveHead, imageUrl }) => {
  return (
    <>
      <div
        className={style.main}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        }}
      >
        <div className={style.one}>
          <h2>{AboveHead}</h2>
          <img src={deco} alt="Decoration image" />
          <h1>{Heading}</h1>
        </div>
      </div>
    </>
  );
};
export default Hero;
