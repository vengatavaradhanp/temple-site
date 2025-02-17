import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useNavigate } from "react-router-dom";
import { listpathContent, deleteItem } from "../../services/listPath";
import { Pencil, Plus, Trash } from "../../assets/assetsSvg";
import Loader from "../../components/loader";

const ListPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.listPath.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(listpathContent());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const handleEdit = (item: any) => {
    console.log("Edit", item);
    navigate(`/admin, { state: { item } }`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteItem(id));
    }
  };
  
  const handleCreate = () => {
    navigate("/admin");
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
        className="mt-6 p-4 mx-4 w-75"
        style={{
          position: "relative",
          top: "10%",
          left: "10%",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                height: "40px",
              }}
            >
              Search
            </button>
          </form>
          <button
            className="btn text-white"
            style={{
              backgroundColor: "#44233b",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            onClick={handleCreate}
          >
            <Plus />
            <span>Create</span>
          </button>
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
      </div>
    </div>
  );
};

export default ListPage;
