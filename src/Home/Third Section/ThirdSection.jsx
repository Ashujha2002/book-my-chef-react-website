import style from "./ThirdSection.module.css";
import decoImg from "../../assets/deco23.png";
import vectorImg from "../../assets/Vector3.png";
import vectorImg1 from "../../assets/Vector4.png";
import appImg from "../../assets/RemBG.png";
import playStore from "../../assets/And.png";
import appStore from "../../assets/Apple.png";
const ThirdSection = () => {
  return (
    <>
      <section className={`${style.mainSection}`}>
        <div className={`${style.firstDiv}`}>
          <h2 className={`${style.headingText}`}>Book Chef</h2>
          <img src={decoImg} alt="Decoration Icon" />
          <h2 className={`${style.headingText2}`}>Easy mobile booking</h2>
        </div>
        <div className={style.secondDiv}>
          <div className={style.secondLeft}>
            <div className={style.secondFir}>
              <p>
                <span className={`${style.spanBg}`}>Step 1 :</span> Select your
                preferred cuisine
              </p>
              <img src={vectorImg} className={style.arrImg} alt="" />
            </div>
            <div className={style.secondSec}>
              <p>
                <span className={`${style.spanBg}`}>Step 2 :</span> Select your
                chef category: Junior, Senior, or Pro
              </p>
              <img src={vectorImg1} className={style.arrImg1} alt="" />
            </div>
            <div className={style.secondFir}>
              <p>
                <span className={`${style.spanBg}`}>Step 3 :</span> Choose
                kitchen type: Basic, Comfort, or Fully Equipped
              </p>
              <img src={vectorImg} className={style.arrImg} alt="" />
            </div>
            <div className={style.secondSec}>
              <p>
                <span className={`${style.spanBg}`}>Step 4 :</span> Select your
                chef category: Junior, Senior, or Pro
              </p>
              <img src={vectorImg1} className={style.arrImg1} alt="" />
            </div>
            <div className={style.secondFir}>
              <p>
                <span className={`${style.spanBg}`}>Step 5 :</span> Select your
                preferred cuisine
              </p>
            </div>
          </div>
          <div className={style.secRigh}>
            <img src={appImg} alt="" />
            <div className={style.secRighInn}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  src={playStore}
                  className={style.arrImg}
                  alt="Go to Example"
                /> */}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  src={appStore}
                  className={style.arrImg}
                  alt="Go to Example"
                /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ThirdSection;
