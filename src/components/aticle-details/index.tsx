/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import React, { useEffect } from "react";
import BreadcrumbComponent from "../common/Breadcrumb";
import { API_URL } from "../../_main/routeConstant";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetails } from "../../services/articleDetailsSlice";
import { MenuItems } from "../../utils/constants";

const ArticleDetailsComponent = () => {
  const { type, id } = useParams(); // Get dynamic ID from URL
  const [articleData, setArticleData] = React.useState(null); // State to store API response
  const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  // const apiUrl = `API_URL/history/history/script/${id}`;
  const dispatch: AppDispatch = useDispatch();
  const articleDetails = useSelector((state: any) => state.articleDetails.data);

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
      debugger;
      setLoading(true);
      const path = `/${type}/${id}`;
      await dispatch(getArticleDetails(path));
      setLoading(false);
    };

    fetchEvents();
  }, [dispatch]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  console.log("###", type);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="homebannerImages" style={{ marginTop: "30px" }} key={id}>
      <BreadcrumbComponent page="முகப்பு" sub="கட்டுரை" child="விவரம்" />
      {/* IMAGE BANNER */}
      <div style={{ height: "400px" }}>
        <img
          src={articleDetails?.media || null}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ padding: "30px 0px" }}>
        {/* TITLE */}
        <div>
          <h3>{articleDetails?.title}</h3>
        </div>
        {/* CONTENT */}
        <div style={{ marginTop: "30px", textAlign: "justify" }}>
          {articleDetails?.body}
        </div>
        <div style={{ marginTop: "30px", textAlign: "right" }}>
          <span style={{ fontWeight: 600 }}>Posted On : </span>
          {moment(articleDetails.created_at).format("DD/MM/YYYY hh:mm a")}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsComponent;
