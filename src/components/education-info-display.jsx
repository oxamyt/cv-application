function EducationInfoDisplay({ educationValue }) {
  return (
    <div className="mid-section">
      <div className="education-heading">
        <h1>Education</h1>
      </div>
      <div className="education-container">
        <div className="education-info">
          <h1 className="heading-school">{educationValue.school}</h1>
          <h2 className="heading-degree">{educationValue.degree}</h2>
        </div>
        <div className="dates">
          <h2 className="date">
            {educationValue.date.start}
            {educationValue.date.end && " - " + educationValue.date.end}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default EducationInfoDisplay;
