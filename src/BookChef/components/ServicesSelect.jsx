import { useState, useEffect } from "react";
import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../useStore.js";
import { ToastContainer, toast } from "react-toastify";

function ServicesSelect() {
  const { addUserInputData, userInputData, clearUserInputData } = useStore();

  // Reset session data at the start of booking
  useEffect(() => {
    clearUserInputData();
  }, []);

  const [cardActiv, setCardActiv] = useState([
    { id: "service-opt-1", state: false },
    { id: "service-opt-2", state: false },
  ]);

  // Restore selection from store if exists
  useEffect(() => {
    const serviceData = userInputData.find(
      (item) => item.id === "service-select"
    );
    if (serviceData) {
      setCardActiv((prev) =>
        prev.map((card) => ({
          ...card,
          state:
            serviceData.data === "Single Services" &&
            card.id === "service-opt-1"
              ? true
              : serviceData.data === "Multiple Services" &&
                card.id === "service-opt-2"
              ? true
              : false,
        }))
      );
    }
  }, [userInputData]);

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
    setCardActiv((prev) =>
      prev.map((card) =>
        card.id === cardId
          ? { ...card, state: true }
          : { ...card, state: false }
      )
    );
  }

  function isActive(id) {
    return cardActiv.find((item) => item.id === id)?.state;
  }

  function handleCheckUserInput() {
    const selectedCard = cardActiv.find((card) => card.state);
    if (!selectedCard) {
      toast("Select a service!");
      return false;
    }
    addUserInputData({
      id: "service-select",
      data:
        selectedCard.id === "service-opt-1"
          ? "Single Services"
          : "Multiple Services",
    });
    return true;
  }

  return (
    <Container>
      <div className="text-center my-5">
        <p className="text-2xl font-semibold">{serviceSelectData.title}</p>
        <p className="my-2">{serviceSelectData.text}</p>
      </div>

      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center">
        {serviceSelectData.options.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOptionClicked(item.id)}
            className={`w-9/10 md:w-6/10 cursor-pointer p-4 rounded-md ${
              isActive(item.id)
                ? "bg-orange-500 text-black"
                : "border border-white"
            }`}
          >
            <div className="flex justify-between">
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

      <div className="flex justify-center space-x-5 mt-5">
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
