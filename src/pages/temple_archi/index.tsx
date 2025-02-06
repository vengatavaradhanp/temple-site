import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
import { Article } from '../../types/types';
import Tittle from '../../layout/tittle/tittle';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
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
      <Tittle/>
      <Header/>
     <div className="row mt-5">
             <div className="col-lg-8 articlebg bgImg bgText animated bounceInLeft">
               {templearchdata.map((item: Article, index: number) => (
                 <div className="articleImg" key={index}>
                   <img src={item.filepath} />
                   <h4 style={{textAlign:'center'}}>{item.title}</h4>
                   <div className="truncate-text">{item.body}</div>
                 </div>
               ))}
             </div>
           </div>
           <Footer/>
    </div>
  )
}

export default Index

