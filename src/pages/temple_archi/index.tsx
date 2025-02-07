import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
import { Article } from '../../types/types';
// import Tittle from '../../layout/tittle/tittle';
// import Header from '../../layout/header/header';
// import Footer from '../../layout/footer/footer';
import {kalvettuContent} from '../../services/kalvettuContent';

const Index = () => {
    // const {arch} = useParams<EventParams>();
    const dispatch: AppDispatch = useDispatch();
    const templearchdata = useSelector((state: RootState) => state.kalvettu.data);
  console.log('templearchdata',templearchdata)
    useEffect(() => {
      dispatch(kalvettuContent('arch'));
    }, [dispatch]);
  return (
    <div>
      {/* <Tittle />
      <Header /> */}
      <div className="homebannerImages row mt-5">
        {templearchdata.map((item: Article, index: number) => (
          <div
            className="col-lg-4 card border-0 bgImg bgText animated bounceInLeft arting"
            style={{ background: "transparent" }}
          >
            <div className="articleImg artImages" key={index}>
              <img style={{ borderRadius: "1em" }} src={item.filepath} />
              <h4 className="my-4">{item.title}</h4>
              <div>{item.body}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Index

