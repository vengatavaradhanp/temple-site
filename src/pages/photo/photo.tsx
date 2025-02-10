import { useEffect, useState } from "react";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { Article, EventParams } from "../../types/types";
import Loader from "../../components/loader";
// import Tittle from "../../layout/tittle/tittle";
import {photoContent} from "../../services/photoContent";
import { useParams } from "react-router-dom";
import BreadcrumbComponent from "../../components/common/Breadcrumb";

const Photo = () => {
 const { photo} = useParams<EventParams>();
console.log('photo',photo)
  const dispatch: AppDispatch = useDispatch();
  const photodata = useSelector((state: RootState) => state.photo.data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(photoContent('new'));
      setLoading(false);
    };

    fetchData();
  }, [dispatch,photo]);

  return (
    <div className="homebannerImages">
      <BreadcrumbComponent page="தொகுப்புக்கள்" sub="கடந்த வருடம் " />
      {loading ? (
        <Loader />
      ) : (
        <div className="row mt-5">
          <div className="col-lg-12 adminItems">
            {photodata.map((item: Article) => (
              <div className="adminPhoto eventsclassName" key={item.id}>
                <img src={item.filepath} alt={item.title} />
                <h6 className="mb-2 mt-2">{item.title}</h6>
                <div>{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Photo;
