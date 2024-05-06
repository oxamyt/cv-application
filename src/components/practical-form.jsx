import "../styles/forms.css";

function PracticalExperienceForm({ practicalValue, setPracticalValue }) {
  return (
    <form className="practical form">
      <div className="heading-practical">
        <h1 className="heading text">Experience</h1>
      </div>
      <label className="input-label">Company Name</label>
      <input
        type="text"
        className="input-form"
        value={practicalValue.companyName}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            companyName: event.target.value,
          })
        }
      ></input>
      <label className="input-label">Position Title</label>
      <input
        type="text"
        className="input-form"
        value={practicalValue.positionTitle}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            positionTitle: event.target.value,
          })
        }
      ></input>
      <div className="dates">
        <div className="date-start">
          <label className="input-label">Start date</label>
          <input
            value={practicalValue.date.start}
            type="text"
            className="input-form"
            onChange={(event) =>
              setPracticalValue({
                ...practicalValue,
                date: { ...practicalValue.date, start: event.target.value },
              })
            }
          ></input>
        </div>
        <div className="date-end">
          <label className="input-label">End date</label>
          <input
            value={practicalValue.date.end}
            type="text"
            className="input-form"
            onChange={(event) =>
              setPracticalValue({
                ...practicalValue,
                date: { ...practicalValue.date, end: event.target.value },
              })
            }
          ></input>
        </div>
      </div>
      <label className="input-label">Description</label>
      <textarea
        className="input-form"
        value={practicalValue.description}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            description: event.target.value,
          })
        }
      ></textarea>
    </form>
  );
}

export default PracticalExperienceForm;
