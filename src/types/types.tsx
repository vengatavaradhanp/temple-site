export interface Article {
    id: number; 
    title: string; 
    body:string;
    media:string;
    date:string;
    filepath:string;
  }

  export interface Vedios {
    id: number; 
    title: string; 
    filepath:string;
  }

  export interface HistoryType {
    id: number; 
    title: string; 
    media:string;
    body:string;
  }

  export interface Notice {
    id: number; 
    title: string; 
    filepath:string;
    phone:string
    body:string;
  }

  export interface EventParams {
    id: string;
    script: string
    arch:string
    photo:string
  };

  export interface Event {
    id: number;
    title: string; 
    filepath:string;
    body:string;
  };

  export interface Menu {
    map(arg0: (item: Menu, index: number) => import("react/jsx-runtime").JSX.Element): unknown;
    sub_name: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    id: number;
    menu: string; 
    sub_menu:string;
  };