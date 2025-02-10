import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { EventParams } from "../../types/types";
import { useParams } from "react-router-dom";
import { eventbyID } from "../../services/eventGetbyid";
import Loader from "../../components/loader";
// import Tittle from "../../layout/tittle/tittle";
import "../../styles/global.css";
import BreadcrumbComponent from "../../components/common/Breadcrumb";

const EventId = () => {
  const { id } = useParams<EventParams>();
  console.log("id", id);
  const dispatch: AppDispatch = useDispatch();
  const eventiddata = useSelector(
    (state: RootState) => state.eventid.data.event
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      await dispatch(eventbyID(id));
      setLoading(false);
    };

    fetchEventData();
  }, [dispatch, id]);

  return (
    <>
      <div
        className="homebannerImages container-fluid"
        style={{ marginTop: "30px" }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <BreadcrumbComponent page="ஆலய சேவைகள்" sub="தைப்பூசம்" />
            <div className=" row god">
              <div className="col-lg-12">
                <div className="eventsbgclassName">
                  <img
                    src={eventiddata?.media}
                    alt={eventiddata?.title || "Event"}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <div style={{ minHeight: "150px" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      marginBottom: "1em",
                    }}
                  >
                    {eventiddata?.title}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      className="textParaLine"
                      style={{ textAlign: "justify" }}
                    >
                      {eventiddata?.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EventId;
