import starImg from "../../assets/Star 16.svg";

function ReviewCard({rating, name, text, img, city}) {
  return (
    <div className='w-96 bg-black py-5 px-3'>
        <div className="flex">
            {Array.from({length: rating}).map((index)=>(
                <img key={index*Math.random()*100} src={starImg}/>
            ))}
        </div>
        <div>
            <p className="my-5">{text}</p>
        </div>
        <div className="flex space-x-4">
            <div>
                <img className="rounded-full" src={img}/>
            </div>
            <div>
                <p className="text-orange-500 titleFont text-xl">{name.toUpperCase()}</p>
                <p className="titleFont text-lg">{city}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard;