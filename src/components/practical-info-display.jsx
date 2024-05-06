function PracticalInfoDisplay({ practicalValue }) {
  return (
    <div className="bottom-section">
      <div className="practical-heading">
        <h1>Practical Experience</h1>
      </div>
      <div className="practical-container">
        <div className="practical-info">
          <h1 className="heading-company">{practicalValue.companyName}</h1>
          <h1 className="heading-position">{practicalValue.positionTitle}</h1>
        </div>
        <div className="dates">
          <h2>
            {practicalValue.date.start}
            {practicalValue.date.end && " - " + practicalValue.date.end}
          </h2>
        </div>
      </div>
      <h3 className="description">{practicalValue.description}</h3>
    </div>
  );
}

export default PracticalInfoDisplay;
