import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../store";
import { useState, useEffect } from "react";

function ServicesSchedule() {
  const { userInputData } = useStore();
  const [userSchedule, setUserSchedule] = useState({
    date: [],
    breakfast: true,
    lunch: true,
    dinner: true,
    eveningSnacks: true,
    addtionalNote: "",
  });

  const serviceScheduledata = {
    title: "We want to schedule my services for...",
    hintText:
      "Uncheck the meals you don't need. Swipe down the calendar to see all the dates. 😉",
  };

  function formatDate(date) {
    if (!date) return "";
    return Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }

  useEffect(() => {
    const startDate = userInputData.find((item) => item.id === "date-select")
      ?.data.startDate;
    const endDate = userInputData.find((item) => item.id === "date-select")
      ?.data.endDate;

    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const datesArray = [];

    let current = new Date(start);
    while (current <= end) {
      datesArray.push(formatDate(current));
      current.setDate(current.getDate() + 1);
    }

    setUserSchedule((prev) => ({
      ...prev,
      date: datesArray,
    }));
  }, [userInputData]);

  return (
    <Container>
      <div>
        <p className="text-xl font-bold text-center">
          {serviceScheduledata.title}
        </p>
      </div>

      <div className="overflow-x-auto my-5">
        <table className="w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="p-2 border">DATE</th>
              <th className="p-2 border">BREAKFAST</th>
              <th className="p-2 border">LUNCH</th>
              <th className="p-2 border">DINNER</th>
              <th className="p-2 border">EVENING SNACKS</th>
              <th className="p-2 border">ADDITIONAL INPUT</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over all generated dates */}
            {userSchedule.date.map((dateItem, index) => (
              <tr key={index}>
                <td className="p-2 border">{dateItem}</td>
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-6 h-6 accent-orange-500 cursor-pointer"
                  />
                </td>

                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="Add notes..."
                    className="border rounded p-1 w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 my-2 bg-orange-300 text-black w-4/5 font-semibold text-center mx-auto">
        {serviceScheduledata.hintText}
      </div>

      <div className="flex justify-center mt-7 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/date"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/people"
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
    </Container>
  );
}

export default ServicesSchedule;
