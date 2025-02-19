// import Footer from "../../layout/footer/footer"
// import Header from "../../layout/header/header"
import { useEffect, useState } from "react";
import Sidebar from "../../layout/sidebar/sidebar"
// import Loader from "../../components/loader";
// import Tittle from "../../layout/tittle/tittle"
const home = () => {
  // const [loading, setLoading] = useState(true); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
     <Sidebar/>
     </>
  )
}

export default home;
