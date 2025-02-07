import React, { useEffect, useState } from "react";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { donation } from "../../services/donation";
import { Notice } from "../../types/types";
import Loader from "../../components/loader";

const Donation = () => {
  const dispatch: AppDispatch = useDispatch();
  const donationdata = useSelector((state: RootState) => state.donation.data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(donation("thulabaram"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="homebannerImages">
      {/* <Header /> */}
      {loading ? (
        <Loader />
      ) : (
        donationdata.map((item: Notice) => (
          <div className="container-fluid" key={item?.id}>
            <div className="row god">
              <div className="col-lg-12">
                <div className="eventsbgclassName">
                  <img src={item?.filepath} alt={item?.title} />
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
                    {item?.title}
                  </h2>
                  <p style={{ textAlign: "justify" }}>{item?.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Donation;
