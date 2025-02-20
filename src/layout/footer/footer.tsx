
// import "../../styles/global.css";
// const Footer = () => {
//   return (
//     <>
//       <div className="footer mt-1 pt-4 pb-1">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-sm-4 col-xs-12">
//               <div className="single_footer">
//                 <h4>முகவரி</h4>
//                 <ul>
//                   <li>
//                     <a href="#">அழகிய முருகன் கோவில், காலந்தோட்டம், </a>
//                   </li>
//                   <li>
//                     <a href="#">அரியாங்குப்பம், புதுச்சேரி - 605501. </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-5 col-sm-7 col-xs-12">
//               <div className="single_footer single_footer_address">
//                 <h4>பக்க இணைப்புகள்</h4>
//                 <ul>
//                   <li>
//                     <a href="#">முகப்பு</a>
//                   </li>
//                   <li>
//                     <a href="#">நிர்வாகம்</a>
//                   </li>
//                   <li>
//                     <a href="#">நிகழ்வுகள் </a>
//                   </li>
//                   <li>
//                     <a href="#">சேவைகள்</a>
//                   </li>
//                   <li>
//                     <a href="#">தொடர்புக்கு</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-4 col-sm-4 col-xs-12">
//               <div className="single_footer single_footer_address">
//                 <h4>Subscribe today</h4>
//                 <div className="signup_form">
//                   <form action="#" className="subscribe">
//                     <input
//                       type="text"
//                       className="subscribe__input"
//                       placeholder="Enter Email Address"
//                     />
//                     <button type="button" className="subscribe__btn">
//                       <i className="fas fa-paper-plane"></i>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//               <div className="social_profile mt-3">
//                 <ul>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-google-plus-g"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12 col-sm-12 col-xs-12">
//               <p className="copyright">
//                 Copyright © 2024 <a href="#">Datatech Genius</a>.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;


import "../../styles/global.css";
const Footer = () => {
  return (
    <>
      <div className="footer mt-1 pt-4 pb-1">
        <div className="container" style={{ maxWidth: "1240px" }}>
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>முகவரி</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/maps?cid=17730831183211441729"
                      target="_blank"
                    >
                      அழகிய முருகன் கோவில், காலந்தோட்டம், அரியாங்குப்பம், <br />
                      புதுச்சேரி - 605501.{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-sm-7 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>பக்க இணைப்புகள்</h4>
                <div className="row">
                  <div className="col p-1 col-sm-7">
                    <ul>
                      <li>
                        <a href="./">முகப்பு</a>
                      </li>
                      <li>
                        <a href="./script">தல வரலாறு</a>
                      </li>
                      <li>
                        <a href="./katadakaragal">ஆன்மிக சேவையாளர்கள்</a>
                      </li>
                      <li>
                        <a href="./events/2">ஆலய சேவைகள் </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>
                        <a href="./anandhanam">சேவைகள்</a>
                      </li>
                      <li>
                        <a href="/photo/:new">தொகுப்புக்கள்</a>
                      </li>
                      <li>
                        <a href="/forms">ஆலய முன்பதிவு</a>
                      </li>
                      <li>
                        <a href="/officers">நிர்வாகிகள்</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      style={{ textAlign: "left", padding: "0 60px 0 20px" }}
                      className="subscribe__input"
                      placeholder="Enter Email Address"
                    />
                    <button type="button" className="subscribe__btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="social_profile mt-3">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p
                className="copyright mt-2 mb-3 pt-3"
                style={{ textAlign: "center", color: "white" }}
              >
                Copyright © 2025{" "}
                <a
                  href="https://datatechgenius.com/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Datatech Genius
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

