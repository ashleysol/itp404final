import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  return (
    <div className="container my-3">
      <div className="row">
        <Navigation />
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
}
