import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../services/contactContent";
import { Article } from "../../types/types";
import CommonService from "../../utils/common";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
import Loader from "../../components/loader";

const Index = () => {
  const dispatch: AppDispatch = useDispatch();
  const repeated = useSelector((state: RootState) => state.contact.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(contactDetails("repeated"));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="homebannerImages">
      <BreadcrumbComponent page="நன்கொடையாளர்கள்" sub="மீண்டும் நன்கொடையாளர்" />
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-lg-12 border-0 bgImg bgText animated bounceInLeft arting">
            <div className="row">
              {repeated.map((item: Article) => (
                <div
                  className="col-6"
                  style={{ padding: "20px" }}
                  key={item.id}
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
                        src={item.filepath}
                        alt={item.title}
                        style={{
                          borderRadius: "10px 10px 0px 0px",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div style={{ padding: "15px" }}>
                      <div>
                        <h4 style={{ textAlign: "left" }}>{item.title}</h4>
                      </div>
                      <div
                        style={{ textAlign: "justify", padding: "10px 0px" }}
                      >
                        {CommonService.truncateText(item.body)}
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "#894c5c",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          மேலும்..
                        </div>
                      </div>
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

export default Index;
