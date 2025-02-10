import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../services/contactContent";
import { Article } from '../../types/types';
import CommonService from '../../utils/common';
import BreadcrumbComponent from '../../components/common/Breadcrumb';
// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';

const Index = () => {
    const dispatch: AppDispatch = useDispatch();
    const katanaragaldata = useSelector((state: RootState) => state.contact.data);

  console.log('kalvettudata',katanaragaldata)
    useEffect(() => {
      dispatch(contactDetails("sub"));
    }, [dispatch]);

  return (
    <>
      {/* <div className="homebannerImages">
        <div className="container-fluid">
          <div className="mt-5">
            <div className="row adminItems">
              {katanaragaldata.map((item: Article) => (
                <div className="adminPhoto eventsclassName" key={item.id}>
                  <img src={item.filepath} alt={item.title} />
                  <h5>{item.title}</h5>
                  <h6>{item.body}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className="homebannerImages row">
          <BreadcrumbComponent
            page="ஆன்மிக சேவையாளர்கள்"
            sub="கட்டணக்காரர்கள்"
          />
          <div className="row">
            <div className="col-lg-12 border-0 bgImg bgText animated bounceInLeft arting">
              <div className="row">
                {katanaragaldata.map((item: Article) => (
                  <div className="col-6" style={{ padding: "20px" }}>
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
    </>
  );
}

export default Index
