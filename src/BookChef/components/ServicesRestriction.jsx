import { useState } from "react";
import Container from "./Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import FormNavigate from "./FormNavigate";

function ServicesRestriction() {
  const [foodRestrictionOpt, setFoodRestrictionOpt] = useState([
    {
      id: 1,
      setActiv: false,
      text: "None",
    },
    {
      id: 2,
      setActiv: false,
      text: "Yes",
    },
  ]);
  const servicesrestrictiondata = {
    title: "Any food restrictions?",
    text: "If you need to check it with your guests, no problem. You can inform your chef later.",
    subText: "Not sure? You can change it later! 😉",
  };

  function handleRestrictionOptClick(id) {
    setFoodRestrictionOpt((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, setActiv: true } : { ...opt, setActiv: false }
      )
    );
  }

  function getRestrictionOptVal() {
    return foodRestrictionOpt.find((opt) => opt.setActiv === true);
  }

  return (
    <Container>
      <div className="my-10 space-y-3">
        <p className="text-2xl font-bold text-center">
          {servicesrestrictiondata.title}
        </p>
        <p className="text-center">{servicesrestrictiondata.text}</p>
      </div>
      <div className="flex space-x-5 justify-center">
        {foodRestrictionOpt.map((opt) => (
          <div
            onClick={() => handleRestrictionOptClick(opt.id)}
            className="rounded border cursor-pointer items-center p-2 flex justify-between w-36"
            key={opt.id}
          >
            <span>
              {opt.setActiv ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
            </span>
            <span>
              <p>{opt.text}</p>
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/budget"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo={
            getRestrictionOptVal()?.text === "None"
              ? "/summary"
              : "/select/restriction"
          }
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
    </Container>
  );
}

export default ServicesRestriction;
