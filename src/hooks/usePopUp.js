import { useState } from "react";

const usePopUp = () => {
  const [popUp, setPopUp] = useState(false);

  const openPopUp = (e, popUpType) => {
    e.preventDefault()
    setPopUp(popUpType);
  }

  const closePopUp = () => {
    setPopUp(false);
  }

  return { popUp, openPopUp, closePopUp };
}

export default usePopUp;