function PracticalExperienceForm({ practicalValue, setPracticalValue }) {
  return (
    <div className="practical-form">
      <h1 className="heading-text">Experience</h1>
      <label>Company Name</label>
      <input
        type="text"
        value={practicalValue.companyName}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            companyName: event.target.value,
          })
        }
      ></input>
      <label>Position Title</label>
      <input
        type="text"
        value={practicalValue.positionTitle}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            positionTitle: event.target.value,
          })
        }
      ></input>
      <label>Start date:</label>
      <input
        value={practicalValue.date.start}
        type="date"
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            date: { ...practicalValue.date, start: event.target.value },
          })
        }
      ></input>
      <label>End date:</label>
      <input
        value={practicalValue.date.end}
        type="date"
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            date: { ...practicalValue.date, end: event.target.value },
          })
        }
      ></input>
      <label>Description:</label>
      <textarea
        value={practicalValue.description}
        onChange={(event) =>
          setPracticalValue({
            ...practicalValue,
            description: event.target.value,
          })
        }
      ></textarea>
    </div>
  );
}

export default PracticalExperienceForm;
