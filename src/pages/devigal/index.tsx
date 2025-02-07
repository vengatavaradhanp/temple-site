import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import {kalvettuContent} from '../../services/kalvettuContent';
import { Article } from '../../types/types';
// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';

const Index = () => {
    const dispatch: AppDispatch = useDispatch();
    const halldata = useSelector((state: RootState) => state.kalvettu.data);

  console.log('kalvettudata',halldata)
    useEffect(() => {
      dispatch(kalvettuContent("gods"));
    }, [dispatch]);
  return (
    <div className="homebannerImages">
      {/* <Tittle /> */}
      {/* <Header /> */}
      {/* <div className="container-fluid"> */}
      <div className="row my-5">
        {halldata.map((item: Article) => (
          <div
            className="col-lg-4 card border-0 bgImg bgText animated bounceInLeft arting"
            style={{ background: "transparent" }}
          >
            <div className="articleImg artImages" key={item.id}>
              <img
                style={{ borderRadius: "1em" }}
                src={item.filepath}
                alt={item.title}
              />
              <h5 className="my-3">{item.title}</h5>
              <h6>{item.body}</h6>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Index
