import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

import Title from "../components/UI/Title.tsx";

import type { RootState } from "../store/store.ts";

const AdminPage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  if (!auth.token && auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Title>Admin Panel</Title>
      <div>
        <h2>Projekty</h2>
        <div>
          <button
            onClick={() => navigate("/projects/add")}
            className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded-lg coursor-pointer"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
