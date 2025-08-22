import { useState } from "react";
import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "../../store";

function ServicesSelectRestriction() {
  const { addUserInputData, userInputData } = useStore();
  const [restrictionOpt, setRestricionOpt] = useState([
    { id: 1, text: "Vegetarian", checked: false },
    { id: 2, text: "Gluten", checked: false },
    { id: 3, text: "ShellFish", checked: false },
    { id: 4, text: "Dairy Products", checked: false },
    { id: 5, text: "Nuts", checked: false },
  ]);

  const servicesselectrestriction = {
    title: "Select all that apply",
    text: "With this info, our chefs will craft customized menus tailored to your needs.",
  };

  const updateRestrictionOpt = (id) => {
    setRestricionOpt((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, checked: !opt.checked } : opt
      )
    );
  };

  function onNextBtnClick() {
    const selectedData = userInputData.find(
      (item) => item.id === "services-restricted"
    );
    const dataArr = restrictionOpt.filter((data) => data.checked);

    if (!selectedData) {
      addUserInputData({ id: "services-restricted", data: dataArr });
    }

    if (dataArr.length > 0) {
      return true;
    } else {
      toast("Select at least one restriction!");
      return false;
    }
  }

  return (
    <Container>
      <div className="my-5">
        <p className="text-center font-bold text-2xl">
          {servicesselectrestriction.title}
        </p>
        <p className="text-center">{servicesselectrestriction.text}</p>
      </div>

      <div className="flex flex-wrap md:w-3/5 mx-auto">
        {restrictionOpt.map((opt) => (
          <label
            key={opt.id}
            className="border cursor-pointer p-2 rounded-md m-2 w-36 mx-auto flex justify-between items-center"
          >
            <input
              className="accent-orange-500"
              type="checkbox"
              checked={opt.checked}
              onChange={() => updateRestrictionOpt(opt.id)}
            />
            <span>{opt.text}</span>
          </label>
        ))}
      </div>

      <div className="my-5 w-1/2 mx-auto">
        <textarea
          className=" w-full h-24 border p-2"
          placeholder="One of my friend is alergic to garlic..."
        ></textarea>
      </div>

      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/restriction"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/summary"
          navigationDisabled={false}
          handleBtnClick={onNextBtnClick}
        >
          Next
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default ServicesSelectRestriction;
