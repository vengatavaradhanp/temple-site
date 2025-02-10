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
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              நிர்வாகிகள்
            </h3>
            <div className="row adminItems">
              {contactdata.map((item: Notice) => (
                <div className="adminPhoto eventsclassName" key={item.id}>
                  <img
                    src={item?.filepath ? item.filepath : UserImage}
                    alt={item.title}
                  />
                  <h5>{item.title}</h5>
                  <h6>பெயர்: {item.body}</h6>
                  <p>தொலைபேசி எண்: {item.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
