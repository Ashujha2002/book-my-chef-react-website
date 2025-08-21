import Container from "./Container";
import { useState, useEffect } from "react";
import { useStore } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import FormNavigate from "./FormNavigate";

function Occasion() {
  const { addUserInputData, userInputData } = useStore();
  const [ServiceType, setServiceType] = useState("");
  const [OccasionState, setOccasionState] = useState([
    {
      service_type: "Single Services",
      options: [
        { id: 1, text: "Family Reunion", isActiv: false },
        { id: 2, text: "Birthday", isActiv: false },
        { id: 3, text: "Gathering", isActiv: false },
        { id: 4, text: "Bachelor/Bachelorette", isActiv: false },
        { id: 5, text: "Romantic Night", isActiv: false },
        { id: 6, text: "Corporate", isActiv: false },
        { id: 7, text: "Foodie Adventure", isActiv: false },
        { id: 8, text: "Others", isActiv: false },
      ],
    },
    {
      service_type: "Multiple Services",
      options: [
        { id: 1, text: "Family Reunion", isActiv: false },
        { id: 2, text: "Birthday", isActiv: false },
        { id: 3, text: "Wedding", isActiv: false },
        { id: 4, text: "Corporate", isActiv: false },
        { id: 5, text: "Gathering", isActiv: false },
        { id: 6, text: "Others", isActiv: false },
      ],
    },
  ]);

  const ocassionSelectData = {
    title: "What's the occasion ?",
    text: "Define your event clearly so that we can set the perfect tone and vibe for the event!",
  };

  useEffect(() => {
    if (userInputData[0]?.id === "service-select") {
      setServiceType(userInputData[0].text);
    }
  }, []);

  function handleOccasionClick(id, occasionIndex) {
    setOccasionState((prev) =>
      prev.map((service, sIndex) => {
        if (sIndex !== occasionIndex) return service;

        return {
          ...service,
          options: service.options.map((opt) =>
            opt.id === id
              ? { ...opt, isActiv: true }
              : { ...opt, isActiv: false }
          ),
        };
      })
    );
  }

  function handleOccasionBtnClick() {
    if (ServiceType === "Single Services") {
      const userSelectedData = OccasionState[0].options.find(
        (occasion) => occasion.isActiv === true
      );
      if (userSelectedData) {
        addUserInputData({ id: "occasion", text: userSelectedData?.text });
        return true;
      } else {
        toast("Select an occasion!");
        return false;
      }
    } else {
      const userSelectedData = OccasionState[1].options.find(
        (occasion) => occasion.isActiv === true
      );
      if (userSelectedData) {
        addUserInputData({ id: "occasion", text: userSelectedData?.text });
        return true;
      } else {
        toast("Select an occasion!");
        return false;
      }
    }
  }

  return (
    <Container>
      <div className="my-5 space-y-2">
        <p className="font-bold text-center text-2xl">
          {ocassionSelectData.title}
        </p>
        <p className="text-center">{ocassionSelectData.text}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Single Service */}
        {ServiceType === OccasionState[0].service_type &&
          OccasionState[0].options.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOccasionClick(item.id, 0)}
              className={`flex justify-between border rounded-md p-2 cursor-pointer ${
                item.isActiv ? "bg-orange-500 text-white" : "border-white"
              }`}
            >
              <p>{item.text}</p>
              <input
                className="accent-black"
                type="radio"
                name="occasion"
                readOnly
                checked={item.isActiv}
              />
            </div>
          ))}

        {/* Multiple Service */}
        {ServiceType === OccasionState[1].service_type &&
          OccasionState[1].options.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOccasionClick(item.id, 1)}
              className={`flex justify-between border rounded-md p-2 cursor-pointer ${
                item.isActiv ? "bg-orange-500 text-white" : "border-white"
              }`}
            >
              <p>{item.text}</p>
              <input
                className="accent-black"
                type="radio"
                name="occasion"
                readOnly
                checked={item.isActiv}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/book-chef"
          navigationDisabled={false}
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/location"
          handleBtnClick={handleOccasionBtnClick}
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default Occasion;
