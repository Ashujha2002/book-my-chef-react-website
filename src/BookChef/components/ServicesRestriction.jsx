import { useState, useEffect } from "react";
import Container from "./Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../useStore";

function ServicesRestriction() {
  const { addUserInputData, userInputData } = useStore();

  const [foodRestrictionOpt, setFoodRestrictionOpt] = useState([
    { id: 1, setActiv: false, text: "None" },
    { id: 2, setActiv: false, text: "Yes" },
  ]);

  const servicesrestrictiondata = {
    title: "Any food restrictions?",
    text: "If you need to check it with your guests, no problem. You can inform your chef later.",
    subText: "Not sure? You can change it later! 😉",
  };

  // Restore previous selection
  useEffect(() => {
    const prevData = userInputData.find(
      (item) => item.id === "service-restriction"
    );
    if (prevData) {
      setFoodRestrictionOpt((prev) =>
        prev.map((opt) =>
          opt.text === prevData.data.text
            ? { ...opt, setActiv: true }
            : { ...opt, setActiv: false }
        )
      );
    }
  }, [userInputData]);

  function handleRestrictionOptClick(id) {
    const selectedOption = foodRestrictionOpt.find((opt) => opt.id === id);
    setFoodRestrictionOpt((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, setActiv: true } : { ...opt, setActiv: false }
      )
    );
    addUserInputData({ id: "service-restriction", data: selectedOption });
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
        <p className="text-center text-gray-500">
          {servicesrestrictiondata.subText}
        </p>
      </div>

      <div className="flex space-x-5 justify-center">
        {foodRestrictionOpt.map((opt) => (
          <div
            key={opt.id}
            onClick={() => handleRestrictionOptClick(opt.id)}
            className={`rounded border cursor-pointer items-center p-2 flex justify-between w-36 transition-colors duration-200 ${
              opt.setActiv
                ? "bg-[#FC7000] text-white border-[#FC7000]"
                : "bg-transparent text-white border-white"
            }`}
          >
            <span>
              {opt.setActiv ? (
                <IoMdRadioButtonOn className="text-white" />
              ) : (
                <IoMdRadioButtonOff className="text-white" />
              )}
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
