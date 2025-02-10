import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { eventContent } from "../../services/eventContent";
import { Article } from "../../types/types";
import { articalContent } from "../../services/articalsContent";
import CommonService from "../../utils/common";

const Articals = () => {
  const dispatch: AppDispatch = useDispatch();
  // const eventdata = useSelector((state: RootState) => state.event.data);
  // const headerdata = useSelector((state: RootState) => state.event.header);
  const articalsdata = useSelector((state: RootState) => state.articals.data);
  const tittledata = useSelector((state: RootState) => state.articals.header);

  useEffect(() => {
    dispatch(eventContent());
    dispatch(articalContent());
  }, [dispatch]);


  return (
    <div className="homebannerImages">
      <div className="row mt-5">
        <div className="col-lg-12 articlebg bgImg bgText animated bounceInLeft">
          <h2>{tittledata}</h2>
          <div className="row">
            {" "}
            {articalsdata.slice(0, 2).map((item: Article, index: number) => (
              <div className="col-6" style={{ padding: "20px" }}>
                <div
                  style={{
                    boxShadow:
                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <img
                      src={item.media}
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                    />
                  </div>
                  <div style={{ padding: "15px" }}>
                    <div className='WrapCardContent'>
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
};

export default Articals;
