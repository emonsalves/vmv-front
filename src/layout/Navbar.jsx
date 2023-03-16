import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";

import Context from "../context/Context";

export default function Navbar() {
  const context = useContext(Context);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="sticky top-0 flex min-w-full items-center justify-between px-2 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink to={"/"}>
          <div className="flex items-center">
            <img
              src="/src/assets/img/vmv-logo.png"
              className="h-12 mr-3"
              alt="VMV Logo"
            />
            <span className="self-center text-lg text-white font-proxima font-semibold whitespace-nowrap">
              Vanessa Medo Vocals
            </span>
          </div>
        </NavLink>
        <div className="w-1/5 relative flex justify-between items-center xs: md:w-1/2 lg:w-auto">
          <div>
            <span></span>
          </div>
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                navbarOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                navbarOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                navbarOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center menu" +
            (navbarOpen ? " menu-open my-7" : " menu-closed my-7")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item flex">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">Inicio</span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/bio"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">Biografía</span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/clases"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">Clases</span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">Contacto</span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/faq"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">
                  Preguntas Frecuentes
                </span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/plataforma"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">
                  Plataforma Cantantes
                </span>
              </NavLink>
            </li>
            <li className="nav-item flex">
              <NavLink
                to={"/admin"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-proxima font-bold italic px-3 py-2 flex items-center text-xl"
                    : "text-gray-300 hover:text-white font-proxima font-light px-3 py-2 flex items-center text-md"
                }
                end
              >
                <span className="hover-underline-animation">
                  Administración
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
