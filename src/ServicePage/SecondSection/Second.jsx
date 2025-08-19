import style from "./Second.module.css";

import img1 from "../../assets/Rectangle74.png";
import img2 from "../../assets/chef4.png";
import imag3 from "../../assets/image.png";
import imag4 from "../../assets/right1.png";
import imag5 from "../../assets/catering-service.png";
import imag6 from "../../assets/Rectangle76.png";
import imag7 from "../../assets/Rectangle77.png";
import imag8 from "../../assets/1859.png";
import imag9 from "../../assets/Rectangle78.png";
import imag10 from "../../assets/barman1.png";
import ServiceCard from "../../Components/ServiceCard";

const Second = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          <h2>Services We Offer</h2>
        </div>
        <div className={style.second}>
          <ServiceCard
            img1={img1}
            img2={img2}
            Head="Private Chefs"
            imag3={imag3}
            para="Enjoy restaurant-style dining in your own kitchen. Our professional chefs craft personalized meals tailored to your tastes, perfect for cozy dinners, family celebrations, or special surprises."
            imag4={imag4}
          />
          <ServiceCard
            img1={imag6}
            img2={imag5}
            Head="Catering Services"
            imag3={imag3}
            para="Make your events unforgettable with our top-tier catering services. We deliver delicious menus and smooth service for weddings, parties, corporate events, and more—so you can focus on your guests."
            imag4={imag4}
          />
        </div>
        <div className={style.second}>
          <ServiceCard
            img1={imag7}
            img2={imag8}
            Head="Chef’s Table"
            imag3={imag3}
            para="Experience live cooking at its finest with our Chef’s Table. Enjoy a front-row seat as our expert chefs prepare and serve a multi-course gourmet journey just for you and your guests."
            imag4={imag4}
          />
          <ServiceCard
            img1={imag9}
            img2={imag10}
            Head="Bartender Services"
            imag3={imag3}
            para="Add elegance and excitement to your gathering with a private bartender. From classic cocktails to signature drinks, our mixologists serve up the perfect pour for every occasion."
            imag4={imag4}
          />
        </div>
      </div>
    </>
  );
};
export default Second;
