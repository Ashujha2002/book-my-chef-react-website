import styles from "../styles/aboutUs.module.css";

function SecondSection(){
    const arr = [
        {
            num: 150,
            str: 'Daily Order'
        },
        {
            num: 150,
            str: 'Daily Order'
        },
        {
            num: 150,
            str: 'Daily Order'
        },
        {
            num: 150,
            str: 'Daily Order'
        },
    ]
    return(
        <div className={`${styles.secondSectionContainer} py-20 flex justify-around px-5`}>
            {arr.map((val,index)=><div className="text-center" key={index}>
                <p className="text-3xl">{val.num}+</p>
                <p className="text-orange-500 text-3xl">{val.str}</p>
            </div>)}
        </div>
    );
}

export default SecondSection;