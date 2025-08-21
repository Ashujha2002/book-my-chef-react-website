import { useNavigate } from "react-router-dom";

function FormNavigate({
  navigateTo,
  handleBtnClick,
  navigationDisabled,
  children,
  bgColor,
  hoverColor,
}) {
  const navigate = useNavigate();

  function handleNavigationClick() {
    const canNavigate = handleBtnClick ? handleBtnClick() : true;
    if (canNavigate && navigateTo?.length > 0) {
      navigate(navigateTo);
    }
  }
  return (
    <button
      disabled={navigationDisabled}
      className={`${bgColor} ${navigationDisabled?'cursor-not-allowed':'cursor-pointer'} ${hoverColor} w-40 rounded-md px-4 py-2`}
      onClick={handleNavigationClick}
    >
      {children}
    </button>
  );
}

export default FormNavigate;
