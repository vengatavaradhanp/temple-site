import React, { useRef, useState, useMemo } from "react";
import JoditEditor from "jodit-react";
// import HTMLReactParser from "html-react-parser/lib/index";
// import Tittle from "../../layout/tittle/tittle";
// import Header from "../../layout/header/header";
// import Footer from "../../layout/footer/footer";

const Index = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div className="homebannerImages">
      {/* <Tittle/> */}
      {/* <Header/> */}
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <div>{content}</div>
      {/* <Footer/> */}
    </div>
  );
};

export default Index;
