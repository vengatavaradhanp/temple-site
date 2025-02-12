// import React, { useRef, useState, useMemo } from "react";
// import JoditEditor from "jodit-react";
// // import HTMLReactParser from "html-react-parser/lib/index";
// // import Tittle from "../../layout/tittle/tittle";
// // import Header from "../../layout/header/header";
// // import Footer from "../../layout/footer/footer";

// const Index = () => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");

//   const [selectedOption, setSelectedOption] = useState("");

//   const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
//     const formRef = useRef<HTMLFormElement>(null);
//   return (
//     // <div className="homebannerImages">

//     //   {/* <Tittle/> */}
//     //   {/* <Header/> */}
//     //   <JoditEditor
//     //     ref={editor}
//     //     value={content}
//     //     onChange={(newContent) => setContent(newContent)}
//     //   />
//     //   <div>{content}</div>
//     //   {/* <Footer/> */}
//     // </div>
//     <div
//       className="form-group full-width"
//       style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
//     >
//       <label htmlFor="event">Category:</label>
//       <select
//         id="event"
//         name="event"
//         // className={`form-control ${validationErrors.event ? "is-invalid" : ""}`}
//         className={`form-control custom-select ${
//           validationErrors.event ? "is-invalid" : ""
//         }`}
//         value={event}
//         onChange={showFields}
//         required
//       >
//         <option value="Article">Article</option>
//         <option value="NoticeBoard">Notice Board</option>
//         <option value="Videos">Videos</option>
//       </select>
//       {validationErrors.event && (
//         <div className="invalid-feedback">{validationErrors.event}</div>
//       )}
//     </div>
//   );
// };

// export default Index;

import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JoditEditor from "jodit-react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, title, image, editorContent });
    alert("Form Submitted!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="container mt-4 border p-4"
      style={{
        backgroundImage: `url("/src/assets/3484.jpg")`,
        backgroundSize: "cover",

        // boxShadow:
        //   "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        borderRadius: "10px",
        opacity: "0.7",
      }}
    >
      <h2 className="my-4" style={{ textAlign: "center", color: "white" }}>Admin Homepage</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="input-group mb-3">
          <label className="form-label" style={{ color: "white" }}>
            Category
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
            }}
          >
            <option selected>Choose...</option>
            <option value="Article">Article</option>
            <option value="Notice Board">Notice Board</option>
            <option value="Videos">Videos</option>
          </select>
        </div> */}
        

        {/* Title Field */}
        <div className="mb-3">
          <label className="form-label" style={{ color: "white" }}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label" style={{ color: "white" }}>
            Upload Image
          </label>
          <input
            type="file"
            className="form-control p-1"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-2"
              style={{ width: "100px", height: "auto" }}
            />
          )}
        </div>

        {/* Text Editor */}
        {/* <div className="mb-3">
           <label className="form-label" style={{ color: "white" }}>
             Editor
           </label>
           <ReactQuill
             theme="snow"
             value={editorContent}
             onChange={setEditorContent}
             style={{ color: "white" }}
           />
         </div> */}
        <label className="form-label" style={{ color: "white" }}>
          Editor
        </label>
        <JoditEditor
          ref={editor}
          value={content}
          // onChange={(newContent) => setContent(newContent)}
          className="mb-4"
          onChange={setEditorContent}
        />

        {/* Submit & Cancel Buttons */}
        <div className="d-flex">
          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn border ml-2"
            style={{color: "white"}}
            onClick={() => navigate("/admin/listpage")}
          >
            List View
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
