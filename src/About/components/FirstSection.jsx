import styles from "../styles/aboutUs.module.css";
import decor from "../../assets/preview2.png";
import Imgdecor1 from "../../assets/06_clean-bar-1.jpg 1.png";
import Imgdecor2 from "../../assets/22_team-3-1-1.jpg 1.png";
import HexagonSvg from "../../assets/hexagon 1.svg";
import ImgdecorTopRight from "../../assets/08_bg-11 1.png";
import ImgdecorBottomLeft from "../../assets/Frame 1.png";

function FirstSection({ className }) {
  const heading = <p>WHO WE ARE</p>;
  const titleParagraph = (
    <p className="text-base md:text-lg">
      A modern restaurant with a menu that will make your mouth water. Servicing
      delicious food <span className="text-orange-500">since 45 years</span>.
      Enjoy our seasonal menu and experience the beauty of naturalness
    </p>
  );
  const cardContactAndTimeData = [
    {
      type: "Lunch Time",
      data: ["Monday To Sunday", "11.00am - 2.30pm"],
    },
    {
      type: "Dinner Time",
      data: ["Monday To Sunday", "11.00am - 2.30pm"],
    },
    {
      type: "Contact Us",
      data: ["Restaurant St, Delicious City, London 9578, UK"],
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
            <p className="text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived.
            </p>
          </div>
          <img className="w-full md:w-auto rounded-lg" src={Imgdecor1} />
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
