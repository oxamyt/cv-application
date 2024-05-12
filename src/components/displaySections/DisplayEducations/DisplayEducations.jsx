import "./DisplayEducations.css";
import EducationForm from "../../forms/Education-form/Education-form";
import { useState } from "react";

function DisplayEducations({
  educationInfoList,
  setEducationInfoList,
  educationEditMode,
  setEducationEditMode,
}) {
  const [showForm, setShowForm] = useState(false);

  function removeEducation(removeIndex) {
    setEducationInfoList(
      educationInfoList.filter((_, index) => index !== removeIndex)
    );
  }

  function handleEdit(editIndex) {
    setEducationEditMode({ status: true, index: editIndex });
    setShowForm(true);
  }

  return (
    <>
      {showForm ? (
        <EducationForm
          educationInfoList={educationInfoList}
          setEducationInfoList={setEducationInfoList}
          setShowForm={setShowForm}
          educationEditMode={educationEditMode}
          setEducationEditMode={setEducationEditMode}
        />
      ) : (
        <section className="education-display">
          <div className="display-header">
            <h1 className="display-heading">Education</h1>
          </div>
          <div className="educations">
            {educationInfoList.map((educationValue, index) => (
              <div key={index} className="education-display-div">
                <h2 className="education-school">{educationValue.school}</h2>
                <div className="btns">
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeEducation(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="add-education">
              <button
                type="button"
                className="add-btn"
                onClick={() => setShowForm(true)}
              >
                New education
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DisplayEducations;
