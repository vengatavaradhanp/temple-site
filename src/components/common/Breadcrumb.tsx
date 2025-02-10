import moment from "moment";
import React from "react";

const BreadcrumbComponent = (props) => {
  return (
    <div className="mt-4">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" style={{ margin: "0px" }}>
              {props?.page}
            </a>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            {" "}
            {props?.sub}
          </li>
          <li className="breadcrumb-item " aria-current="page">
            {" "}
            {props?.child}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbComponent;
