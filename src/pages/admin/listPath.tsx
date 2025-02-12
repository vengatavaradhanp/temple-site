import React from "react";
import {Pencil} from "../../assets/assetsSvg";
import {Trash} from "../../assets/assetsSvg";


const ListPage: React.FC = () => {
  const data = [{ id: 1, category: "Sample Category", title: "Sample Title" }];

  return (
    <div
      className="container mt-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
    >
      <h2 className="text-center mb-4">Temple Activities</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle text-center">
          <thead className="table-dark" style={{ backgroundColor: "#44233b" }}>
            <tr>
              <th style={{ width: "5%" }}>SL</th>
              <th>Category</th>
              <th>Title</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>
                  <button
                    onClick={() => console.log("Edit")}
                    className="btn border btn-sm me-2"
                  >
                    <Pencil />
                  </button>
                  <button
                    onClick={() => console.log("Deleted")}
                    className="btn border btn-sm"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPage;
