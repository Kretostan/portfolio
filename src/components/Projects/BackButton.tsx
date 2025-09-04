import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/projects")}
      className="cursor-pointer px-3 py-1 border-1 rounded"
    >
      Go Back
    </button>
  );
};

export default BackButton;
