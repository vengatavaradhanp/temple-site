import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
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
  VIP_ROUTE,
  RANDOM_ROUTE,
  REPEATED_ROUTE,
  OFFICERS_ROUTE,
  BOOKINGLIST_ROUTE,
  REGISTRATION_ROUTE,
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
import Devigal from "./pages/deviSilaigal/index";
import Gopuram from "./pages/gopuram/index";
import Kalvettu from "./pages/kalvettu/index";
import TempleArchi from "./pages/Kadidangal/index";
import Mandapam from "./pages/mandapam/index";
import Admin from "./pages/admin/index";
import Hall from "./pages/mandabangal/index";
import Forms from "./pages/forms/registrationForm";
import Poojai1 from "./pages/poojaiPrasadam/poojai1";
import Poojai2 from "./pages/poojaiAnadhanam/poojai2";
import Tittle from "../src/layout/tittle/tittle";
import Header from "../src/layout/header/header";
import Footer from "../src/layout/footer/footer";
import Events from "./pages/events/events";
import HistoryDetailsComponent from "./components/history-details";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/admin/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import ListPage from "./pages/admin/listPath";
import AdminUser from "./pages/admin/adminUser";
import AdminCreateUser from "./pages/admin/adminCreateUser";
import Repeated from "./pages/repeated";
import Random from "./pages/random";
import Vip from "./pages/vip";
import Officers from "./pages/contact/officers";
import ArticleDetailsComponent from "./components/aticle-details";
// import Forms from "./pages/forms/registrationForm";
import BookingList from "./pages/forms/bookingList";
import RegistrationForm from "./pages/forms/registrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App: React.FC = () => {
  // const isAuthenticated = false; // Replace with your authentication logic
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <Tittle /> */}
          {/* <Header /> */}
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path={BASE_ROUTE} element={<Home />} />
              <Route path={EVENT_ROUTE} element={<Events />} />
              <Route path={NOTICE_ROUTE} element={<Notices />} />
              <Route path={VIDEOS_ROUTE} element={<Videos />} />
              <Route path={HISTORY_ROUTE} element={<History />} />
              <Route path={CONTACT_ROUTE} element={<Contact />} />
              <Route path={PHOTO_ROUTE} element={<Photo />} />
              <Route path={DONATION_ROUTE} element={<Donation />} />
              <Route path={VIP_ROUTE} element={<Vip />} />
              <Route path={OFFICERS_ROUTE} element={<Officers />} />
              <Route path={REPEATED_ROUTE} element={<Repeated />} />
              <Route path={RANDOM_ROUTE} element={<Random />} />
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
              {/* <Route path={ADMIN_ROUTE} element={<Admin />} /> */}
              <Route path={HALL_ROUTE} element={<Hall />} />
              <Route path={FORMS_ROUTE} element={<Forms />} />
              <Route path={FORMS_ROUTE} element={<Forms />} />
              <Route path={REGISTRATION_ROUTE} element={<RegistrationForm />} />
              <Route
                path="/history/:type/details/:id"
                element={<HistoryDetailsComponent />}
              />
              <Route
                path="/:type/details/:id"
                element={<ArticleDetailsComponent />}
              />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/admin/main" element={<ListPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/createUser" element={<AdminUser />} />
              {/* <Route path="/adminUser" element={<AdminUser />} /> */}
              <Route path="/adminCreateUser" element={<AdminCreateUser />} />
              <Route path={BOOKINGLIST_ROUTE} element={<BookingList />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
