import React from "react";
import "./App.css";
import { IoIosArrowUp } from "react-icons/io";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accommondation from "./pages/Accommondation";
import Flight from "./pages/Flight";
import RentCar from "./pages/RentCar";
import Attraction from "./pages/Attraction";

export default function App() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const Layout = () => {
    return (
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer />
        </footer>
        <div className="to-top">
          <button
            onClick={() => {
              scrollUp();
            }}
          >
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Accommondation />,
        },
        {
          path: "/flight",
          element: <Flight />,
        },
        {
          path: "/rent-car",
          element: <RentCar />,
        },
        {
          path: "/attraction",
          element: <Attraction />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
