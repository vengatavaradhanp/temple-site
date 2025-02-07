import "../../styles/global.css";
import "animate.css";
import Image from "../../assets/bg.png";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { noticeContent } from "../../services/noticeboardContent";
import { REGEXBANK } from "../../_main/routeConstant";
import { Link } from "react-router-dom";
// noticeContent
const Notices = () => {
  const dispatch: AppDispatch = useDispatch();
  const noticedata = useSelector((state: RootState) => state.notice.data);
  const headerdata = useSelector((state: RootState) => state.notice.header);
  // console.log("headerdata", headerdata);
  // console.log("noticedata", noticedata);
  const [object1, object2] = noticedata;

  const bankDetails = object2?.phone.match(REGEXBANK) || [];
  const bankName = bankDetails[1] || "";
  const accountNumber = bankDetails[2] || "";
  const ifscCode = bankDetails[3] || "";

  useEffect(() => {
    dispatch(noticeContent());
  }, [dispatch]);
  return (
    <div className="homebannerImages row mt-5 showClass" id="targetElement">
      {/* {noticedata.map((item:Notice)=>( */}
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>{headerdata}</h2>
        <div style={{ display: "flex" }}>
          <div className="col-lg-6 col-md-6 col-12 animated  fadeInUpBig">
            {object1 && (
              <div className="showRow">
                <div className="showTitle">
                  <h4>{object1?.title}</h4>
                </div>
                <div className="showTime">{object1?.phone}</div>
                <div className="showContent">
                  <p>{object1?.body}</p>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6 col-md-6 col-12 animated  fadeInDownBig">
            {object2 && (
              <div className="showRow">
                <div className="showTitle">
                  <h4>{object2?.title}</h4>
                </div>
                <div className="showContent">
                  <p>{object2?.body}</p>
                </div>

                <div className="row bankDetails">
                  <div className="col-lg-8">
                    <div style={{ fontWeight: "bold" }}>
                      {" "}
                      Bank Name:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {bankName}
                      </span>{" "}
                    </div>
                    <div style={{ fontWeight: "bold" }}>
                      ACCOUNT NO :
                      <span style={{ fontWeight: "normal" }}>
                        {accountNumber}
                      </span>
                    </div>
                    <div style={{ fontWeight: "bold" }}>
                      {" "}
                      IFSC CODE :
                      <span style={{ fontWeight: "normal" }}>
                        {ifscCode}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img src={object2?.filepath} />
                  </div>
                  {/* <div className="col-lg-4">
                  <Link 
                                          to={`/donation`}
                                          >
                                            Show More
                                          </Link>
                </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Notices;
