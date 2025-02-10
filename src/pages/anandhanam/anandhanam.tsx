import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import { contactDetails } from "../../services/contactContent";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
// import { Notice } from "../../types/types";
// import UserImage from "../../assets/profile-circle.svg";
import Loader from "../../components/loader";
// import  from "../../layout//";
import { Notice } from "../../types/types";
import { anandhanam } from "../../services/anandhanam";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
// import {eventContent} from "../../services/eventContent";


const Anandhanam = () => {
  const dispatch: AppDispatch = useDispatch();
  const anandhanamdata = useSelector((state: RootState) => state.anandhanam.data);
  console.log("anandhanamdata", anandhanamdata);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(anandhanam("anadhanam"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

    return (
      <>
        <div className="homebannerImages">
          {/* <Header /> */}
          {loading ? (
            <Loader />
          ) : (
            anandhanamdata.map((item: Notice) => (
              <div className="container-fluid" key={item?.id}>
                <BreadcrumbComponent page="சேவைகள்" sub="அன்னதானம் " />
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
      </>
    );
};

export default Anandhanam;


