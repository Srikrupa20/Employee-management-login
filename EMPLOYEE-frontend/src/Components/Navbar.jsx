import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  // Theme functionality start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  // Theme functionality end

  return (
    <div className="col tw-w-full tw-bg-base-300 tw-text-base-content">
      <div className=" tw-bg-base-300 tw-base-content d-flex tw-sticky tw-top-0 tw-z-50 p-2 d-flex justify-content-md-end justify-content-evenly tw-items-center gap-3 fs-4 shadow tw-w-100">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenubutton"
          toggle="dropdown"
        >
          workspace
        </button>

        <i className="bi bi-envelope-plus-fill"></i>
        <i className="bi bi-bell-fill"></i>
        <i className="bi bi-question-circle"></i>

        {/* Theme toggle icons start */}
        {theme === "light" ? (
          <svg
            onClick={() => handleThemeChange("dark")}
            className="tw-fill-current tw-w-6 tw-h-6 mt-1 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        ) : (
          <svg
            onClick={() => handleThemeChange("light")}
            className="tw-fill-current tw-w-6 tw-h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        )}
        {/* Theme toggle icons end */}

        <Link to="/dashboard/profile">
          <i className="bi bi-person-circle"></i>
        </Link>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;