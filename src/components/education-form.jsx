function EducationInfoForm({ educationValue, setEducationValue }) {
  return (
    <div className="education-form">
      <h1 className="heading-text">Education</h1>
      <label>School</label>
      <input
        value={educationValue.school}
        type="text"
        onChange={(event) =>
          setEducationValue({ ...educationValue, school: event.target.value })
        }
      ></input>
      <label>Degree</label>
      <input
        value={educationValue.degree}
        type="text"
        onChange={(event) =>
          setEducationValue({ ...educationValue, degree: event.target.value })
        }
      ></input>
      <label>Start date:</label>
      <input
        value={educationValue.date.start}
        type="date"
        onChange={(event) =>
          setEducationValue({
            ...educationValue,
            date: { ...educationValue.date, start: event.target.value },
          })
        }
      ></input>
      <label>End date:</label>
      <input
        value={educationValue.date.end}
        type="date"
        onChange={(event) =>
          setEducationValue({
            ...educationValue,
            date: { ...educationValue.date, end: event.target.value },
          })
        }
      ></input>
    </div>
  );
}
export default EducationInfoForm;
