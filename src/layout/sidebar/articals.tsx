import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { eventContent } from "../../services/eventContent";
import { Article } from "../../types/types";
import { articalContent } from "../../services/articalsContent";


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
        <div className="col-lg-8 articlebg bgImg bgText animated bounceInLeft">
          <h2>{tittledata}</h2>
          {articalsdata.slice(0, 2).map((item: Article, index: number) => (
            <div className="articleImg">
              <img src={item.media} />

              <h4 style={{ textAlign: "center" }}>{item.title}</h4>
              <div className="truncate-text">{item.body}</div>

              <Link key={index} to={`/articals/${item.id}`}>
                மேலும்..
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articals;
