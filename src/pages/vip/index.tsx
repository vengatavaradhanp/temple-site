import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../services/contactContent";
import { Article } from "../../types/types";
import CommonService from "../../utils/common";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
// import Loader from "../../components/loader";
// import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultImage from "../../assets/eventsbg.jpg";
// import { Modal } from "react-bootstrap";

// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';

const Index = () => {
  const dispatch: AppDispatch = useDispatch();
  const vip = useSelector((state: RootState) => state.contact.data);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Article | null>(null);
  const [showModal, setShowModal] = useState(false);

  console.log("vip", vip);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(contactDetails("vip"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  const handleCardClick = (item: Article) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const handleSelectClose  = (item: Article) => {
    setSelectedItem(item);
    setShowModal(false);
  }

  return (
    <>
      <div>
        <div className="homebannerImages row">
          <div className="row">
            <div className="col-lg-12 border-0 bgImg bgText animated bounceInLeft arting">
              <BreadcrumbComponent page="நன்கொடையாளர்கள்" sub="விஐபி" />
              <div className="row">
                {vip.map((item: Article) => (
                  <div
                    className="col-lg-4 col-sm-6 col-xs-12"
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => handleCardClick(item)}
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
                          src={item.filepath || DefaultImage}
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                        />
                      </div>
                      <div style={{ padding: "15px" }}>
                        <div className="WrapCardContent">
                          <div>
                            <h4 style={{ textAlign: "left" }}>{item.title}</h4>
                          </div>

                          <div
                            style={{
                              textAlign: "justify",
                              padding: "10px 0px",
                            }}
                          >
                            {CommonService.truncateText(item.body)}
                          </div>
                        </div>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem?.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleSelectClose}
                ></button>
              </div>
              <div className="modal-body">
                {selectedItem?.filepath && (
                  <div style={{height: "350px"}}>
                    <img
                      src={selectedItem?.filepath}
                      alt={selectedItem?.title}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
                <p style={{ marginTop: "10px", textAlign: "justify" }}>
                  {selectedItem?.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;


