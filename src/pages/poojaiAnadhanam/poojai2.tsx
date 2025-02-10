import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import { contactDetails } from "../../services/contactContent";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
// import { Notice } from "../../types/types";
// import UserImage from "../../assets/profile-circle.svg";
import Loader from "../../components/loader";
// import Tittle from "../../layout/tittle/tittle";
import { Notice } from "../../types/types";
import { anandhanam } from "../../services/anandhanam";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
// import {eventContent} from "../../services/eventContent";


const Poojai2 = () => {
  const dispatch: AppDispatch = useDispatch();
  const poojai2data = useSelector((state: RootState) => state.anandhanam.data);
  console.log("poojai2data", poojai2data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(anandhanam("poojai2"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

    return (
      <div className="homebannerImages">
        <BreadcrumbComponent page="சேவைகள்" sub="அன்னதானம் + பூஜை + பிரசாதம்" />
        {loading ? (
          <Loader />
        ) : (
          poojai2data.map((item: Notice) => (
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

export default Poojai2;


