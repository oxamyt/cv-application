function EducationInfoDisplay({ educationValue }) {
  return (
    <div className="mid-section">
      <div className="education-info">
        <h1 className="heading-school">{educationValue.school}</h1>
        <h2 className="heading-degree">{educationValue.degree}</h2>
      </div>
      <div className="dates">
        <h2 className="date start">{educationValue.date.start}</h2>
        <h2 className="date end">{educationValue.date.end}</h2>
      </div>
    </div>
  );
}

export default EducationInfoDisplay;
