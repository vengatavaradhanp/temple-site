import "../../styles/global.css";
import { headerContent } from "../../services/headerContent";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../_main/store";
import { useDispatch, useSelector } from "react-redux";

const Tittle = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const headerdata = useSelector((state: RootState) => state.header.data);
  // console.log("headerdata123", headerdata);
  // useEffect(() => {
  //   dispatch(headerContent());
  // }, [dispatch]);
  const headerTittle = useSelector((state: RootState) => state.header.header);
  console.log('headerTittle',headerTittle)
  // const scrollToBottom = (data: number) => {
  //   window.scrollTo({
  //     top: data,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div>
      <header>
        <nav className="navbar navbar-brand nav.navbar.navbar-brand"  >
          {/* <div className="navbar-brand" style={{textAlign:'center'}}> */}
         {headerTittle}
          {/* </div>  */}
        </nav>
      </header>
    </div>
  );
};

export default Tittle;
