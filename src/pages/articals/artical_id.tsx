import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { EventParams } from "../../types/types";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { articalsbyID } from "../../services/articalsGetbyid";
// import Tittle from "../../layout/tittle/tittle";

const ArticalsId = () => {
  const { id } = useParams<EventParams>();

  const dispatch: AppDispatch = useDispatch();
  const articalsiddata = useSelector((state: RootState) => state.articalid.data);
  console.log('articalsiddata',articalsiddata)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true); 
      await dispatch(articalsbyID(id));
      setLoading(false);  
    };

    fetchEventData();
  }, [dispatch, id]);

  return (
    <>
      {/* <Tittle/>
      <Header /> */}
      <div className="homebannerImages container-fluid">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="row god">
              <div className="col-lg-12">
                <div className="eventsbgclassName">
                  <img
                    src={articalsiddata?.media}
                    alt={articalsiddata?.title || "Event"}
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
                    {articalsiddata?.title}
                  </h2>
                  <p style={{ textAlign: "justify" }}>{articalsiddata?.body}</p>
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

export default ArticalsId;

