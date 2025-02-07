// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'animate.css';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import NotFound from "./pages/error/error";
import {
  NOTICE_ROUTE,
  BASE_ROUTE,
  EVENT_ROUTE,
  CONTACT_ROUTE,
  VIDEOS_ROUTE,
  HISTORY_ROUTE,
  PHOTO_ROUTE,
  DONATION_ROUTE,
  EVENTID_ROUTE,
  ANANDHANAM_ROUTE,
  ARTICALS_ROUTE,
  KATTADAM_ROUTE,
  CONTACTSEVA_ROUTE,
  DEVIGAL_ROUTE,
  TEMPLEARC_ROUTE,
  MANDAPAM_ROUTE,
  KALVETTU_ROUTE,
  HALL_ROUTE,
  GOPURAM_ROUTE,
  ADMIN_ROUTE,
  FORMS_ROUTE,
  POOJAI1,
  POOJAI2,
} from "./_main/routeConstant";
import Notices from "./layout/sidebar/notices";
import Videos from "./layout/sidebar/vediosCard";
import History from "./pages/history/history";
import Contact from "./pages/contact/contactofficer";
import ContactSeva from "./pages/contact/contact";
import Photo from "./pages/photo/photo";
import Donation from "./pages/donation/donation";
import EventId from "./pages/events/event_id";
import ArticalId from "./pages/articals/artical_id";
import Anandhanam from "./pages/anandhanam/anandhanam";
import Kattanam from "./pages/kattanam/kattanam";
import Devigal from "./pages/devigal/index";
import Gopuram from "./pages/gopuram/index";
import Kalvettu from "./pages/kalvettu/index";
import TempleArchi from "./pages/temple_archi/index";
import Mandapam from "./pages/mandapam/index";
import Admin from "./pages/admin/index";
import Hall from "./pages/hall/index";
import Forms from "./pages/forms/marrigeForm";
import Poojai1 from "./pages/poojai1/poojai1";
import Poojai2 from "./pages/poojai2/poojai2";

// import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  // const isAuthenticated = false; // Replace with your authentication logic

  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path={BASE_ROUTE} element={<Home />} />
        <Route path={EVENT_ROUTE} element={<Events />} />
        <Route path={NOTICE_ROUTE} element={<Notices />} />
        <Route path={VIDEOS_ROUTE} element={<Videos />} />
        <Route path={HISTORY_ROUTE} element={<History />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
        <Route path={PHOTO_ROUTE} element={<Photo />} />
        <Route path={DONATION_ROUTE} element={<Donation />} />
        <Route path={ANANDHANAM_ROUTE} element={<Anandhanam />} />
        <Route path={POOJAI1} element={<Poojai1 />} />
        <Route path={POOJAI2} element={<Poojai2 />} />
        <Route path={ARTICALS_ROUTE} element={<ArticalId />} />
        <Route path={EVENTID_ROUTE} element={<EventId />} />
        <Route path={KATTADAM_ROUTE} element={<Kattanam />} />
        <Route path={CONTACTSEVA_ROUTE} element={<ContactSeva />} />
        <Route path={DEVIGAL_ROUTE} element={<Devigal />} />
        <Route path={TEMPLEARC_ROUTE} element={<TempleArchi />} />
        <Route path={MANDAPAM_ROUTE} element={<Mandapam />} />
        <Route path={KALVETTU_ROUTE} element={<Kalvettu />} />
        <Route path={GOPURAM_ROUTE} element={<Gopuram />} />
        <Route path={ADMIN_ROUTE} element={<Admin />} />
        <Route path={HALL_ROUTE} element={<Hall />} />
        <Route path={FORMS_ROUTE} element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </AuthProvider>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/events" element={<Home />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
};

export default App;
