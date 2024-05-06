import "../styles/forms.css";

function GeneralInfoForm({ generalValue, setGeneralValue }) {
  return (
    <form className="general form">
      <div className="heading-general">
        <h1 className="heading">Personal Details</h1>
      </div>
      <label className="input-label">Full Name</label>
      <input
        type="text"
        className="input-form"
        value={generalValue.fullName}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, fullName: event.target.value })
        }
      ></input>
      <label className="input-label">Email</label>
      <input
        type="email"
        className="input-form"
        value={generalValue.email}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, email: event.target.value })
        }
      ></input>
      <label className="input-label">Phone Number</label>
      <input
        type="tel"
        className="input-form"
        value={generalValue.phoneNumber}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, phoneNumber: event.target.value })
        }
      ></input>
    </form>
  );
}

export default GeneralInfoForm;
