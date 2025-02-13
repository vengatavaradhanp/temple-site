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
// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [content, setContent] = useState("");
  const [articleData, setArticleData] = useState({
    title: "",
    type: "", // Stores selected option
    filepath: null as File | null,
    body: "",
  });
  console.log('articleData', articleData);
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setArticleData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  // const navigate = useNavigate();

  const editor = useRef(null);
  console.log('content', content);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, title, image, editorContent });
    alert("Form Submitted!");
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div
      className="justify-content-center align-item-center"
      style={{
        backgroundImage: `url("/src/assets/3484.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="container p-4"
        style={{
          position: "relative",
          background: "white",
          top: "10%",
          borderRadius: "10px",
          boxShadow:
            "rgba(255, 255, 255, 0.93) 0px 0.0625em 0.0625em, rgba(230, 228, 228, 0.79) 0px 0.125em 0.5em, rgba(234, 233, 233, 0.79) 0px 0px 0px 1px inset",
        }}
        encType="multipart/form-data"
      >
        <div className="text-center">
          <div className="row">
            <div className="col">
              <label className="form-label d-flex">Category</label>
              <select
                className="form-select w-100 "
                style={{ height: "40px", borderRadius: "5px", padding: "5px" }}
                id="inputGroupSelect01"
                name="type"
                value={articleData.type}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Article">Article</option>
                <option value="Notice Board">Notice Board</option>
                <option value="Videos">Videos</option>
              </select>
              {/* <select
                className="form-select form-select-lg mb-3 w-100"
                style={{ height: "40px", borderRadius: "5px"}}
                value={articleData.type}
                onChange={handleChange}
              >
                <option selected>Choose...</option>
                <option value="Article">Article</option>
                <option value="NoticeBoard">Notice Board</option>
                <option value="Videos">Videos</option>
              </select> */}
            </div>
            <div className="col">
              <label className="form-label d-flex">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={articleData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="row">
            <div className="col mt-4">
              <label className="form-label d-flex">Upload Image</label>
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
            <div className="col"></div>
          </div>
        </div>

        {/* Editor */}
        <div className="row mt-4">
          <div className="col">
            <label className="form-label">Editor</label>
            <JoditEditor
              ref={editor}
              value={articleData.body}
              onChange={(newContent) =>
                setArticleData((prev) => ({ ...prev, body: newContent }))
              }
              className="mb-4"
            />
          </div>
        </div>

        {/* Submit & Cancel Buttons */}
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn mr-2"
            style={{ backgroundColor: "#44233b", color: "white" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
          {/* <button type="button" className="btn border ml-2 text-white">
            List View
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Index;
