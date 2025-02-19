import Gridbar from '../../components/grid-components';
import Articals from "../sidebar/articals";
import VideoCard from "../sidebar/vediosCard";
import Notices from "../sidebar/notices";
import { useEffect } from 'react';
const Sidebar = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div >
  <Gridbar />
  <Articals />
  <Notices/>
  <VideoCard/>
    </div>
   
  )
}

export default Sidebar;
