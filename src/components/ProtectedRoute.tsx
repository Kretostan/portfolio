import * as React from "react";
import {Navigate} from "react-router";
import {useSelector} from "react-redux";

import type {RootState} from "../store/store.ts";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.isLoggedIn && auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
