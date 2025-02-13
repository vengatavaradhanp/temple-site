// import React from "react";
// import {Pencil} from "../../assets/assetsSvg";
// import {Trash} from "../../assets/assetsSvg";

// const ListPage: React.FC = () => {
//   const data = [{ id: 1, category: "Sample Category", title: "Sample Title" }];

//   return (
//     <div
//       className="container mt-4"
//       style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
//     >
//       <h2 className="text-center mb-4">Temple Activities</h2>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered align-middle text-center">
//           <thead className="table-dark" style={{ backgroundColor: "#44233b" }}>
//             <tr>
//               <th style={{ width: "5%" }}>SL</th>
//               <th>Category</th>
//               <th>Title</th>
//               <th style={{ width: "20%" }}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={item.id}>
//                 <td>{index + 1}</td>
//                 <td>{item.category}</td>
//                 <td>{item.title}</td>
//                 <td>
//                   <button
//                     onClick={() => console.log("Edit")}
//                     className="btn border btn-sm me-2"
//                   >
//                     <Pencil />
//                   </button>
//                   <button
//                     onClick={() => console.log("Deleted")}
//                     className="btn border btn-sm"
//                   >
//                     <Trash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ListPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useNavigate } from "react-router-dom";
import { listpathContent } from "../../services/listPath";
import { Pencil, Plus, Trash } from "../../assets/assetsSvg";
import Loader from "../../components/loader";
// import { API_URL } from "../_main/routeConstant";

const ListPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.listPath.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(listpathContent()); // Replace "your-params" with actual params if needed
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const handleEdit = (item: any) => {
    console.log("Edit", item);
    navigate(`/edit/${item.id}`, { state: { item } });
  };
  //  const handleEdit = async (item: any) => {
  //   try {
  //     const response = await axios.put(`${API_URL}/article/${item.id}`, item);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error editing item:', error);
  //     throw error;
  //   }
  // };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      console.log("Deleted", id);
      setData(data.filter((item: { id: number }) => item.id !== id));
    }
  };

  const setData = (newData: any) => {
    // Implement the logic to update the state with new data
    // This could be a Redux action or a local state update

    dispatch({ type: "listpath/setData", payload: newData });
  };

  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/3484.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className=" mt-6 p-4 mx-4 w-75"
        style={{
          position: "relative",
          top: "10%",
          left: "10%",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 px-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn"
                type="submit"
                style={{
                  outline: "rgb(68, 35, 59)",
                  backgroundColor: "rgb(68, 35, 59)",
                  color: "white",
                }}
              >
                Search
              </button>
            </form>
          </div>
          <div></div>
          <div
            className="relative text-white"
            style={{
              backgroundColor: "#44233b",
              color: "white",
              border: "1px solid black",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                color: "white",
                fontSize: "20px",
                padding: "5px",
              }}
              onClick={() => navigate("/admin")}
            >
              <div className="px-4">
                <Plus />
                <span>Create</span>
              </div>
            </button>
          </div>
        </div>
        <div className="table-responsive">
          {loading ? (
            <Loader />
          ) : (
            <table className="table table-striped table-bordered align-middle text-center">
              <thead style={{ backgroundColor: "#f2f2f2" }}>
                <tr>
                  <th style={{ width: "5%" }}>SL</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th style={{ width: "20%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </td>
                    <td className="text-left">{item.title}</td>
                    <td className="text-left">
                      <button
                        style={{ marginRight: "5%" }}
                        onClick={() => handleEdit(item)}
                        className="btn border btn-sm me-2 btn-hover"
                      >
                        <span className="text-primary">
                          <Pencil />
                        </span>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn border btn-sm btn-hover"
                      >
                        <span className="text-danger">
                          <Trash />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="d-flex justify-content-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default ListPage;
