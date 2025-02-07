import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../_main/store";
import { useEffect } from "react";
import { videosCollection } from "../../services/videosCollection";
import { Vedios } from "../../types/types";
import { videosallCollection } from "../../services/allVideosCollection";

const VediosCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const videosdata = useSelector((state: RootState) => state.videos.data);
  const allvideosdata = useSelector((state: RootState) => state.allvideos.data);
  const headerdata = useSelector((state: RootState) => state.allvideos.header);
  console.log("videosdata", videosdata);
  console.log("allvideosdata", allvideosdata);
  console.log("headerdata", headerdata);
  useEffect(() => {
    dispatch(videosCollection());
    dispatch(videosallCollection());

  }, [dispatch]);
  return (
    <div className="homebannerImages">
      <div className="row mt-5">
        <div className="col-lg-12 bgText">
          <h2>{headerdata}</h2>
          <div className="gallery">
            {videosdata.map((item: Vedios) => (
              // console.log('item',item.filepath),
              <div className="single-video">
                <figure>
                  <iframe
                    src={
                      item.filepath
                        .replace("youtu.be", "www.youtube.com/embed")
                        .split("?")[0]
                    }
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VediosCard;
