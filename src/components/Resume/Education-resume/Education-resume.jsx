import "./Education-resume.css";

function EducationResume({ educationInfoList }) {
  return (
    <section className="education-section">
      {educationInfoList.length > 0 && (
        <div className="education-header-div">
          <h1 className="education-header">Education</h1>
        </div>
      )}
      {educationInfoList.map((educationValue, index) => (
        <div key={index} className="education">
          <div className="dates">
            <p>
              {educationValue.date.start &&
                educationValue.date.start + " - " + educationValue.date.end}
            </p>
          </div>
          <div className="education-info">
            <p className="school">{educationValue.school}</p>
            <p className="degree">{educationValue.degree}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default EducationResume;
