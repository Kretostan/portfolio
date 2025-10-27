import { Outlet } from "react-router";
import {lazy} from "react";
import Navigation from "../components/Layout/Navigation/Navigation.tsx";
import AnimatedBackground from "../components/UI/AnimatedBackground.tsx";
const Footer = lazy(() => import("../components/Layout/Footer/Footer.tsx"));

const RootLayout = () => {
  return <>
    <AnimatedBackground />
    <Navigation />
    <Outlet />
    <Footer />
  </>;
};

export default RootLayout;
