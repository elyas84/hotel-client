import React from "react";
import "./App.css";
import { IoIosArrowUp } from "react-icons/io";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// pages

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
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
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
