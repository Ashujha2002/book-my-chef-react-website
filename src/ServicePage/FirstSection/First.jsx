import style from "./First.module.css";
import chef1 from "../../assets/chef.png";
import chef2 from "../../assets/chef2.png";
import imag2 from "../../assets/image.png";

import cardImg from "../../assets/05about.png";
const First = () => {
  return (
    <>
      <div className={style.parent}>
        <div className={style.first}>
          <div className={style.firstLeft}>
            <div className={style.firstL}>
              <h2>5+</h2>
            </div>
            <div className={style.firstR}>
              <h2>
                Years of <br></br>Experience
              </h2>
            </div>
          </div>
          <div className={style.firstRight}>
            <img src={chef1} alt="Chef-Image 1" />
            <img src={chef2} alt="Chef-Image 2" />
          </div>
        </div>
        <div className={style.second}>
          <div className={style.secondLeft}>
            <div className={style.card}>
              <img src={cardImg} alt="Card 1" />
            </div>
          </div>
          <div className={style.secondRight}>
            <h2>Dine Differently: Private Chefs at Your Service</h2>
            <img src={imag2} alt="" />
            <p>
              At Book My Chef, we bring exceptional culinary experiences right
              to your doorstep. Whether you're hosting a small dinner party,
              planning a corporate event, or craving a private fine-dining
              evening, our team of professional chefs and hospitality experts is
              here to serve unforgettable moments through food and service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
