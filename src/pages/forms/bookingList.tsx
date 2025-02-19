import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useNavigate } from "react-router-dom";
import { fetchBooking, deleteBookingItem } from "../../services/booking";
import { Pencil, Trash } from "../../assets/assetsSvg";
import Loader from "../../components/loader";
import { REGISTRATION_ROUTE } from "../../_main/routeConstant";

const BookingList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Booking.data);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchBooking());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const handleEdit = (item: any) => {
    console.log("Edit", item);
    navigate(REGISTRATION_ROUTE, { state: { item } });
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteBookingItem(id));
    }
  };

  const handleCreate = () => {
    navigate(REGISTRATION_ROUTE);
  };

  // const filteredData = data.filter((item: any) =>
  //   item.TokenNumber.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/3484.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
      }}
    >
      <div className="container w-100">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search by Token No"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: "30%", marginRight: "10px" }}
          />
          <button
            className="btn text-white"
            style={{
              backgroundColor: "#007bff",
              borderRadius: "5px",
              borderBlockColor: "#007bff",
              width: "20%",
            }}
            onClick={handleCreate}
          >
            Create New
          </button>
        </div>

        <div className="table-responsive">
          {loading ? (
            <Loader />
          ) : (
            <table className="table table-striped table-bordered align-middle text-center bg-white ">
              <thead style={{ backgroundColor: "#f2f2f2" }}>
                <tr>
                  <th style={{ width: "5%" }}>SL No</th>
                  <th>Token No</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Register Person</th>
                  <th>Number</th>
                  <th>Iyer Name</th>
                  <th>Mandabam No</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.token_num}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.type}</td>
                    <td>{item.gurdian_name}</td>
                    <td>{item.phone}</td>
                    <td>{item.iyer_name}</td>
                    <td>{item.mandabam_num}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(item)}
                        className="btn btn-sm btn-primary me-2"
                      >
                        <Pencil />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm btn-danger"
                      >
                        <Trash />
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

export default BookingList;
