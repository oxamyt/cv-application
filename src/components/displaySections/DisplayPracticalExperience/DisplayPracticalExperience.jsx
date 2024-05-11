import "./DisplayPracticalExperience.css";
import PracticalExperienceForm from "../../forms/Practical-experience/Practical-experience-form";
import { useState } from "react";

function DisplayExperience({
  practicalExperienceList,
  setPracticalExperienceList,
}) {
  const [showForm, setShowForm] = useState(false);

  function removeExperience(removeIndex) {
    setPracticalExperienceList(
      practicalExperienceList.filter((_, index) => index !== removeIndex)
    );
  }

  return (
    <>
      {showForm ? (
        <PracticalExperienceForm
          practicalExperienceList={practicalExperienceList}
          setPracticalExperienceList={setPracticalExperienceList}
          setShowForm={setShowForm}
        />
      ) : (
        <section className="practical-display">
          <div className="display-header">
            <h1 className="display-heading">Practical Experience</h1>
          </div>
          <div className="practicals">
            {practicalExperienceList.map((practicalValue, index) => (
              <div key={index} className="experience-display-div">
                <h2 className="experience-company">{practicalValue.company}</h2>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeExperience(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="add-experience">
              <button
                type="button"
                className="add-btn"
                onClick={() => setShowForm(true)}
              >
                New experience
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DisplayExperience;
