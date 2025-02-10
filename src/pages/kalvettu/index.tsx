import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { kalvettuContent } from "../../services/kalvettuContent";
// import { useParams } from 'react-router-dom';
import { Article } from "../../types/types";
import { useNavigate } from "react-router-dom";
import BreadcrumbComponent from "../../components/common/Breadcrumb";
import CommonService from "../../utils/common";
// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';

const Index = () => {
  // const {script} = useParams<EventParams>();
  const navigate = useNavigate();
  
  const dispatch: AppDispatch = useDispatch();
  const kalvettudata = useSelector((state: RootState) => state.kalvettu.data);

  console.log("kalvettudata", kalvettudata);
  useEffect(() => {
    dispatch(kalvettuContent("script"));
  }, [dispatch]);

  return (
    <div>
      <div className="homebannerImages row">
        <div className="row">
          <div className="col-lg-12 border-0 bgImg bgText animated bounceInLeft arting">
            <BreadcrumbComponent page="தல வரலாறு" sub="கல்வெட்டுகள்" />
            <div className="row">
              {kalvettudata.map((item: Article, index: number) => (
                <div className="col-6" style={{ padding: "10px" }}>
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
                        style={{ borderRadius: "10px 10px 0px 0px" }}
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
                          {CommonService.truncateText(item.body)}
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "#894c5c",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                          onClick={() =>
                            navigate(`/history/script/details/${item.id}`)
                          }
                          // to={`/articals/${item.id}`}
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
      </div>
    </div>
  );
};

export default Index;
