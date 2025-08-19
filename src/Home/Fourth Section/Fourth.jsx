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
            We provide additional services that enhance your experience and
            ensure a hassle-free and relaxed environment. These services can be
            easily added to your order during the check-out process.
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
              Handpicked chefs, right in your kitchen. Perfect for cozy
              gatherings, date nights, or family celebrations.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#151920" }}
          >
            <img src={wait} alt="" />
            <h3 className={style.headMain}>Waiters</h3>
            <p>
              Delicious menus and seamless service for all event sizes — from
              birthdays to weddings.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <img src={clean} alt="" />
            <h3 className={style.headMain}>cleaners</h3>
            <p>
              Elevate your evenings with interactive fine dining prepared live
              by culinary masters.
            </p>
          </div>
          {/* <img src= alt="" /> */}
        </div>
      </div>
    </>
  );
};
export default Fourth;
