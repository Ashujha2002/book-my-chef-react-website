import styles from "../styles/aboutUs.module.css";
import CardImg from "../../assets/Ellipse 5.png";
import ReviewCard from "./reviewCard";

function FifthSection() {
  const dataArr = [
    {
      rating: 5,
      text: "We booked a private chef for our daughter’s birthday in Delhi, and the food was absolutely fantastic! From starters to dessert, everything was fresh and beautifully served. Our guests still talk about the biryani and kebabs.",
      name: "Anjali Mehta",
      city: "New Delhi",
      img: CardImg,
    },
    {
      rating: 5,
      text: "I hired a chef for a family get-together in Bangalore. The chef not only cooked authentic South Indian dishes but also explained the recipes and traditions behind them. It was both delicious and memorable.",
      name: "Ramesh Iyer",
      city: "Bangalore",
      img: CardImg,
    },
    {
      rating: 3,
      text: "Our office Diwali party in Mumbai was catered by this team, and it exceeded expectations. The live counters, chatpata chaats, and festive sweets were a big hit with everyone. Excellent service and hygiene too.",
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
