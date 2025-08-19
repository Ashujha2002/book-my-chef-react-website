import style from "./Fifth.module.css";
import deco from "../../assets/image.png";
import deco2 from "../../assets/Vector.png";
import deco3 from "../../assets/Group39.png";
const Fifth = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          <h3>IMPRESSIONS</h3>
          <img src={deco} alt="Decoration Image" />
          <h2>What Our Customer Saying</h2>
          <img src={deco2} alt="Quotation" />
        </div>
        <div className={style.second}>
          <p>
            We hired a private chef from Book my chef for our anniversary. The
            food was exquisite and the service was impeccable. Our guests were
            thoroughly impressed. Highly recommended!
          </p>
          <h4>-- Awadhesh Gupta</h4>
          <img src={deco3} alt="" />
        </div>
      </div>
    </>
  );
};
export default Fifth;
