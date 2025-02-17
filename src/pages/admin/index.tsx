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
  const [imageFile, setImageFile] = useState<File | null>(null); // Store the file object
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Store preview URL
  const [articleData, setArticleData] = useState({
    title: "",
    type: "",
    filepath: "",
    body: "",
    date: "",
    time: "",
    author: "",
    location: "",
  });
  console.log("Form Data:", articleData);

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
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // Store the actual file
      setImagePreview(URL.createObjectURL(file)); // Create preview URL

      console.log("Selected Image:", {
        name: file.name,
        size: file.size,
        type: file.type,
      });
    }
  };
  //   try {
  //     const response = await fetch("http://192.168.1.65:8000/file/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       return result.filePath; // Assuming API returns the uploaded file path
  //     } else {
  //       throw new Error(result.message || "Image upload failed");
  //     }
  //   } catch (error) {
  //     console.error("Image Upload Error:", error);
  //     return null;
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object for upload
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("body", articleData.body);
    formData.append("type", articleData.type);
    formData.append("filepath", articleData.filepath);
    formData.append("date", articleData.date);
    formData.append("time", articleData.time);
    formData.append("author", articleData.author);
    formData.append("location", articleData.location);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    console.log("Final Form Data:", Object.fromEntries(formData.entries()));
    alert("Form Submitted!");
  };

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
        encType="multipart/form-data"
        className="container p-4"
        style={{
          position: "relative",
          background: "white",
          top: "10%",
          borderRadius: "10px",
          boxShadow:
            "rgba(255, 255, 255, 0.93) 0px 0.0625em 0.0625em, rgba(230, 228, 228, 0.79) 0px 0.125em 0.5em, rgba(234, 233, 233, 0.79) 0px 0px 0px 1px inset",
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
                <option value="">தேர்வு செய்யவும்...</option>
                <option value="Article">கட்டுரை</option>
                <option value="Notice Board">அறிக்கை பலகை</option>
                <option value="Videos">வீடியோக்கள்</option>
                <option value="god services">ஆன்மிக சேவையாளர்கள்</option>
                <option value="hall service">ஆலய சேவைகள்</option>
                <option value="services">சேவைகள்</option>
                <option value="collection">தொகுப்புக்கள் </option>
                <option value="hall booking">ஆலய முன்பதிவு</option>
                <option value="admin">நிர்வாகிகள்</option>
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
