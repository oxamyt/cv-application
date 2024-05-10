import "./General-form.css";

function GeneralForm({ generalInfo, setGeneralInfo }) {
  return (
    <form className="general-form">
      <h1 className="general-heading">Personal Information</h1>
      <div className="input-group">
        <label className="input-label">Full name</label>
        <input
          type="text"
          value={generalInfo.fullName}
          className="input-form"
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, fullName: e.target.value })
          }
        ></input>
      </div>
      <div className="input-group">
        <label className="input-label">Email</label>
        <input
          type="email"
          value={generalInfo.email}
          className="input-form"
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, email: e.target.value })
          }
        ></input>
      </div>
      <div className="input-group">
        <label className="input-label">Phone Number</label>
        <input
          type="tel"
          value={generalInfo.phoneNumber}
          className="input-form"
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value })
          }
        ></input>
      </div>
    </form>
  );
}

export default GeneralForm;
