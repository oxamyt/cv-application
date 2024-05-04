function GeneralInfoForm({ generalValue, setGeneralValue }) {
  return (
    <div className="general-form">
      <h1 className="heading-text">Personal Details</h1>
      <label>Full Name</label>
      <input
        type="text"
        value={generalValue.fullName}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, fullName: event.target.value })
        }
      ></input>
      <label>Email</label>
      <input
        type="email"
        value={generalValue.email}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, email: event.target.value })
        }
      ></input>
      <label>Phone Number</label>
      <input
        type="tel"
        value={generalValue.phoneNumber}
        onChange={(event) =>
          setGeneralValue({ ...generalValue, phoneNumber: event.target.value })
        }
      ></input>
    </div>
  );
}

export default GeneralInfoForm;
