import { useState } from "react";
import "./Education-form.css";

function EducationForm({ educationInfoList, setEducationInfoList }) {
  const [educationValue, setEducationValue] = useState({
    school: "",
    degree: "",
    date: { start: "", end: "" },
  });

  function addEducationToList() {
    setEducationInfoList([...educationInfoList, educationValue]);
    setEducationValue({ school: "", degree: "", date: { start: "", end: "" } });
  }

  return (
    <form className="education-form">
      <h1 className="education-heading">Education</h1>
      <div className="input-group">
        <label className="input-label">School/College</label>
        <input
          type="text"
          value={educationValue.school}
          className="input-form"
          onChange={(e) =>
            setEducationValue({ ...educationValue, school: e.target.value })
          }
        ></input>
      </div>
      <div className="input-group">
        <label className="input-label">Degree</label>
        <input
          type="text"
          value={educationValue.degree}
          className="input-form"
          onChange={(e) =>
            setEducationValue({ ...educationValue, degree: e.target.value })
          }
        ></input>
      </div>
      <div className="input-group dates">
        <div className="date-group">
          <label className="input-label">Start date</label>
          <input
            type="text"
            value={educationValue.date.start}
            className="input-form"
            onChange={(e) =>
              setEducationValue({
                ...educationValue,
                date: { ...educationValue.date, start: e.target.value },
              })
            }
          ></input>
        </div>
        <div className="date-group">
          <label className="input-label">End date</label>
          <input
            type="text"
            value={educationValue.date.end}
            className="input-form"
            onChange={(e) =>
              setEducationValue({
                ...educationValue,
                date: { ...educationValue.date, end: e.target.value },
              })
            }
          ></input>
        </div>
      </div>
      <div className="button">
        <button
          type="button"
          className="submit-btn"
          onClick={addEducationToList}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
