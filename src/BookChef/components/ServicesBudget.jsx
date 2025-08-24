import { useState, useEffect } from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../useStore";
import { ToastContainer, toast } from "react-toastify";

function ServicesBudget() {
  const { addUserInputData, userInputData } = useStore();
  const [budgetSelect, setBudgetSelect] = useState([
    {
      title: "Casual",
      text: "Build connections around great food",
      isActiv: false,
      subText: "You will receive the quotation on your email",
    },
    {
      title: "Gourmet",
      text: "Brilliant menus to impress your guests",
      isActiv: false,
      subText: "You will receive the quotation on your email",
    },
    {
      title: "Chef's Table",
      text: "The best of the best for your event",
      isActiv: false,
      subText: "You will receive the quotation on your email",
    },
  ]);

  const servicesbudgetdata = {
    title: "What's your budget for this experience ?",
    ImpPoints: [
      "Chef’s fee for services between 22/08/2025 and 22/08/2025 for a total of 4 meals.",
      "This price does not include the cost of groceries, which should be paid directly to the chef on-site. Receipts will be presented on a daily basis.",
      "Each meal starting at ₹3,367 per person.",
    ],
  };

  // Restore previous selection from userInputData
  useEffect(() => {
    const prevBudget = userInputData.find(
      (item) => item.id === "service-budget"
    );
    if (prevBudget) {
      setBudgetSelect((prev) =>
        prev.map((budget) => ({
          ...budget,
          isActiv: budget.title === prevBudget.data.title,
        }))
      );
    }
  }, [userInputData]);

  function handleBudgetClick(title) {
    setBudgetSelect((prev) =>
      prev.map((budget) =>
        budget.title === title
          ? { ...budget, isActiv: true }
          : { ...budget, isActiv: false }
      )
    );
  }

  function onNextBtnClick() {
    const selectedBudgetPackage = budgetSelect.find((budget) => budget.isActiv);
    if (!selectedBudgetPackage) {
      toast("Select package!");
      return false;
    }

    addUserInputData({ id: "service-budget", data: selectedBudgetPackage });
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-2xl my-5 font-bold text-center">
          {servicesbudgetdata.title}
        </p>
      </div>
      <div className="space-y-5 md:flex md:space-x-5">
        {budgetSelect.map((budget, index) => (
          <div
            key={index}
            onClick={() => handleBudgetClick(budget.title)}
            className={`border w-4/5 mx-auto md:mx-2 cursor-pointer md:h-44 p-2 rounded`}
            style={{
              backgroundColor: budget.isActiv ? "#FC7000" : "transparent",
              color: budget.isActiv ? "black" : "inherit",
              borderColor: budget.isActiv ? "#FC7000" : "#E5E7EB",
            }}
          >
            <div className="flex justify-between">
              <p className="font-bold text-xl my-2">{budget.title}</p>
              {budget.isActiv ? (
                <IoMdRadioButtonOn className="text-2xl" />
              ) : (
                <IoMdRadioButtonOff className="text-2xl" />
              )}
            </div>
            <p>{budget.text}</p>
            <p className="mt-5 font-bold ">{budget.subText}</p>
          </div>
        ))}
      </div>
      <div className="my-5">
        {servicesbudgetdata?.ImpPoints?.map((item, index) => (
          <p className="my-2" key={index}>
            {Array.from({ length: index + 1 }, () => "*")} {item}
          </p>
        ))}
      </div>
      <div className="flex justify-center mt-7 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/people"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/restriction"
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

export default ServicesBudget;
