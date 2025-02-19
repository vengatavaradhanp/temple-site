import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../services/contactContent";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { Notice } from "../../types/types";
import UserImage from "../../assets/profile-circle.svg";
import Loader from "../../components/loader";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
import CommonService from "../../utils/common";
// import Tittle from "../../layout/tittle/tittle";

const Contact = () => {
  const dispatch: AppDispatch = useDispatch();
  const contactdata = useSelector((state: RootState) => state.contact.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(contactDetails("management"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="homebannerImages">
      <BreadcrumbComponent page="நிர்வாகிகள்" sub="ஆலய நிர்வாகி " />
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="mt-5">
            <h3 className="mb-4" style={{ textAlign: "center", textDecoration: "underline" }}>
              நிர்வாகிகள்
            </h3>
            {/* <div className="row">
              {contactdata.map((item: Notice) => (
                <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
                  <img
                    src={item?.filepath ? item.filepath : UserImage}
                    alt={item.title}
                  />
                  <h5>{item.title}</h5>
                  <h6>பெயர்: {item.body}</h6>
                  <p>தொலைபேசி எண்: {item.phone}</p>
                </div>
              ))}
            </div> */}
            <div className="row">
              {contactdata.map((item: Notice) => (
                <div
                  className="col-lg-4 col-sm-6 col-xs-12"
                  style={{ padding: "10px" }}
                >
                  <div
                    style={{
                      boxShadow:
                        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <img
                        src={item?.filepath ? item.filepath : UserImage}
                        style={{
                          borderRadius: "10px 10px 0px 0px",
                          height: "400px",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ padding: "15px" }}>
                      <div className="WrapCardContent">
                        <div>
                          <h4 style={{ textAlign: "left" }}>{item.title}</h4>
                        </div>

                        <div
                          style={{ textAlign: "justify", padding: "10px 0px" }}
                        >
                          <h6>பெயர்: {item.body}</h6>
                        </div>
                        <div>
                          <p>தொலைபேசி எண்: {item.phone}</p>
                        </div>
                      </div>
                      {/* <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "#894c5c",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                          // onClick={() =>
                          //   navigate(`/history/script/details/${item.id}`)
                          // }
                          // to={`/articals/${item.id}`}
                        >
                          மேலும்..
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
