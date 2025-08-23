import style from "./ServiceCard.module.css";
// import img1 from "../assets/Rectangle74.png";
// import img2 from "../assets/chef4.png";
// import imag3 from "../assets/image.png";
// import imag4 from "../assets/right1.png";

const ServiceCard = ({ img1, img2, Head, imag3, para, imag4 }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.card}>
          <div className={style.one}>
            <img src={img1} alt="Private Chefs" />
          </div>
          <div className={style.two}>
            <div className={style.threeImg}>
              <img src={img2} alt="Chef Icon" />
            </div>
            <h3>{Head}</h3>
            <div className={style.fourImg}>
              <img src={imag3} alt="" />
            </div>
            <p>{para}</p>
            <div className={style.five}>
              {/* <img src={imag4} alt="" />
              <p>Read More</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
