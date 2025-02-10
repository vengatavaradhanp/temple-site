// import Footer from "../../layout/footer/footer";
// import Header from "../../layout/header/header";
import Eventsbg from "../../assets/eventsbg.jpg";
import "../../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useEffect, useState } from "react";
import { eventContent } from "../../services/eventContent";
import { Article } from "../../types/types";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
// import Tittle from "../../layout/tittle/tittle";

const Events = () => {
  const dispatch: AppDispatch = useDispatch();
  const eventdata = useSelector((state: RootState) => state.event.data);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); 
      await dispatch(eventContent());
      setLoading(false); 
    };

    fetchEvents();
  }, [dispatch]);

  return (
    <div>
      {/* <Tittle/> */}
      {/* <Header /> */}
      <div className=" container-fluid">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="row god">
              <div className="col-lg-12">
                <div className="eventsbgclassName">
                  <img src={Eventsbg} alt="Events Background" />
                </div>
              </div>
            </div>

            <div className="row mt-5 events bgText">
              {eventdata.map((item: Article, index: number) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="eventsclassName">
                    <img src={item.media} alt={item.title || "Event"} />
                    <h3 style={{ marginTop: "0.5em" }}>{item.title}</h3>
                    <div className="truncate-text" >{item.body}</div>
                    <Link to={`/events/${item.id}`}>கண்டறியவும்</Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Events;

