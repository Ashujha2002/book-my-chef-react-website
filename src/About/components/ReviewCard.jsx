import starImg from "../../assets/Star 16.svg";

function ReviewCard({ rating, name, text, img, city }) {
  return (
    <div className="w-96 w-full sm:w-96 bg-black py-5 px-3 rounded-lg">
      <div className="flex">
        {Array.from({ length: rating }).map((index) => (
          <img key={index * Math.random() * 100} src={starImg} />
        ))}
      </div>
      <div>
        <p className="my-5">{text}</p>
      </div>
      <div className="flex space-x-4 items-center">
        <div>
          <img className="rounded-full w-14 h-14 object-cover" src={img} />
        </div>
        <div>
          <p className="text-orange-500 titleFont text-lg sm:text-xl">
            {name.toUpperCase()}
          </p>
          <p className="titleFont text-base sm:text-lg">{city}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
