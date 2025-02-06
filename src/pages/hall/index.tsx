import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import {kalvettuContent} from '../../services/kalvettuContent';
import { Article } from '../../types/types';
import Tittle from '../../layout/tittle/tittle';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';

const Index = () => {
    const dispatch: AppDispatch = useDispatch();
    const halldata = useSelector((state: RootState) => state.kalvettu.data);

  console.log('kalvettudata',halldata)
    useEffect(() => {
      dispatch(kalvettuContent("hall"));
    }, [dispatch]);
  return (
    <div>
      <Tittle/>
      <Header/>
      <div className="container-fluid">
          <div className="mt-5">
            <div className="row adminItems">
              {halldata.map((item: Article) => (
                <div className="adminPhoto eventsclassName" key={item.id}>
                  <img
                    src={item.filepath}
                    alt={item.title}
                  />
                  <h5>{item.title}</h5>
                  <h6>{item.body}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
           <Footer/>
    </div>
  )
}

export default Index
