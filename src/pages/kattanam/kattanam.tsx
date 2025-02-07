import React, { useEffect } from 'react'
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../services/contactContent";
import { Article } from '../../types/types';
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
    <div className="homebannerImages">
      {/* <Tittle/>
      <Header/> */}
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
      {/* <Footer/> */}
    </div>
  );
}

export default Index
