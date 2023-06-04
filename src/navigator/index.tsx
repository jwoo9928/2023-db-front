import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToMain = () => {
    navigate("/");
  };

  return {
    moveToLogin,
    moveToMain,
  };
};

export default Navigator;
