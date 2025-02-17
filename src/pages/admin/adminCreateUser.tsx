import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useNavigate } from "react-router-dom";
import { contactDetails } from "../../services/contactContent";
import { Pencil, Plus, Trash } from "../../assets/assetsSvg";
import Loader from "../../components/loader";
import { API_URL } from "../../_main/routeConstant";

const AdminCreateUser: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.contact.data);
  const [loading, setLoading] = useState(true);

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("officer");

  const DeleteArticleById = () => {
    // const dispatch: AppDispatch = useDispatch();
    const deleteArticleData = useSelector(
      (state: RootState) => state.deleteArticleId.data
    );
    console.log("deleteArticleData", deleteArticleData);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(contactDetails(selectedCategory)); // Fetch based on selected category
      console.log("contactDetails", contactDetails(selectedCategory));
      setLoading(false);
    };

    fetchData();
  }, [dispatch, selectedCategory]); // Fetch data when category changes

  useEffect(() => {
    fetch(`${API_URL}article/article_delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DeleteArticleById),
    }).then((res) => res.json());
  }, []);

  const handleEdit = (item: any) => {
    navigate(`/edit/${item.id}`, { state: { item } });
  };

  //   const handleDelete = (id: number) => {
  //     if (window.confirm("Are you sure you want to delete this item?")) {
  //       console.log("Deleted", id);
  //       setData(data.filter((item: { id: number }) => item.id !== id));
  //     }
  //   };

  const setData = (newData: any) => {
    dispatch({ type: "contact/setData", payload: newData });
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
        {loading ? (
          <Loader />
        ) : (
          <div
            className="mb-4"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Category Selection Dropdown */}
            <select
              className="form-select px-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: "200px", borderRadius: "5px" }}
            >
              <option value="officer">Officers</option>
              <option value="management">Management</option>
              <option value="group">Group</option>
            </select>

            <button
              style={{
                backgroundColor: "#44233b",
                color: "white",
                fontSize: "20px",
                padding: "5px",
                borderRadius: "5px",
              }}
              onClick={() => navigate("/createUser")}
            >
              <div className="px-4">
                <Plus />
                <span>Create User</span>
              </div>
            </button>
          </div>
        )}
        {/* Data Table */}
        <div className="table-responsive">
          {loading ? (
            <Loader />
          ) : (
            <table className="table table-striped table-bordered align-middle text-center">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="text-left">{item.title}</td>
                    <td className="text-left">{item.body}</td>
                    <td className="text-left">{item.phone}</td>
                    <td className="text-left">
                      <button
                        onClick={() => handleEdit(item)}
                        className="btn btn-sm me-2"
                      >
                        <Pencil />
                      </button>
                      <button
                        onClick={DeleteArticleById}
                        className="btn btn-sm"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;
