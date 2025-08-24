import styles from "../styles/aboutUs.module.css";
import decor from "../../assets/preview2.png";
import Imgdecor1 from "../../assets/06.png";
import Imgdecor2 from "../../assets/563251.png";
import HexagonSvg from "../../assets/hexagon1.svg";
import ImgdecorTopRight from "../../assets/08.png";
import ImgdecorBottomLeft from "../../assets/56325.png";

function FirstSection({ className }) {
  const heading = <p>WHO WE ARE</p>;
  const titleParagraph = (
    <p className="text-base md:text-lg para">
      We are a collective of culinary experts, food enthusiasts, and
      professional chefs with one vision — to bring authentic, homely, and
      unforgettable dining experiences right to your doorstep. Our journey began
      with a simple idea: that hiring a chef in India should be as easy as
      <span className="text-orange-500"> Over the years</span>. we have served
      countless families, hosted large weddings, designed curated corporate
      menus, and partnered with some of the best kitchens in the country. From
      traditional Indian thalis to international gourmet platters, our chefs
      blend authenticity with innovation, ensuring that every meal feels like a
      story told through taste.
    </p>
  );
  const cardContactAndTimeData = [
    {
      type: "Lunch Time",
      data: ["Monday To Sunday", "11.00 AM - 3.00 PM"],
    },
    {
      type: "Dinner Time",
      data: ["Monday To Sunday", "6.30 PM - 11.00 PM"],
    },
    {
      type: "Contact Us",
      data: [
        "B-99, 5th Floor, Phase-I Panchsheel Park Malviya Nagar, Near Triveni Complex New Delhi - 110017",
      ],
    },
  ];
  return (
    <div className={`${styles.sectionContainer} ${className} py-10`}>
      <div className={`${styles.decorTopRight}`}>
        <img
          className="w-20 sm:w-28 md:w-40 mb-[30px] -mt-[20px] sm:mt-0"
          src={ImgdecorTopRight}
        />
      </div>
      <div className={`${styles.decorBottomLeft}`}>
        <img className="w-50 sm:w-28 md:w-40" src={ImgdecorBottomLeft} />
      </div>
      <div className="flex flex-col items-center space-x-2 text-center px-4">
        <span className="text-base md:text-lg titleFont text-orange-500">
          {heading}
        </span>
        <span>
          <img className="w-16 sm:w-20 md:w-28" src={decor} />
        </span>
        <span className="w-full sm:w-4/5 md:w-9/20 text-center">
          {titleParagraph}
        </span>
      </div>
      <div className="px-4 sm:px-8 md:px-12 pt-10 md:pt-24 grid gap-6 md:grid-cols-3">
        <div className="item1 flex flex-col items-center space-y-4 md:block">
          <div>
            <p className="text-sm md:text-base para">
              What sets us apart is our attention to detail — not just in
              cooking but in the entire dining experience. Each chef we onboard
              undergoes rigorous training, background verification, and skill
              assessments. This means when you book a chef with us, you’re not
              only choosing convenience but also trust, professionalism, and
              quality. Our services extend from small family gatherings to
              high-end events, making sure your guests always remember the food
              and hospitality. After all, food in India is not just nourishment
              — it’s culture, emotion, and celebration.
            </p>
          </div>
          <img
            className="w-full md:w-auto rounded-lg"
            style={{ marginTop: "80px" }}
            src={Imgdecor1}
          />
        </div>
        <div className="item2 hidden md:block">
          <img className="rounded-lg" src={Imgdecor2} />
        </div>
        <div className={`item3 ${styles.parentContainer}`}>
          <div
            className={`${styles.childContainer1} border py-12 border-orange-500`}
          >
            {cardContactAndTimeData.map((item, index) => (
              <div
                className="my-5 text-center flex flex-col items-center px-2"
                key={index * Math.random() * 100}
              >
                <p className="font-semibold">{item.type}</p>
                {Array.isArray(item.data) ? (
                  item.data.map((val, idx) => (
                    <p className="text-sm" key={idx}>
                      {val}
                    </p>
                  ))
                ) : (
                  <p>{item.data}</p>
                )}
                {index == 1 && <img className="w-10 mt-2" src={HexagonSvg} />}
              </div>
            ))}
          </div>
          <div
            className={`${styles.childContainer2} border border-orange-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
