import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JoditEditor from "jodit-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../_main/store";
import { createItem, updateItem } from "../../services/listPath";
import TamilVoiceEditor from "../../components/voice";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null); // Store the file object
  const [imagePreview, setImagePreview] = useState<string | null>(
    location.state?.item?.image || null
  ); // Store preview URL
  const [articleData, setArticleData] = useState({
    id: location.state?.item?.id || null,
    title: location.state?.item?.title || "",
    type: location.state?.item?.type || "",
    body: location.state?.item?.body || "",
    date: location.state?.item?.date || "",
    time: location.state?.item?.time || "",
    author: location.state?.item?.author || "",
    location: location.state?.item?.location || "",
    media: location.state?.item?.media || "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object for upload
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("body", articleData.body);
    formData.append("type", articleData.type);
    formData.append("media", articleData.media);
    formData.append("date", articleData.date);
    formData.append("time", articleData.time);
    formData.append("author", articleData.author);
    formData.append("location", articleData.location);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    

    if (articleData.id) {
      await dispatch(updateItem({ ...articleData, filepath: imageFile }));
    } else {
      await dispatch(createItem(formData));
    }

    navigate("/admin/main");
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
                <option value="article">கட்டுரை</option>
                <option value="Notice Board">அறிக்கை பலகை</option>
                <option value="videos">வீடியோக்கள்</option>
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
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
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
              // ref={editor}
              value={articleData.body}
              // onChange={(newContent) =>
              //   setArticleData((prev) => ({ ...prev, body: newContent }))
              // }
              config={{
                speechRecognize: {
                  lang: "ta-IN",
                },
              }}
              className="mb-4"
            />
            {/* <TamilVoiceEditor/> */}
          </div>
        </div>

        {/* Submit & Cancel Buttons */}
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn mr-2"
            style={{ backgroundColor: "#44233b", color: "white" }}
          >
            {articleData.id ? "Update" : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/main")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;

