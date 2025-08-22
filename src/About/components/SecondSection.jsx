import styles from "../styles/aboutUs.module.css";

function SecondSection() {
  const arr = [
    {
      num: 500,
      str: "Daily Order Served",
    },
    {
      num: 150,
      str: "Happy Families Across India",
    },
    {
      num: 15,
      str: "Cities Covered",
    },
    {
      num: 150,
      str: "Professional Chefs Onboarded",
    },
  ];
  return (
    <div
      className={`${styles.secondSectionContainer} py-20 flex justify-around px-5 flex-wrap gap-6`}
    >
      {arr.map((val, index) => (
        <div className="text-center w-1/2 sm:w-auto" key={index}>
          <p className="text-xl sm:text-2xl md:text-3xl">{val.num}+</p>
          <p className="text-orange-500 text-lg sm:text-xl md:text-2xl">
            {val.str}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SecondSection;
