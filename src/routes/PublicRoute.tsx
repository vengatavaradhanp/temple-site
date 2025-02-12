import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the context
import Tittle from "../layout/tittle/tittle";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

const PublicRoute = () => {
  return (
    <>
      <Tittle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;
