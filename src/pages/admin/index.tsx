// import { useEffect, useRef, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import JoditEditor from "jodit-react";
// // import "react-quill/dist/quill.snow.css";
// // import ReactQuill from "react-quill";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../_main/routeConstant";

// const Index = () => {
//   const [category, setCategory] = useState("");
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null);
//   const [editorContent, setEditorContent] = useState("");
//   const [content, setContent] = useState("");
//   const [articleData, setArticleData] = useState({
//     title: "",
//     type: "", // Stores selected option
//     filepath: "",
//     body: "",
//   });
//   console.log('articleData', articleData);

//   useEffect(() => {
//     fetch(`${API_URL}/article/article_create`, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(setArticleData)
//     }).then(res => res.json())
//   }, [])
// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// ) => {
//   const { name, value } = e.target;
//   setArticleData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

//   // const navigate = useNavigate();

//   const editor = useRef(null);
//   console.log('content', content);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ category, title, image, editorContent });
//     alert("Form Submitted!");
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };


//   return (
//     <div
//       className="justify-content-center align-item-center"
//       style={{
//         backgroundImage: `url("/src/assets/3484.jpg")`,
//         backgroundSize: "cover",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//         className="container p-4"
//         style={{
//           position: "relative",
//           background: "white",
//           top: "10%",
//           borderRadius: "10px",
//           boxShadow:
//             "rgba(255, 255, 255, 0.93) 0px 0.0625em 0.0625em, rgba(230, 228, 228, 0.79) 0px 0.125em 0.5em, rgba(234, 233, 233, 0.79) 0px 0px 0px 1px inset",
//         }}
//       >
//         <div className="text-center">
//           <div className="row">
//             <div className="col">
//               <label className="form-label d-flex">Category</label>
//               <select
//                 className="form-select w-100 "
//                 style={{ height: "40px", borderRadius: "5px", padding: "5px" }}
//                 id="inputGroupSelect01"
//                 name="type"
//                 value={articleData.type}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Choose...</option>
//                 <option value="Article">Article</option>
//                 <option value="Notice Board">Notice Board</option>
//                 <option value="Videos">Videos</option>
//               </select>
//             </div>
//             <div className="col">
//               <label className="form-label d-flex">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Title"
//                 name="title"
//                 value={articleData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="row">
//             <div className="col mt-4">
//               <label className="form-label d-flex">Upload Image</label>
//               <input
//                 type="file"
//                 className="form-control p-1"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 required
//               />
//               {image && (
//                 <img
//                   src={image}
//                   alt="Preview"
//                   className="mt-2"
//                   style={{ width: "100px", height: "auto" }}
//                 />
//               )}
//             </div>
//             <div className="col"></div>
//           </div>
//         </div>

//         {/* Editor */}
//         <div className="row mt-4">
//           <div className="col">
//             <label className="form-label">Editor</label>
//             <JoditEditor
//               ref={editor}
//               value={articleData.body}
//               onChange={(newContent) =>
//                 setArticleData((prev) => ({ ...prev, body: newContent }))
//               }
//               className="mb-4"
//             />
//           </div>
//         </div>

//         {/* Submit & Cancel Buttons */}
//         <div className="d-flex justify-content-center mt-4">
//           <button
//             type="submit"
//             className="btn mr-2"
//             style={{ backgroundColor: "#44233b", color: "white" }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => window.location.reload()}
//           >
//             Cancel
//           </button>
//           {/* <button type="button" className="btn border ml-2 text-white">
//             List View
//           </button> */}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Index;

import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JoditEditor from "jodit-react";
import { API_URL } from "../../_main/routeConstant";

const Index = () => {
  const [image, setImage] = useState<File | null>(null);
  const [articleData, setArticleData] = useState({
    title: "",
    type: "",
    filepath: "",
    body: "",
  });

  const editor = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setArticleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!image) return null;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://192.168.1.65:8000/file/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        return result.filePath; // Assuming API returns the uploaded file path
      } else {
        throw new Error(result.message || "Image upload failed");
      }
    } catch (error) {
      console.error("Image Upload Error:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const uploadedFilePath = await uploadImage();

      if (!uploadedFilePath) {
        alert("Image upload failed!");
        return;
      }

      const articlePayload = { ...articleData, filepath: uploadedFilePath };

      const response = await fetch(`${API_URL}/article/article_create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articlePayload),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Article Created:", result);
        alert("Article Submitted Successfully!");
      } else {
        throw new Error(result.message || "Article submission failed");
      }
    } catch (error) {
      console.error("Error submitting article:", error);
      alert("Submission failed! Check the console for details.");
    }
  };

  return (
    <div
      className="justify-content-center align-item-center"
      style={{ backgroundSize: "cover", width: "100%", height: "100vh" }}
    >
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="container p-4"
        style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0px 0.125em 0.5em rgba(234, 233, 233, 0.79)",
        }}
      >
        <div className="text-center">
          <div className="row">
            <div className="col">
              <label className="form-label d-flex">Category</label>
              <select
                className="form-select w-100"
                style={{ height: "40px", borderRadius: "5px", padding: "5px" }}
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
            </div>
          </div>
        </div>

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
        </div>
      </form>
    </div>
  );
};

export default Index;
