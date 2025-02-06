import "../styles/global.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeBanner } from "../services/homeContent";
import { AppDispatch, RootState } from "../_main/store";

const Gridcomponents = () => {
  const dispatch: AppDispatch = useDispatch();
  const BannerImage = useSelector((state: RootState) => state.homebanner.data);
  console.log("BannerImage", BannerImage);

  // Dispatch action to fetch banner data
  useEffect(() => {
    dispatch(homeBanner());
  }, []);

  return (
    <div className="row god">
      <div className="col-lg-12">
        <section className="slider-section">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            {/* Dynamically render carousel indicators */}
            <ol className="carousel-indicators">
              {BannerImage.map((_:void, index:number) => (
                <li
                  key={index}
                  data-target="#carousel"
                  data-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                ></li>
              ))}
            </ol>

            {/* Dynamically render carousel items */}
            <div className="carousel-inner" role="listbox">
              {BannerImage.map((item:any, index:number) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  style={{
                    backgroundImage: `url(${item.filepath.replace(/\\/g, '/')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '550px',
                  }}
                >
                  <div className="carousel-caption d-none d-md-block">
                    <h3 >{item.title}</h3>
                    <p >{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <a
              href="#carousel"
              className="carousel-control-prev"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              href="#carousel"
              className="carousel-control-next"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gridcomponents;

