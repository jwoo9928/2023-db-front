import { useNavigate } from "react-router-dom";

const useNavigator = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToMain = () => {
    navigate("/");
  };

  const moveToReserve = (params: any) => {
    navigate("/reserve", { state: params });
  };

  return {
    moveToLogin,
    moveToMain,
    moveToReserve,
  };
};

export default useNavigator;
