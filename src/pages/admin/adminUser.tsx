import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminUser = () => {
  const [imageFile, setImageFile] = useState<File | null>(null); // Store the file object
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Store preview URL
  const [contactData, setContactData] = useState({
    title: "",
    body: "",
    phone: "",
    type: "",
    filepath: "",
  });

  console.log("Form Data:", contactData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Image Upload
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object for upload
    const formData = new FormData();
    formData.append("title", contactData.title);
    formData.append("body", contactData.body);
    formData.append("phone", contactData.phone);
    formData.append("type", contactData.type);
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
              <label className="form-label d-flex">POST</label>
              <select
                className="form-select w-100 "
                style={{ height: "40px", borderRadius: "5px", padding: "5px" }}
                id="inputGroupSelect01"
                name="type"
                value={contactData.type}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Article">Officer</option>
                <option value="Management">Management</option>
                <option value="Group">Group</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label d-flex">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={contactData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="row mt-4">
            <div className="col">
              <label className="form-label d-flex">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="body"
                value={contactData.body}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label className="form-label d-flex">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                maxLength={10}
                required
              />
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div className="row mt-4">
          <div className="col mt-4">
            <label className="form-label d-flex">Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              required
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
        </div>
      </form>
    </div>
  );
};

export default AdminUser;
