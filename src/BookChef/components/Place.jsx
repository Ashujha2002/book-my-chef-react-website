import Container from "./Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useState } from "react";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../store";
import { toast, ToastContainer } from "react-toastify";

function Place() {
  const { addUserInputData, userInputData } = useStore();
  const [OptionPlace, setOptionPlace] = useState([
    {
      id: 1,
      title: "Garden",
      setActiv: false,
    },
    {
      id: 2,
      title: "Banquet",
      setActiv: false,
    },
    {
      id: 3,
      title: "Farm House",
      setActiv: false,
    },
    {
      id: 4,
      title: "Beach",
      setActiv: false,
    },
    {
      id: 5,
      title: "Resort",
      setActiv: false,
    },
    {
      id: 6,
      title: "Terrace",
      setActiv: false,
    },
    {
      id: 7,
      title: "Other",
      setActiv: false,
    },
  ]);

  const placedata = {
    title: "Select a place for the chef to cook",
  };

  function handleOptionClick(id) {
    setOptionPlace((prev) =>
      prev.map((place) => {
        if (place.id !== id)
          return {
            ...place,
            setActiv: false,
          };

        return {
          ...place,
          setActiv: true,
        };
      })
    );
  }

  function handlePlaceClick() {
    const userPlaceInput = OptionPlace.find((place) => place.setActiv);
    if (userPlaceInput) {
      addUserInputData({ id: "place", text: userPlaceInput?.title });
      return true;
    } else {
      toast("Select a Place!");
      return false;
    }
    console.log(userInputData);
  }

  return (
    <Container>
      <div>
        <p className="text-center font-bold text-xl my-5">{placedata.title}</p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-4 space-y-2 w-2/5 mx-auto">
        {OptionPlace?.map((item) => (
          <div
            className="flex cursor-pointer items-center m-2 space-x-2"
            onClick={() => handleOptionClick(item.id)}
            key={item.id}
          >
            {item.setActiv ? (
              <IoMdRadioButtonOn className="text-xl text-orange-500" />
            ) : (
              <IoMdRadioButtonOff className="text-xl text-orange-500" />
            )}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/location"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/date"
          handleBtnClick={handlePlaceClick}
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default Place;
