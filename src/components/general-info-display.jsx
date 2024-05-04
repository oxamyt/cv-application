function GeneralInfoDisplay({ generalValue }) {
  return (
    <div className="top-section">
      <h1 className="heading-name">{generalValue.fullName}</h1>
      <div className="contact">
        <h2>{generalValue.email}</h2>
        <h2>{generalValue.phoneNumber}</h2>
      </div>
    </div>
  );
}

export default GeneralInfoDisplay;
