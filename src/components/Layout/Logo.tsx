import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setCurrentPage, setShowMenu } from "../../store/menuSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
    dispatch(setCurrentPage("Home"));
    dispatch(setShowMenu(false));
  };

  return (
    <button
      className="flex items-center cursor-pointer"
      onClick={handleClickLogo}
    >
      <img src="/kretostan-logo.png" alt="Kretostan logo" width={170} />
    </button>
  );
};

export default Logo;
