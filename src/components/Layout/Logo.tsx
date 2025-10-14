import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center px-3 py-3 sm:py-4 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/kretostan-logo.png" alt="Kretostan logo" width={170} draggable={false} />
    </button>
  );
};

export default Logo;
