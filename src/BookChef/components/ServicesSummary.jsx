import { useState } from "react";
import Container from "./Container";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import FormNavigate from "./FormNavigate";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "../../useStore.js";

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

  function formatSchedule(schedule) {
    return schedule
      .map(
        (item) =>
          `${item.date} - Breakfast: ${item.breakfast ? "Yes" : "No"}, Lunch: ${
            item.lunch ? "Yes" : "No"
          }, Dinner: ${item.dinner ? "Yes" : "No"}, Evening Snacks: ${
            item.eveningSnacks ? "Yes" : "No"
          }, Notes: ${item.additionalNote || ""}`
      )
      .join("<br>");
  }

  function formatPeople(people) {
    return people.map((p) => `${p.category}: ${p.count}`).join("<br>");
  }

  function formatRestricted(restricted) {
    if (!restricted || !restricted.length) return "None";
    return restricted.map((r) => `${r.label}: ${r.value}`).join("<br>");
  }

  async function onNextBtnClick() {
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

      // Prepare HTML table
      const htmlTable = `
        <h2>New Booking Request</h2>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr style="background-color: #FC7000; color: white;">
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${userInputData
              .map((item) => {
                let value = "";
                if (item.id === "services-schedule") {
                  value = formatSchedule(item.data);
                } else if (item.id === "service-people") {
                  value = formatPeople(item.data);
                } else if (item.id === "services-restricted") {
                  value = formatRestricted(item.data);
                } else if (typeof item.data === "object") {
                  value = JSON.stringify(item.data);
                } else {
                  value = item.data;
                }
                return `<tr><td><strong>${item.id}</strong></td><td>${value}</td></tr>`;
              })
              .join("")}
          </tbody>
        </table>
        <p>Submitted: ${new Date().toLocaleString("en-GB", {
          hour12: true,
        })}</p>
      `;

      try {
        await fetch("https://formspree.io/f/mpwlveen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: summaryData.name,
            email: summaryData.email,
            _replyto: summaryData.email,
            html: htmlTable,
          }),
        });

        toast.success("Form submitted! Check your email.", {
          position: "top-right",
          autoClose: 5000,
        });

        // Reset form
        setSummaryData({
          name: "",
          email: "",
          phno: "",
          how_you_hear_us: "",
        });
      } catch (err) {
        toast.error("Error submitting form. Try again later.", {
          position: "top-right",
        });
        console.error(err);
      }

      return true;
    } else {
      toast.warning("Fill all the required fields!", {
        position: "top-right",
      });
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
