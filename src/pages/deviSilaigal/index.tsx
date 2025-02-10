import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import {kalvettuContent} from '../../services/kalvettuContent';
import { Article } from '../../types/types';
import BreadcrumbComponent from '../../components/common/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import CommonService from '../../utils/common';
// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';

const Index = () => {
  const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const halldata = useSelector((state: RootState) => state.kalvettu.data);

  console.log('kalvettudata',halldata)
    useEffect(() => {
      dispatch(kalvettuContent("gods"));
    }, [dispatch]);
   
  return (
    // <div className="homebannerImages">
    //   {/* <Tittle /> */}
    //   {/* <Header /> */}
    //   {/* <div className="container-fluid"> */}
    //   <div className="row my-5">
    //     {halldata.map((item: Article) => (
    //       <div
    //         className="col-lg-4 card border-0 bgImg bgText animated bounceInLeft arting"
    //         style={{ background: "transparent" }}
    //       >
    //         <div className="articleImg artImages" key={item.id}>
    //           <img
    //             style={{ borderRadius: "1em" }}
    //             src={item.filepath}
    //             alt={item.title}
    //           />
    //           <h5 className="my-3">{item.title}</h5>
    //           <h6>{item.body}</h6>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   {/* </div> */}
    //   {/* <Footer /> */}
    // </div>
    <div className="homebannerImages row">
      <div className="row">
        <div className="col-lg-12 border-0 bgImg bgText animated bounceInLeft arting">
          <BreadcrumbComponent page="தல வரலாறு" sub="சிலைகள் & தெய்வங்கள்" />
          <div className="row">
            {halldata.map((item: Article, index: number) => (
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
                          navigate(`/history/devigal/details/${item.id}`)
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
  );
}

export default Index
