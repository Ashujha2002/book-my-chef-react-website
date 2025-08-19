import styles from "./CardGoldBack.module.css";
const CardGoldBack = ({ img, margin }) => {
  return (
    <div className={styles.card} style={{ margin: margin }}>
      {/* <div
              className={styles.bg}
              style={{ backgroundImage: `url(${cardBg})` }}
            ></div> */}
      <img src={img} alt="Card 1" />
    </div>
  );
};
export default CardGoldBack;
