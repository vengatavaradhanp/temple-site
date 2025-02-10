import { configureStore } from '@reduxjs/toolkit';
import HomeBannerReducer from '../services/homeContent';
import VideosReducer from '../services/videosCollection';
import EventReducer from '../services/eventContent';
import NoticeReducer from '../services/noticeboardContent';
import ArticalsReducer from '../services/articalsContent';
import AllvideosReducer from '../services/allVideosCollection';
import HistoryReducer from '../services/historyContent';
import FooterReducer from '../services/footerContent';
import HeaderReducer from "../services/headerContent";
import ContactReducer from '../services/contactContent';
import EventIDReducer from '../services/eventGetbyid';
import DonationReducer from '../services/donation';
import ArticalIDReducer from '../services/articalsGetbyid';
import kalvettuReducer from '../services/kalvettuContent';
import photoReducer from '../services/photoContent';
import AnandhanamReducer from '../services/anandhanam';
import historyDetails from '../services/historyDetailsSlice';
// import gopuramContent from '../services/gopuramContent';

export const store = configureStore({
  reducer: {
    homebanner: HomeBannerReducer,
    videos: VideosReducer,
    event: EventReducer,
    notice: NoticeReducer,
    articals: ArticalsReducer,
    allvideos: AllvideosReducer,
    history: HistoryReducer,
    contact: ContactReducer,
    footer: FooterReducer,
    header: HeaderReducer,
    eventid: EventIDReducer,
    articalid: ArticalIDReducer,
    donation: DonationReducer,
    kalvettu: kalvettuReducer,
    photo: photoReducer,
    anandhanam: AnandhanamReducer,
    historyDetails: historyDetails,
    // gopuram:gopuramContent,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;