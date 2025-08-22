import { useState } from "react";
import Container from "./Container";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useStore } from "../../store";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "./FormNavigate";

function ServicesPeople() {
  const { addUserInputData, userInputData } = useStore();
  const [servicePeople, setServicePeople] = useState([
    {
      category: "Adult",
      text: "Over 16 years of age",
      count: 0,
    },
    {
      category: "Teens",
      text: "12-15 years of age",
      count: 0,
    },
    {
      category: "Children",
      text: "2-11 years of age",
      count: 0,
    },
  ]);
  const servicespeopledata = {
    title: "We are...",
  };

  function handleCountBtnClick(operation, category) {
    setServicePeople((prev) =>
      prev.map((people) => {
        if (people.category !== category) return people;

        if (operation === "minus") {
          return {
            ...people,
            count: people.count > 0 ? people.count - 1 : 0,
          };
        } else {
          return {
            ...people,
            count: people.count + 1,
          };
        }
      })
    );
  }

  function onNextBtnClick() {
    if (!userInputData.find((item) => item.id === "service-people")) {
      addUserInputData({ id: "service-people", data: servicePeople });
    }
    const total = servicePeople.reduce((sum, person) => sum + person.count, 0);

    if (total > 1) {
      return true;
    } else {
      toast("Atleast 2 people must be selected!");
      return false;
    }
  }

  return (
    <Container>
      <div>
        <p className="text-2xl my-5 font-bold text-center">
          {servicespeopledata.title}
        </p>
      </div>
      <div className="space-y-5">
        {servicePeople.map((people, index) => (
          <div className="border w-1/2 mx-auto rounded-md p-2" key={index}>
            <p className="text-lg">{people.category}</p>
            <p className="text-gray-600">{people.text}</p>
            <div className="flex mt-4 justify-between">
              <span
                onClick={() => handleCountBtnClick("minus", people.category)}
                className="p-4 rounded-md cursor-pointer border"
              >
                <FaMinus />
              </span>
              <span className="text-xl">{people.count}</span>
              <span
                onClick={() => handleCountBtnClick("plus", people.category)}
                className="p-4 rounded-md cursor-pointer border"
              >
                <FaPlus />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/schedule/service"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/budget"
          handleBtnClick={onNextBtnClick}
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default ServicesPeople;
