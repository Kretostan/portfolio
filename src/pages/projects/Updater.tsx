import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {Navigate} from "react-router";

const ProjectUpdaterPage = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.token && auth.role !== "admin") {
    return <Navigate to="/" replace />
  }

  return <div>poprawki dla projektu</div>
};

export default ProjectUpdaterPage;
