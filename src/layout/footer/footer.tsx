
import "../../styles/global.css";
const Footer = () => {
  return (
    <>
<div className="footer mt-5">
    <div className="container">     
        <div className="row">                       
            <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="single_footer">
                    <h4>முகவரி</h4>
                    <ul>
                        <li><a href="#">அழகிய முருகன் கோவில், காலந்தோட்டம், </a></li>
                        <li><a href="#">அரியாங்குப்பம், புதுச்சேரி - 605501. </a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single_footer single_footer_address">
                    <h4>பக்க இணைப்புகள்</h4>
                    <ul>
                        <li><a href="#">முகப்பு</a></li>
                        <li><a href="#">நிர்வாகம்</a></li>
                        <li><a href="#">நிகழ்வுகள் </a></li>
                        <li><a href="#">சேவைகள்</a></li>
                        <li><a href="#">தொடர்புக்கு</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single_footer single_footer_address">
                    <h4>Subscribe today</h4>
                    <div className="signup_form">                           
                        <form action="#" className="subscribe">
                            <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                            <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
                <div className="social_profile">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>                          
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <p className="copyright">Copyright © 2024 <a href="#">Datatech Genius</a>.</p>
            </div>              
        </div>            
    </div>
</div>
</>
  )
}

export default Footer;
