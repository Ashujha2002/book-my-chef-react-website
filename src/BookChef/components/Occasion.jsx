import Container from "./Container";
import { useState, useEffect } from "react";
import { useStore } from "../../useStore";
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
    // Get the previously selected service type
    const serviceData = userInputData.find(
      (item) => item.id === "service-select"
    );
    if (serviceData) {
      setServiceType(serviceData.data);
    }

    // Get previously selected occasion
    const occasionData = userInputData.find((item) => item.id === "occasion");
    if (occasionData) {
      setOccasionState((prev) =>
        prev.map((service) => ({
          ...service,
          options: service.options.map((opt) => ({
            ...opt,
            isActiv:
              opt.text === occasionData.data || opt.text === occasionData.text,
          })),
        }))
      );
    }
  }, [userInputData]);

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
    const selectedServiceIndex = ServiceType === "Single Services" ? 0 : 1;
    const userSelectedData = OccasionState[selectedServiceIndex].options.find(
      (opt) => opt.isActiv
    );

    if (userSelectedData) {
      addUserInputData({ id: "occasion", data: userSelectedData.text });
      return true;
    } else {
      toast("Select an occasion!");
      return false;
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
        {OccasionState.map((service, index) =>
          ServiceType === service.service_type
            ? service.options.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOccasionClick(item.id, index)}
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
              ))
            : null
        )}
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
