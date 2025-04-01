import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

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
        <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">
          {/* begin::Logo */}
          <Link to="/" className="mb-12">
            <img
              alt="Logo"
              src={"http://azeriqaz.test/assets/media/logos/logo-white.png"}
              className="h-75px"
            />
          </Link>
          {/* end::Logo */}

          {/* end::Title */}

          {/* begin::Text */}
          <div className="text-white fs-base text-center">
            <p>©2025 Azəriqaz İB. Bütün hüquqlar qorunur</p>
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
