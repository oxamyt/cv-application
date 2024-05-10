function PracticalResume({ practicalExperienceList }) {
  return (
    <section className="practical-section">
      {practicalExperienceList.map((practicalValue, index) => (
        <div key={index} className="experience">
          <div className="dates">
            <p>
              {practicalValue.date.start}-{practicalValue.date.end}
            </p>
          </div>
          <div className="practical-info">
            <p>{practicalValue.company}</p>
            <p>{practicalValue.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PracticalResume;
