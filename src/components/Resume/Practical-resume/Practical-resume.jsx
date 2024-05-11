import "./Practical-resume.css";

function PracticalResume({ practicalExperienceList }) {
  return (
    <section className="practical-section">
      {practicalExperienceList.length > 0 && (
        <div className="practical-header-div">
          <h1 className="practical-header">Practical Experience</h1>
        </div>
      )}
      {practicalExperienceList.map((practicalValue, index) => (
        <div key={index} className="experience">
          <div className="dates">
            <p>
              {practicalValue.date.start &&
                practicalValue.date.start + " - " + practicalValue.date.end}
            </p>
          </div>
          <div className="practical-info">
            <p className="company">{practicalValue.company}</p>
            <p className="position">{practicalValue.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PracticalResume;
