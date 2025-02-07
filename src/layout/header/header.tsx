/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../styles/global.css";
import OmCard from "../../assets/ohm.png";
import { headerContent } from "../../services/headerContent";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";
import { eventContent } from "../../services/eventContent"; 
import { MenuItems } from "../../utils/constants";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const headerdata = useSelector((state: RootState) => state.header.data || []);
  const eventdata = useSelector((state: RootState) => state.event.data);
  console.log("eventdata", eventdata);
  useEffect(() => {
    dispatch(headerContent());
    dispatch(eventContent("banner"));
  }, [dispatch]);

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
                {MenuItems.map((main_menu: any, index: any) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={main_menu.link}>
                      {main_menu?.menu}
                    </a>
                    <ul className="dropdown">
                      {main_menu.sub_menu.map(
                        (sub_menu: any, sub_index: any) => (
                          <li key={sub_index}>
                            <a className="nav-link" href={sub_menu.link}>
                              {sub_menu?.sub_name}
                            </a>
                            <ul className="dropdown sub-dropdown">
                              {sub_menu.sub_sub_menu.map(
                                (sub_sub_menu: any, sub_sub_index: any) => (
                                  <li key={sub_sub_index}>
                                    <a
                                      className="nav-link"
                                      href={sub_sub_menu.link}
                                    >
                                      {sub_sub_menu?.sub_sub_name}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
