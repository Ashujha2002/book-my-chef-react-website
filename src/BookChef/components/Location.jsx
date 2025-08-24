import { useEffect, useState } from "react";
import { BiNavigation } from "react-icons/bi";
import Container from "./Container";
import FormNavigate from "./FormNavigate";
import { useStore } from "../../useStore.js";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Location() {
  const { addUserInputData, userInputData } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState({
    lat: null,
    long: null,
    addr: "",
  });

  const locationSelectData = {
    title: "Where is the event ?",
    text: "Please ensure the accurate location is shared by you.",
  };

  // Restore previously selected location from store
  useEffect(() => {
    const savedLocation = userInputData.find((item) => item.id === "location");
    if (savedLocation) {
      setUserLocation((prev) => ({ ...prev, addr: savedLocation.data }));
    }
  }, [userInputData]);

  function getUserLocation(e) {
    setUserLocation((prev) => ({
      ...prev,
      addr: e.target.value,
    }));
  }

  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${userLocation.lat}&lon=${userLocation.long}`;

  useEffect(() => {
    async function fetchData() {
      if (userLocation.lat !== null && userLocation.long !== null) {
        try {
          setIsLoading(true);
          const response = await fetch(url);
          const data = await response.json();

          setUserLocation((prev) => {
            const updated = { ...prev, addr: data.display_name || prev.addr };
            // Save fetched location immediately to store
            addUserInputData({ id: "location", data: updated.addr });
            return updated;
          });
        } catch (err) {
          console.error("Error fetching location:", err);
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchData();
  }, [userLocation.lat, userLocation.long, url]);

  function getUserCurrentLocation() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation((prev) => ({
          ...prev,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }));
      },
      () => {
        console.log("Some Issue occurred while fetching the location");
        setIsLoading(false);
      }
    );
  }

  function onNextBtnClick() {
    if (userLocation.addr.length > 3) {
      addUserInputData({
        id: "location",
        data: userLocation.addr,
      });
      return true;
    } else {
      if (userLocation.addr.length >= 1 && userLocation.addr.length < 3)
        toast("Enter Valid Location Address");
      else toast("Location Invalid!");
      return false;
    }
  }

  return (
    <Container>
      <div className="text-center my-5">
        <p className="text-xl font-bold">{locationSelectData.title}</p>
        <p>{locationSelectData.text}</p>
      </div>

      <div className="flex justify-center my-10">
        <input
          onChange={getUserLocation}
          className="p-2 border w-1/2"
          type="text"
          placeholder="Enter the location"
          value={userLocation.addr}
        />
      </div>

      <div className="space-y-5">
        <button
          onClick={getUserCurrentLocation}
          className="w-4/5 md:w-1/3 flex mx-auto p-3 rounded-md bg-blue-600 hover:bg-blue-500 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex mx-auto items-center loading loading-spinner loading-md"></span>
          ) : (
            <span className="flex items-center mx-auto space-x-2">
              <BiNavigation />
              <p>Use My Current Location</p>
            </span>
          )}
        </button>
      </div>

      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/occasion"
        >
          Previous
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/date"
          handleBtnClick={onNextBtnClick}
          navigationDisabled={false}
        >
          Next
        </FormNavigate>
      </div>
      <p className="my-3 text-xl text-center">or</p>
      <Link to="/place">
        <p className="md:w-2/5 text-center mx-auto hover:underline">
          Do you want us to find a location for your event!
        </p>
      </Link>
      <ToastContainer />
    </Container>
  );
}

export default Location;
