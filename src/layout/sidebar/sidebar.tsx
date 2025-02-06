import Gridbar from '../../components/grid-components';
import Articals from "../sidebar/articals";
import VideoCard from "../sidebar/vediosCard";
import Notices from "../sidebar/notices";
const Sidebar = () => {
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
