import styles from "./CardGoldBack.module.css";

const CardGoldBack = ({ img, margin, title }) => {
  return (
    <div style={{ margin: margin }} className={styles.wrapper}>
      {/* card */}
      <div className={styles.card}>
        <img src={img} alt={title} />
      </div>

      {/* text */}
      <h3 className={styles.caption}>{title}</h3>

      {/* double line */}
      <div className={styles.doubleLine}></div>
    </div>
  );
};

export default CardGoldBack;
