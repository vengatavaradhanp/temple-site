/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import React from "react";
import BreadcrumbComponent from "../common/Breadcrumb";
import { API_URL } from "../../_main/routeConstant";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryDetails } from "../../services/historyDetailsSlice";
import { MenuItems } from "../../utils/constants";

const HistoryDetailsComponent = () => {
  const { type, id } = useParams(); // Get dynamic ID from URL
  const [historyData, setHistoryData] = React.useState(null); // State to store API response
  const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  // const apiUrl = `API_URL/history/history/script/${id}`;
  const dispatch: AppDispatch = useDispatch();
  const historyDetails = useSelector((state: any) => state.historyDetails.data);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) throw new Error("Failed to fetch data");
  //       const data = await response.json();
  //       setHistoryData(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const path = `/${type}/${id}`;
      await dispatch(getHistoryDetails(path));
      setLoading(false);
    };

    fetchEvents();
  }, [dispatch]);

  console.log("###", type );

  return (
    <div className="homebannerImages" style={{ marginTop: "30px" }} key={id}>
        <BreadcrumbComponent
          page="தல வரலாறு"
          sub="கல்வெட்டுகள்"
          child="விவரம்"
        />
      {/* IMAGE BANNER */}
      <div style={{ height: "400px" }}>
        <img
          src={historyDetails?.filepath || null}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ padding: "30px 0px" }}>
        {/* TITLE */}
        <div>
          <h3>{historyDetails.title}</h3>
        </div>
        {/* CONTENT */}
        <div style={{ marginTop: "30px", textAlign: "justify" }}>
          {historyDetails?.body}
        </div>
        <div style={{ marginTop: "30px", textAlign: "right" }}>
          <span style={{ fontWeight: 600 }}>Posted On : </span>
          {moment(historyDetails.created_at).format("DD/MM/YYYY hh:mm a")}
        </div>
      </div>
    </div>
  );
};

export default HistoryDetailsComponent;
