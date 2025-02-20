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
import DefaultImage from '../../assets/defaultImage.jpg'

const Photo = () => {
 const { photo} = useParams<EventParams>();
console.log('photo',photo)
  const dispatch: AppDispatch = useDispatch();
  const photodata = useSelector((state: RootState) => state.photo.data);
  console.log("photo data", photodata);
  
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
          {/* <div className="row adminItems">
            {photodata.map((item: Article) => (
              <div className="col-lg-4 adminPhoto eventsclassName" key={item.id}>
                <img src={item.filepath} alt={item.title} />
                <h6 className="mb-2 mt-2">{item.title}</h6>
                <div>{item.date}</div>
              </div>
            ))}
          </div> */}
          <div className="row">
            {photodata.map((item: Article) => (
              <div
                className="col-lg-4 col-sm-6 col-xs-12"
                style={{ padding: "10px" }}
              >
                <div
                  style={{
                    boxShadow:
                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{height: "250px"}}>
                    <img
                      src={item.filepath || DefaultImage}
                      style={{ borderRadius: "10px 10px 0px 0px", height: "100%", width: "100%" }}
                    />
                  </div>
                  <div style={{ padding: "15px" }}>
                    <div className="WrapCardContent">
                      <div>
                        <h4 style={{ textAlign: "left" }}>{item.title}</h4>
                      </div>

                      <div
                        style={{
                          textAlign: "justify",
                          padding: "10px 0px",
                        }}
                      >
                        {item.date}
                        {/* {CommonService.truncateText(item.body)} */}
                      </div>
                    </div>
                    {/* <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#894c5c",
                          cursor: "pointer",
                          textAlign: "right",
                        }}
                        // onClick={() =>
                        //   navigate(`/history/script/details/${item.id}`)
                        // }
                        // to={`/articals/${item.id}`}
                      >
                        மேலும்..
                      </div>
                    </div> */}
                  </div>
                </div>
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
