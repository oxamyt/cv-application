import "../styles/forms.css";

function EducationInfoForm({ educationValue, setEducationValue }) {
  return (
    <form className="education form">
      <div className="heading-education">
        <h1 className="heading">Education</h1>
      </div>
      <label className="input-label">School</label>
      <input
        value={educationValue.school}
        className="input-form"
        type="text"
        onChange={(event) =>
          setEducationValue({ ...educationValue, school: event.target.value })
        }
      ></input>
      <label className="input-label">Degree</label>
      <input
        value={educationValue.degree}
        className="input-form"
        type="text"
        onChange={(event) =>
          setEducationValue({ ...educationValue, degree: event.target.value })
        }
      ></input>
      <div className="dates">
        <div className="date-start">
          <label className="input-label">Start date</label>
          <input
            value={educationValue.date.start}
            type="text"
            className="input-form"
            onChange={(event) =>
              setEducationValue({
                ...educationValue,
                date: { ...educationValue.date, start: event.target.value },
              })
            }
          ></input>
        </div>
        <div className="date-end">
          <label className="input-label">End date</label>
          <input
            value={educationValue.date.end}
            type="text"
            className="input-form"
            onChange={(event) =>
              setEducationValue({
                ...educationValue,
                date: { ...educationValue.date, end: event.target.value },
              })
            }
          ></input>
        </div>
      </div>
    </form>
  );
}
export default EducationInfoForm;
