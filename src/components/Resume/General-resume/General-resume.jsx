import "./General-resume.css";

function GeneralResume({ generalInfo }) {
  return (
    <header className="general-section">
      <h1 className="name">{generalInfo.fullName}</h1>
      <div className="contacts">
        <h2 className="email">{generalInfo.email}</h2>
        <h2 className="phone">{generalInfo.phoneNumber}</h2>
      </div>
    </header>
  );
}

export default GeneralResume;
