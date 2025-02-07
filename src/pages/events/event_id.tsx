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

const EventId = () => {
  const { id } = useParams<EventParams>();
console.log('id',id)
  const dispatch: AppDispatch = useDispatch();
  const eventiddata = useSelector((state: RootState) => state.eventid.data.event);
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
      {/* <Tittle/> */}
      {/* <Header /> */}
      <div className="container-fluid">
        {loading ? (
          <Loader />
        ) : (
          <>
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
                <div>
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
                      margin: "5em",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p className="textParaLine">{eventiddata?.body}</p>
                    {/* <p className="textParaLine" style={{ textAlign: "justify" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default EventId;

