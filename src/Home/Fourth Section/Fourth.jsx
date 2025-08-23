import style from "./Fourth.module.css";
import deco from "../../assets/preview2.png";
import deco2 from "../../assets/22.png";
import barTenders from "../../assets/Bartenders.png";
import wait from "../../assets/Waiters.png";
import clean from "../../assets/clean.png";
const Fourth = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          {/* <img src={deco2} alt="" className={style.bg1} /> */}
          <h2 className={style.headOne}>Services</h2>
          <img src={deco} alt="Decoration Images" />
          <h3 className={style.headTwo}>Add On Services</h3>
          <p>
            To make your event completely stress-free, we offer additional
            support services that ensure everything runs smoothly. Add these to
            your booking at checkout for a truly seamless experience.
          </p>
        </div>
        <div className={style.second}>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <img src={barTenders} alt="" />
            <h3 className={style.headMain}>Bartenders</h3>
            <p>
              Professional bartenders serving premium cocktails and refreshing
              mocktails to keep the party alive.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#151920" }}
          >
            <img src={wait} alt="" />
            <h3 className={style.headMain}>Waiters</h3>
            <p>
              Experienced waitstaff to ensure your guests are served with warmth
              and efficiency throughout the event.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <img src={clean} alt="" />
            <h3 className={style.headMain}>cleaners</h3>
            <p>
              Our trained cleaning staff ensures your space is spotless after
              the celebration, so you can relax and enjoy.
            </p>
          </div>
          {/* <img src= alt="" /> */}
        </div>
      </div>
    </>
  );
};
export default Fourth;
