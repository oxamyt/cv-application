function PracticalInfoDisplay({ practicalValue }) {
  return (
    <div className="bottom-section">
      <div className="practical-container">
        <div className="practical-info">
          <h1>{practicalValue.companyName}</h1>
          <h1>{practicalValue.positionTitle}</h1>
        </div>
        <div className="dates">
          <h2>{practicalValue.date.start}</h2>
          <h2>{practicalValue.date.end}</h2>
        </div>
      </div>
      <h3 className="description">{practicalValue.description}</h3>
    </div>
  );
}

export default PracticalInfoDisplay;
