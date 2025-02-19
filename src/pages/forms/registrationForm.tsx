import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbComponent from "../../components/common/Breadcrumb";

// படிவ தரவுக்கான வகை வரையறுக்கவும்
interface FormData {
  date: string;
  time: string;
  brideName: string;
  brideAadhar: File | null;
  groomName: string;
  groomAadhar: File | null;
  registerName: string;
  registerPhone: string;
  alternatePhone: string;
  HallName: string;
  HallAddress: string;
  TokenNumber: string;
  IyyerName: string;
  birthdayDate: string;
  birthdayTime: string;
  birthdayName: string;
  anniversaryDate: string;
  anniversaryTime: string;
  coupleName: string;
}

// சரிபார்ப்பு பிழைகளுக்கான வகை வரையறுக்கவும்
interface ValidationErrors {
  [key: string]: string;
}

const RegistrationForm: React.FunctionComponent = () => {
  const [event, setEvent] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    brideName: "",
    brideAadhar: null,
    groomName: "",
    groomAadhar: null,
    registerName: "",
    registerPhone: "",
    alternatePhone: "",
    HallName: "",
    HallAddress: "",
    TokenNumber: "",
    IyyerName: "",
    birthdayDate: "",
    birthdayTime: "",
    birthdayName: "",
    anniversaryDate: "",
    anniversaryTime: "",
    coupleName: "",
  });

  console.log("formData", formData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    let newValue: string | File | null = value;

    if (files) {
      const file = files[0];
      const fileSizeMB = file.size / 1024 / 1024;
      const fileType = file.type;

      if (fileSizeMB > 2) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "கோப்பு அளவு 2MB க்கும் குறைவாக இருக்க வேண்டும்",
        }));
        return;
      }

      if (
        !["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
          fileType
        )
      ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "கோப்பு வகை JPEG, JPG, PNG, அல்லது PDF ஆக இருக்க வேண்டும்",
        }));
        return;
      }

      newValue = file;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    if (!formData.date) errors.date = "தேதியைத் தேர்ந்தெடுக்கவும்";
    if (!formData.time) errors.time = "நேரத்தைத் தேர்ந்தெடுக்கவும்";
    if (!formData.brideName) errors.brideName = "மணமகள் பெயரை உள்ளிடவும்";
    if (!formData.brideAadhar) errors.brideAadhar = "மணமகள் ஆதாரை பதிவேற்றவும்";
    if (!formData.groomName) errors.groomName = "மணமகன் பெயரை உள்ளிடவும்";
    if (!formData.groomAadhar) errors.groomAadhar = "மணமகன் ஆதாரை பதிவேற்றவும்";
    if (!formData.registerName) errors.registerName = "பதிவு பெயரை உள்ளிடவும்";
    if (!formData.registerPhone)
      errors.registerPhone = "பதிவு தொலைபேசி எண்ணை உள்ளிடவும்";
    if (!formData.HallName) errors.HallName = "மண்டபத்தின் பெயரை உள்ளிடவும்";
    if (!formData.TokenNumber) errors.TokenNumber = "டோக்கன் எண்ணை உள்ளிடவும்";
    if (!formData.IyyerName) errors.IyyerName = "ஐயர் பெயரை உள்ளிடவும்";
    if (event === "birthday" && !formData.birthdayDate)
      errors.birthdayDate = "பிறந்தநாள் தேதியைத் தேர்ந்தெடுக்கவும்";
    if (event === "birthday" && !formData.birthdayTime)
      errors.birthdayTime = "பிறந்தநாள் நேரத்தைத் தேர்ந்தெடுக்கவும்";
    if (event === "birthday" && !formData.birthdayName)
      errors.birthdayName = "பிறந்தநாள் நபரின் பெயரை உள்ளிடவும்";
    if (event === "anniversary" && !formData.anniversaryDate)
      errors.anniversaryDate = "ஆண்டுவிழா தேதியைத் தேர்ந்தெடுக்கவும்";
    if (event === "anniversary" && !formData.anniversaryTime)
      errors.anniversaryTime = "ஆண்டுவிழா நேரத்தைத் தேர்ந்தெடுக்கவும்";
    if (event === "anniversary" && !formData.coupleName)
      errors.coupleName = "இருவரின் பெயரை உள்ளிடவும்";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorField = formRef.current?.querySelector(
        ".is-invalid"
      ) as HTMLElement;
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth" });
        firstErrorField.focus();
      }
      return;
    }
    // படிவ சமர்ப்பிப்பு தர்க்கம் இங்கே சேர்க்கவும்
    console.log(formData);
  };

  const showFields = (e: ChangeEvent<HTMLSelectElement>) => {
    setEvent(e.target.value);
  };

  return (
    <div className="homebannerImages container">
      <BreadcrumbComponent page="ஆலய முன்பதிவு" sub="விண்ணப்பங்கள்" />
      <form
        id="registrationForm"
        onSubmit={handleSubmit}
        noValidate
        ref={formRef}
      >
        <div
          className="form-group full-width"
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          <label htmlFor="event">நிகழ்வைத் தேர்ந்தெடுக்கவும்:</label>
          <select
            id="event"
            name="event"
            className={`form-control custom-select ${
              validationErrors.event ? "is-invalid" : ""
            }`}
            value={event}
            onChange={showFields}
            required
          >
            <option value="">நிகழ்வைத் தேர்ந்தெடுக்கவும்......</option>
            <option value="marrige">திருமணம்</option>
            <option value="Engagement">நிச்சயதார்த்தம்</option>
            <option value="birthday">பிறந்தநாள்</option>
            <option value="Anniversary">ஆண்டுவிழா</option>
          </select>
          {validationErrors.event && (
            <div className="invalid-feedback">{validationErrors.event}</div>
          )}
        </div>

        {(event === "marrige" ||
          event === "Engagement" ||
          event === "Anniversary") && (
          <div
            id="marrigeFields"
            className="form-grid"
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="date">தேதி:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={`form-control ${
                    validationErrors.date ? "is-invalid" : ""
                  }`}
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.date && (
                  <div className="invalid-feedback">
                    {validationErrors.date}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="time">நேரம்:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className={`form-control ${
                    validationErrors.time ? "is-invalid" : ""
                  }`}
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.time && (
                  <div className="invalid-feedback">
                    {validationErrors.time}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="brideName">மணமகள் பெயர்:</label>
                <input
                  type="text"
                  id="brideName"
                  name="brideName"
                  className={`form-control ${
                    validationErrors.brideName ? "is-invalid" : ""
                  }`}
                  value={formData.brideName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.brideName && (
                  <div className="invalid-feedback">
                    {validationErrors.brideName}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="groomName">மணமகன் பெயர்:</label>
                <input
                  type="text"
                  id="groomName"
                  name="groomName"
                  className={`form-control ${
                    validationErrors.groomName ? "is-invalid" : ""
                  }`}
                  value={formData.groomName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.groomName && (
                  <div className="invalid-feedback">
                    {validationErrors.groomName}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="brideAadhar">மணமகள் ஆதார்:</label>
                <input
                  type="file"
                  id="brideAadhar"
                  name="brideAadhar"
                  className={`form-control ${
                    validationErrors.brideAadhar ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.brideAadhar && (
                  <div className="invalid-feedback">
                    {validationErrors.brideAadhar}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="groomAadhar">மணமகன் ஆதார்:</label>
                <input
                  type="file"
                  id="groomAadhar"
                  name="groomAadhar"
                  className={`form-control ${
                    validationErrors.groomAadhar ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.groomAadhar && (
                  <div className="invalid-feedback">
                    {validationErrors.groomAadhar}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="registerName">பதிவு பெயர்:</label>
                <input
                  type="text"
                  id="registerName"
                  name="registerName"
                  className={`form-control ${
                    validationErrors.registerName ? "is-invalid" : ""
                  }`}
                  value={formData.registerName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.registerName && (
                  <div className="invalid-feedback">
                    {validationErrors.registerName}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="registerPhone">பதிவு தொலைபேசி எண்:</label>
                <input
                  type="tel"
                  id="registerPhone"
                  name="registerPhone"
                  className={`form-control ${
                    validationErrors.registerPhone ? "is-invalid" : ""
                  }`}
                  value={formData.registerPhone}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.registerPhone && (
                  <div className="invalid-feedback">
                    {validationErrors.registerPhone}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="alternatePhone">மாற்று தொலைபேசி எண்:</label>
                <input
                  type="tel"
                  id="alternatePhone"
                  name="alternatePhone"
                  className="form-control"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="HallName">மண்டபத்தின் பெயர்:</label>
                <input
                  type="text"
                  id="HallName"
                  name="HallName"
                  className={`form-control ${
                    validationErrors.HallName ? "is-invalid" : ""
                  }`}
                  value={formData.HallName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.HallName && (
                  <div className="invalid-feedback">
                    {validationErrors.HallName}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="TokenNumber">டோக்கன் எண்:</label>
                <input
                  type="text"
                  id="TokenNumber"
                  name="TokenNumber"
                  className={`form-control ${
                    validationErrors.TokenNumber ? "is-invalid" : ""
                  }`}
                  value={formData.TokenNumber}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.TokenNumber && (
                  <div className="invalid-feedback">
                    {validationErrors.TokenNumber}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="IyyerName">ஐயர் பெயர்:</label>
                <input
                  type="text"
                  id="IyyerName"
                  name="IyyerName"
                  className={`form-control ${
                    validationErrors.IyyerName ? "is-invalid" : ""
                  }`}
                  value={formData.IyyerName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.IyyerName && (
                  <div className="invalid-feedback">
                    {validationErrors.IyyerName}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#44233B" }}
                >
                  சமர்ப்பிக்கவும்
                </button>
              </div>
            </div>
          </div>
        )}

        {event === "birthday" && (
          <div
            id="birthdayFields"
            className="form-grid"
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="birthdayDate">பிறந்தநாள் தேதி:</label>
                <input
                  type="date"
                  id="birthdayDate"
                  name="birthdayDate"
                  className={`form-control ${
                    validationErrors.birthdayDate ? "is-invalid" : ""
                  }`}
                  value={formData.birthdayDate}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.birthdayDate && (
                  <div className="invalid-feedback">
                    {validationErrors.birthdayDate}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="birthdayTime">பிறந்தநாள் நேரம்:</label>
                <input
                  type="time"
                  id="birthdayTime"
                  name="birthdayTime"
                  className={`form-control ${
                    validationErrors.birthdayTime ? "is-invalid" : ""
                  }`}
                  value={formData.birthdayTime}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.birthdayTime && (
                  <div className="invalid-feedback">
                    {validationErrors.birthdayTime}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="birthdayName">பிறந்தநாள் நபரின் பெயர்:</label>
                <input
                  type="text"
                  id="birthdayName"
                  name="birthdayName"
                  className={`form-control ${
                    validationErrors.birthdayName ? "is-invalid" : ""
                  }`}
                  value={formData.birthdayName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.birthdayName && (
                  <div className="invalid-feedback">
                    {validationErrors.birthdayName}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="registerName">பதிவு பெயர்:</label>
                <input
                  type="text"
                  id="registerName"
                  name="registerName"
                  className={`form-control ${
                    validationErrors.registerName ? "is-invalid" : ""
                  }`}
                  value={formData.registerName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.registerName && (
                  <div className="invalid-feedback">
                    {validationErrors.registerName}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="registerPhone">பதிவு தொலைபேசி எண்:</label>
                <input
                  type="tel"
                  id="registerPhone"
                  name="registerPhone"
                  className={`form-control ${
                    validationErrors.registerPhone ? "is-invalid" : ""
                  }`}
                  value={formData.registerPhone}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.registerPhone && (
                  <div className="invalid-feedback">
                    {validationErrors.registerPhone}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="alternatePhone"> மாற்று தொலைபேசி எண்:</label>
                <input
                  type="tel"
                  id="alternatePhone"
                  name="alternatePhone"
                  className="form-control"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="HallName">மண்டபத்தின் பெயர்:</label>
                <input
                  type="text"
                  id="HallName"
                  name="HallName"
                  className={`form-control ${
                    validationErrors.HallName ? "is-invalid" : ""
                  }`}
                  value={formData.HallName}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.HallName && (
                  <div className="invalid-feedback">
                    {validationErrors.HallName}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="TokenNumber">டோக்கன் எண்:</label>
                <input
                  type="text"
                  id="TokenNumber"
                  name="TokenNumber"
                  className={`form-control ${
                    validationErrors.TokenNumber ? "is-invalid" : ""
                  }`}
                  value={formData.TokenNumber}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.TokenNumber && (
                  <div className="invalid-feedback">
                    {validationErrors.TokenNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#44233B" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;