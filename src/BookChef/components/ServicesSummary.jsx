import { useState } from "react";
import Container from "./Container";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import FormNavigate from "./FormNavigate";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "../../store";

function ServicesSummary() {
  const { userInputData, addUserInputData } = useStore();

  const [summaryData, setSummaryData] = useState({
    name: "",
    email: "",
    phno: "",
    how_you_hear_us: "",
  });

  const servicesummaryData = {
    title: "That's it",
    text: "Now, just add your contact info, and we’ll send you personalized menu proposals for free in less than 20 minutes.",
  };

  function handlesummaryData(e, field) {
    setSummaryData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  }
  console.log(userInputData);
  function onNextBtnClick() {
    if (
      summaryData.name &&
      summaryData.email &&
      summaryData.phno &&
      summaryData.how_you_hear_us
    ) {
      if (!userInputData.find((item) => item.id === "service-summary")) {
        addUserInputData({
          id: "service-summary",
          data: { ...summaryData },
        });
      }
      setSummaryData(() => ({
        name: "",
        email: "",
        phno: "",
        how_you_hear_us: "",
      }));
      toast("Successfully submitted!");
      return true;
    } else {
      toast("Fill all the required fields!");
      return false;
    }
  }

  return (
    <Container>
      <div className="my-5">
        <p className="font-bold text-2xl mx-4 my-2">
          {servicesummaryData.title}
        </p>
        <p className="mx-4">{servicesummaryData.text}</p>
      </div>

      <div className="space-y-5 mx-4">
        <div>
          <p>Name</p>
          <input
            onChange={(e) => handlesummaryData(e, "name")}
            className="border p-2 w-full"
            value={summaryData.name}
            placeholder="John Doe"
          />
        </div>

        <div>
          <p>Email</p>
          <input
            onChange={(e) => handlesummaryData(e, "email")}
            className="border p-2 w-full"
            value={summaryData.email}
            placeholder="email@example.com"
          />
        </div>

        <div>
          <p>Phone</p>
          <PhoneInput
            defaultCountry="in"
            value={summaryData.phno}
            onChange={(value) =>
              setSummaryData((prev) => ({ ...prev, phno: value }))
            }
            className="w-full [&_.react-international-phone-input]:bg-transparent [&_.react-international-phone-input]:w-full [&_.react-international-phone-input]:border [&_.react-international-phone-input]:p-2"
          />
        </div>

        <div>
          <p>How did you hear about us?</p>
          <select
            className="w-full SelectOption border p-2"
            value={summaryData.how_you_hear_us}
            onChange={(e) =>
              setSummaryData((prev) => ({
                ...prev,
                how_you_hear_us: e.target.value,
              }))
            }
          >
            <option value="">Select an option</option>
            <option value="Someone Recommended">Someone Recommended</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Bing">Bing</option>
            <option value="Instagram">Instagram</option>
            <option value="I was at a dinner party">
              I was at a dinner party
            </option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-7 space-x-5">
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
          handleBtnClick={onNextBtnClick}
          navigationDisabled={false}
        >
          Submit
        </FormNavigate>
      </div>

      <ToastContainer />
    </Container>
  );
}

export default ServicesSummary;
