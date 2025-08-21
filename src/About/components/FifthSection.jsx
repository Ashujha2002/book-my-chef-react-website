import styles from "../styles/aboutUs.module.css";
import CardImg from "../../assets/Ellipse 5.png";
import ReviewCard from "./reviewCard";

function FifthSection() {
  const dataArr = [
    {
      rating: 4,
      text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.",
      name: "willian joe",
      city: "new york",
      img: CardImg,
    },
    {
      rating: 5,
      text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.",
      name: "willian joe",
      city: "new york",
      img: CardImg,
    },
    {
      rating: 3,
      text: "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.",
      name: "willian joe",
      city: "new york",
      img: CardImg,
    },
  ];
  return (
    <div
      className={`${styles.fifthSectionContainer} py-50 py-10 md:py-20 px-5 flex space-x-5 justify-center flex-wrap gap-y-6`}
    >
      {dataArr.map((val, index) => (
        <ReviewCard
          key={index * Math.random() * 100}
          rating={val.rating}
          text={val.text}
          name={val.name}
          city={val.city}
          img={val.img}
        />
      ))}
    </div>
  );
}

export default FifthSection;
