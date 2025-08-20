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
    <p className="text-lg">
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
            <img src={ImgdecorTopRight}/>
        </div>
        <div className={`${styles.decorBottomLeft}`}>
            <img src={ImgdecorBottomLeft}/>
        </div>
        <div className="flex flex-col items-center space-x-2">
          <span className="text-lg titleFont text-orange-500">{heading}</span>
          <span>
            <img src={decor} />
          </span>
          <span className="w-9/10 md:w-9/20 text-center">{titleParagraph}</span>
        </div>
        <div className="px-12 pt-24 grid md:grid-cols-3 gap-4">
          <div className="item1 flex flex-col items-center space-y-4 md:block">
            <div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book It has survived.
              </p>
            </div>
            <img src={Imgdecor1} />
          </div>
          <div className="item2 hidden md:block">
            <img src={Imgdecor2} />
          </div>
          <div className={`item3 ${styles.parentContainer}`}>
            <div
              className={`${styles.childContainer1} border py-12 border-orange-500`}
            >
              {cardContactAndTimeData.map((item, index) => (
                <div
                  className="my-5 text-center flex flex-col items-center"
                  key={index * Math.random() * 100}
                >
                  <p>{item.type}</p>
                  {Array.isArray(item.data) ? (
                    item.data.map((val, idx) => <p key={idx}>{val}</p>)
                  ) : (
                    <p>{item.data}</p>
                  )}
                  {index == 1 && <img src={HexagonSvg} />}
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
