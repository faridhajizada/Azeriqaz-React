import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface PageTitleProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
}

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumb }) => {
  return (
    <div className="row">
      <div className="card-header border-0">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-1 mb-1 text-gray-900">
            {title}
          </span>

          <span className="text-muted mt-1 fw-semibold fs-7 text-gray-800">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {index > 0 && " - "}
                {index < breadcrumb.length - 1 ? (
                  <Link
                    to={item.path}
                    className="text-gray-600 text-hover-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 fw-bold">{item.label}</span>
                )}
              </span>
            ))}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default PageTitle;
