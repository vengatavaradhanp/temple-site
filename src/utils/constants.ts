// import { Link } from "react-router-dom";
import { ANANDHANAM_ROUTE, BASE_ROUTE, CONTACT_ROUTE, CONTACTSEVA_ROUTE, DEVIGAL_ROUTE, EVENT_ROUTE, FORMS_ROUTE, GOPURAM_ROUTE, HALL_ROUTE, KALVETTU_ROUTE, KATTADAM_ROUTE, PHOTO_ROUTE, POOJAI1, POOJAI2, TEMPLEARC_ROUTE } from "../_main/routeConstant";

export const MenuItems = [
  {
    id: 1,
    menu: "முகப்பு",
    link: BASE_ROUTE,
    sub_menu: [],
  },
  {
    id: 2,
    menu: "தல வரலாறு ",
    link: null,
    sub_menu: [
      {
        id: 9,
        sub_name: "கல்வெட்டுகள் ",
        link: KALVETTU_ROUTE,
        sub_sub_menu: [],
      },
      {
        id: 10,
        sub_name: "கட்டமைப்புகள் ",
        link: TEMPLEARC_ROUTE,
        sub_sub_menu: [],
      },
      {
        id: 11,
        sub_name: "கோபுரங்கள் ",
        link: GOPURAM_ROUTE,
        sub_sub_menu: [],
      },
      {
        id: 12,
        sub_name: "மண்டபங்கள் & சிற்பங்கள் ",
        link: HALL_ROUTE,
        sub_sub_menu: [],
      },
      {
        id: 13,
        sub_name: "சிலைகள் & தெய்வங்கள்",
        link: DEVIGAL_ROUTE,
        sub_sub_menu: [],
      },
    ],
  },
  {
    id: 3,
    menu: "ஆன்மிக சேவையாளர்கள் ",
    link: null,
    sub_menu: [
      {
        id: 14,
        sub_name: "கட்டணக்காரர்கள் ",
        sub_sub_menu: [],
        link: KATTADAM_ROUTE,
      },
      {
        id: 15,
        sub_name: "நன்கொடையாளர்கள்",
        link: null,
        sub_sub_menu: [
          {
            id: 1,
            sub_sub_name: "விஐபி",
            link: BASE_ROUTE,
          },
          {
            id: 2,
            sub_sub_name: "சீரற்ற நன்கொடையாளர்",
            link: BASE_ROUTE,
          },
          {
            id: 3,
            sub_sub_name: "மீண்டும் நன்கொடையாளர்",
            link: BASE_ROUTE,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    menu: "ஆலய சேவைகள் ",
    link: null,
    sub_menu: [
      {
        id: 1,
        sub_name: "தைப்பூசம் ",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/2",
      },
      {
        id: 2,
        sub_name: "பங்குனி உத்திர திருவிழா ",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/3",
      },
      {
        id: 3,
        sub_name: "வைகாசி விசாகம்",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/4",
      },
      {
        id: 4,
        sub_name: "ஆடி கிருத்திகை",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/5",
      },
      {
        id: 5,
        sub_name: "கந்த சஷ்டி விழா",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/6",
      },
      {
        id: 6,
        sub_name: "சூரசம்ஹாரம்",
        sub_sub_menu: [],
        link: EVENT_ROUTE + "/7",
      },
    ],
  },
  {
    id: 5,
    menu: "சேவைகள்",
    link: null,
    sub_menu: [
      {
        id: 19,
        sub_name: "அன்னதானம் ",
        sub_sub_menu: [],
        link: ANANDHANAM_ROUTE,
      },
      {
        id: 20,
        sub_name: "பூஜை + பிரசாதம் ",
        sub_sub_menu: [],
        link: POOJAI1,
      },
      {
        id: 21,
        sub_name: "அன்னதானம் + பூஜை + பிரசாதம்",
        sub_sub_menu: [],
        link: POOJAI2,
      },
    ],
  },
  {
    id: 6,
    menu: "தொகுப்புக்கள் ",
    link: null,
    sub_menu: [
      {
        id: 22,
        sub_name: "கடந்த வருடம் ",
        sub_sub_menu: [],
        link: PHOTO_ROUTE,
      },
      {
        id: 23,
        sub_name: "இந்த வருடம்",
        sub_sub_menu: [],
        link: PHOTO_ROUTE,
      },
    ],
  },
  {
    id: 7,
    menu: "ஆலய முன்பதிவு ",
    link: null,
    sub_menu: [
      {
        id: 31,
        sub_name: "விண்ணப்பங்கள்",
        sub_sub_menu: [],
        link: FORMS_ROUTE,
      },
    ],
  },
  {
    id: 8,
    menu: "நிர்வாகிகள் ",
    link: null,
    sub_menu: [
      {
        id: 28,
        sub_name: "அறங்காவலர்கள் குழு ",
        sub_sub_menu: [],
        link: PHOTO_ROUTE,
      },
      {
        id: 29,
        sub_name: "ஆலய நிர்வாகி ",
        sub_sub_menu: [],
        link: CONTACT_ROUTE,
      },
      {
        id: 30,
        sub_name: "திருப்பனி குழு",
        sub_sub_menu: [],
        link: CONTACTSEVA_ROUTE,
      },
    ],
  },
];
