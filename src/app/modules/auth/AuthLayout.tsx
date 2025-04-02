import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
// import logo from "/mf-logo.png";
import logo from "/azəriqaz1.png";
// import { helpers } from "chart.js";

import "./AuthLayout.scss";

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
      {/* begin::Body */}
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        {/* begin::Form */}
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          {/* begin::Wrapper */}
          <div className="w-lg-500px p-10">
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
        <div className="d-flex flex-center flex-wrap px-5">
          {/* begin::Links */}

          {/* end::Links */}
        </div>
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
        style={{
          backgroundImage: `url("${toAbsoluteUrl("media/misc/auth-bg.png")}")`,
        }}
      >
        {/* begin::Content */}
        <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100 ">
          {/* begin::Logo */}
          <div className="d-flex  align-items-center">
            <Link to="/" className="">
              <img
                alt="Logo"
                src={logo}
                // className="logoImg"
                className="h-75px"
                // style={{ height: "250px", width: "250px" }}
              />
            </Link>
            {/* <h1 className="loginTitle">MF - Azeriqaz</h1> */}
          </div>
          {/* end::Logo */}

          {/* end::Title */}

          {/* begin::Text */}
          <div className="text-white fs-base text-center d-none d-md-block pt-12">
            <p>©2025 FavorIt Solutions LLC . Bütün hüquqlar qorunur</p>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  );
};

export { AuthLayout };
