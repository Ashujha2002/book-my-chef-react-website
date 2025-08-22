import { useState } from "react";
import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../store";
import { ToastContainer, toast } from "react-toastify";

function ServicesSelect() {
  const { addUserInputData } = useStore();
  const [cardActiv, setCardActiv] = useState([
    { id: "service-opt-1", state: false },
    { id: "service-opt-2", state: false },
  ]);
  const serviceSelectData = {
    title: "Please specify the type of service you need",
    text: "Define your event to see availability of chefs, menus and prices accordingly. This will take less than 2 minutes to complete!",
    options: [
      {
        id: "service-opt-1",
        title: "Single Services",
        text: "A single experience to always remember",
      },
      {
        id: "service-opt-2",
        title: "Multiple Services",
        text: "Ideal for holidays, Multiple gathering and meals",
      },
    ],
  };

  function handleOptionClicked(cardId) {
    setCardActiv((prevState) =>
      prevState.map((prevStateItem) =>
        prevStateItem.id === cardId
          ? { ...prevStateItem, state: true }
          : { ...prevStateItem, state: false }
      )
    );
  }

  function isActive(id) {
    return cardActiv.find((item) => item.id === id)?.state;
  }

  function handleCheckUserInput() {
    if (cardActiv[0].state === false && cardActiv[1].state === false) {
      toast("Select a service!");
      return false;
    } else {
      cardActiv.forEach(
        (item) =>
          item.state &&
          addUserInputData({
            id: "service-select",
            data:
              item.id === "service-opt-1"
                ? "Single Services"
                : "Multiple Services",
          })
      );
      return true;
    }
  }

  return (
    <Container>
      <div className="text-center my-5">
        <p className="text-2xl font-semibold">{serviceSelectData.title}</p>
        <p className="my-2">{serviceSelectData.text}</p>
      </div>
      <div className="flex-col my-5 flex space-x-0 justify-center items-center space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
        {serviceSelectData.options.map((item) => (
          <div
            onClick={() => handleOptionClicked(item.id)}
            className={`w-9/10 md:w-6/10 cursor-pointer p-4 rounded-md ${
              isActive(item.id)
                ? "bg-orange-500 text-black"
                : "border border-white"
            }`}
            key={item.id}
          >
            <div className="flex space-y-4 justify-between">
              <p className="text-xl font-bold">{item.title}</p>
              <input
                className="accent-black"
                name="service"
                type="radio"
                readOnly
                checked={isActive(item.id)}
              />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-5">
        <FormNavigate
          bgColor="hover:bg-red-600"
          hoverColor="bg-red-500"
          navigationDisabled={true}
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="hover:bg-green-600"
          hoverColor="bg-green-500"
          navigateTo="/occasion"
          handleBtnClick={handleCheckUserInput}
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default ServicesSelect;
