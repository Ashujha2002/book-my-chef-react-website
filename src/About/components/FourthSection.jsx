import decor from "../../assets/preview2.png";
import IconImg1 from "../../assets/s-icon-1 1.png";
import IconImg2 from "../../assets/s-icon-2 1.png";
import IconImg3 from "../../assets/s-icon-3 2.png";
import IconImg4 from "../../assets/s-icon-4 1.png";
import GridMidDecorImg1 from "../../assets/pattern-8 1.png";
import GridMidDecorImg2 from "../../assets/service-image 1.png";
import styles from "../styles/aboutUs.module.css";

const FourthSection = () => {
    const sectionTitle = "Our services";
    const sectionHeading = "Exquisite Restaurant in City";
    const dataArr = [
        {
            id: 1,
            iconImg: IconImg1,
            title: 'Outdoor Catering',
            text: 'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.'
        },
        {
            id: 2,
            iconImg: IconImg2,
            title: 'Outdoor Catering',
            text: 'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.'
        },
        {
            id: 3,
            iconImg: IconImg3,
            title: 'Outdoor Catering',
            text: 'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.'
        },
        {
            id: 4,
            iconImg: IconImg4,
            title: 'Outdoor Catering',
            text: 'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.'
        }
    ];
    return(
        <div className="flex flex-col pt-15 items-center">
            <p className="titleFont text-lg text-orange-500">{sectionTitle}</p>
            <img src={decor}/>
            <p className="titleFont text-3xl my-5">{sectionHeading}</p>
            <div className="grid my-10 px-20 grid-col-3 gap-y-24">
                <div className={`${styles.gridItemcontainer} row-start-1 col-start-2 row-span-4`}>
                    <div className={styles.gridSubcontainer1}>
                        <img src={GridMidDecorImg1}/>
                    </div>
                    <div className={styles.gridSubcontainer2}>
                        <img src={GridMidDecorImg2}/>
                    </div>
                </div>        
                {dataArr.map((item,index)=>(
                    <div className={`col-start-${(index+1)%2===0?3:1} row-start-${(index+1)<=2?2:4} flex ${(index+1)%2 !== 0?'flex-row-reverse':''} space-x-4`}>
                        <div className="bg-black w-25 h-25 flex items-center self-center rounded-full p-3">
                            <img src={item.iconImg}/>
                        </div>
                        <div>
                            <p className={`text-lg font-bold md:text-2xl my-2`}>{item.title}</p>
                            <p className={`md:w-96`}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FourthSection;