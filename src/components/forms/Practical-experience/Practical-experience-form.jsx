import { useState, useEffect } from "react";
import "./Practical-experience.css";

function PracticalExperienceForm({
  practicalExperienceList,
  setPracticalExperienceList,
  setShowForm,
  practicalEditMode,
  setPracticalEditMode,
}) {
  const [practicalExperienceValue, setPracticalExperienceValue] = useState({
    company: "",
    position: "",
    date: { start: "", end: "" },
  });

  useEffect(() => {
    if (practicalEditMode.status) {
      const editedValue = practicalExperienceList[practicalEditMode.index];
      setPracticalExperienceValue(editedValue);
      setPracticalEditMode({ ...practicalEditMode, status: false });
    }
  }, [
    practicalEditMode.status,
    practicalEditMode.index,
    practicalExperienceList,
    setPracticalEditMode,
  ]);

  function handlePracticalExperienceToList() {
    if (practicalEditMode.index !== null) {
      const updatedList = practicalExperienceList.map((item, index) =>
        index === practicalEditMode.index ? practicalExperienceValue : item
      );
      setPracticalExperienceList(updatedList);
      setPracticalExperienceValue({
        company: "",
        position: "",
        date: { start: "", end: "" },
      });
      setPracticalEditMode({ status: false, index: null });
      setShowForm(false);
    } else {
      setPracticalExperienceList([
        ...practicalExperienceList,
        practicalExperienceValue,
      ]);
      setPracticalExperienceValue({
        company: "",
        position: "",
        date: { start: "", end: "" },
      });
      setShowForm(false);
    }
  }

  return (
    <form className="practical-form">
      <h1 className="practical-heading">Practical Experience</h1>
      <div className="input-group">
        <label className="input-label">Company name</label>
        <input
          type="text"
          value={practicalExperienceValue.company}
          className="input-form"
          onChange={(e) =>
            setPracticalExperienceValue({
              ...practicalExperienceValue,
              company: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="input-group">
        <label className="input-label">Position</label>
        <input
          type="text"
          value={practicalExperienceValue.position}
          className="input-form"
          onChange={(e) =>
            setPracticalExperienceValue({
              ...practicalExperienceValue,
              position: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="input-group dates">
        <div className="date-group">
          <label className="input-label">Start date</label>
          <input
            type="text"
            value={practicalExperienceValue.date.start}
            className="input-form"
            onChange={(e) =>
              setPracticalExperienceValue({
                ...practicalExperienceValue,
                date: {
                  ...practicalExperienceValue.date,
                  start: e.target.value,
                },
              })
            }
          ></input>
        </div>
        <div className="date-group">
          <label className="input-label">End Date</label>
          <input
            type="text"
            value={practicalExperienceValue.date.end}
            className="input-form"
            onChange={(e) =>
              setPracticalExperienceValue({
                ...practicalExperienceValue,
                date: { ...practicalExperienceValue.date, end: e.target.value },
              })
            }
          ></input>
        </div>
      </div>
      <div className="button">
        <button
          className="cancel-btn"
          type="button"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="submit-btn"
          onClick={handlePracticalExperienceToList}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default PracticalExperienceForm;
