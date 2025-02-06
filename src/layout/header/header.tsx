import "../../styles/global.css";
import OmCard from "../../assets/ohm.png";
import { Link } from "react-router-dom";
import {
  ANANDHANAM_ROUTE,
  CONTACT_ROUTE,
  DEVIGAL_ROUTE,
  FORMS_ROUTE,
  GOPURAM_ROUTE,
  HALL_ROUTE,
  KALVETTU_ROUTE,
  // DONATION_ROUTE,
  // HISTORY_ROUTE,
  KATTADAM_ROUTE,
  PHOTO_ROUTE,
  POOJAI1,
  POOJAI2,
  TEMPLEARC_ROUTE,
} from "../../_main/routeConstant";
import { headerContent } from "../../services/headerContent";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { eventContent } from "../../services/eventContent";
import { Event } from "../../types/types";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const headerdata = useSelector((state: RootState) => state.header.data || []);
  const eventdata = useSelector((state: RootState) => state.event.data);
  console.log("eventdata", eventdata);
  useEffect(() => {
    dispatch(headerContent());
    dispatch(eventContent('banner'));
  }, [dispatch]);

  // const scrollToBottom = (data: number) => {
  //   window.scrollTo({
  //     top: data,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={OmCard} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {headerdata[0]?.menu}
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    {headerdata[1]?.menu}
                  </a>
                  <ul className="dropdown">
                    <Link className="nav-link" to={KALVETTU_ROUTE}>
                      {headerdata[1]?.sub_menu[0]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={TEMPLEARC_ROUTE}>
                      {headerdata[1]?.sub_menu[1]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={GOPURAM_ROUTE}>
                      {headerdata[1]?.sub_menu[2]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={HALL_ROUTE}>
                      {headerdata[1]?.sub_menu[3]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={DEVIGAL_ROUTE}>
                      {headerdata[1]?.sub_menu[4]?.sub_name}
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {headerdata[2]?.menu}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <Link className="nav-link" to={KATTADAM_ROUTE}>
                        {headerdata[2]?.sub_menu[0]?.sub_name}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="">
                        {headerdata[2]?.sub_menu[1]?.sub_name}
                      </Link>
                      <ul className="dropdown sub-dropdown">
                        <li>
                          <Link className="nav-link" to="">
                            விஐபி
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="">
                            Repeated doners
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="">
                            Random doners
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    {headerdata[3]?.menu}
                  </a>
                  <ul className="dropdown">
                    {eventdata.map((item: Event, i: number) => (
                      <Link
                        className="nav-link"
                        to={`/events/${item.id}`}
                        key={i}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {headerdata[4]?.menu}
                  </a>
                  <ul className="dropdown">
                    <Link className="nav-link" to={ANANDHANAM_ROUTE}>
                      {headerdata[4]?.sub_menu[0]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={POOJAI1}>
                      {headerdata[4]?.sub_menu[1]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={POOJAI2}>
                      {headerdata[4]?.sub_menu[2]?.sub_name}
                    </Link>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {headerdata[5]?.menu}
                  </a>
                  <ul className="dropdown">
                    <Link className="nav-link" to={PHOTO_ROUTE}>
                      {headerdata[5]?.sub_menu[0]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={PHOTO_ROUTE}>
                      {headerdata[5]?.sub_menu[1]?.sub_name}
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {headerdata[6]?.menu}
                  </a>
                  <ul className="dropdown">
                    <Link className="nav-link" to={FORMS_ROUTE}>
                      {headerdata[6]?.sub_menu[0]?.sub_name}
                    </Link>
                    {/* <Link className="nav-link" to={FORMS_ROUTE}>
                    {headerdata[6]?.sub_menu[1]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={FORMS_ROUTE}>
                    {headerdata[6]?.sub_menu[2]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={FORMS_ROUTE}>
                    {headerdata[6]?.sub_menu[3]?.sub_name}
                    </Link> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {headerdata[7]?.menu}
                  </a>
                  <ul className="dropdown">
                    <Link className="nav-link" to={PHOTO_ROUTE}>
                      {headerdata[7]?.sub_menu[0]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={CONTACT_ROUTE}>
                      {headerdata[7]?.sub_menu[1]?.sub_name}
                    </Link>
                    <Link className="nav-link" to={"/contact_seva"}>
                      {headerdata[7]?.sub_menu[2].sub_name}
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
