import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { historycontent } from "../../services/historyContent";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { HistoryType } from "../../types/types";

const History = () => {
  const dispatch: AppDispatch = useDispatch();
  const historydata = useSelector((state: RootState) => state.history.data);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(historycontent());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="homebannerImages">
        {/* <Header /> */}
        {loading ? (
          <div className="text-center">
            <div className="spinner-border custom-spinner" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          historydata.map((item: HistoryType) => (
            <div className="container-fluid" key={item.id}>
              <div className="row god">
                <div className="col-lg-12">
                  <div className="eventsbgclassName">
                    <img src={item.media} alt={item.title} />
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
                      {item.title}
                    </h2>
                    <p style={{ textAlign: "justify" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default History;
