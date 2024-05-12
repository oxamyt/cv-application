import GeneralForm from "./General-form/General-form";
import DisplayEducations from "../displaySections/DisplayEducations/DisplayEducations";
import DisplayExperience from "../displaySections/DisplayPracticalExperience/DisplayPracticalExperience";
import "./Forms.css";
import { useState } from "react";

function Forms({
  generalInfo,
  setGeneralInfo,
  educationInfoList,
  setEducationInfoList,
  practicalExperienceList,
  setPracticalExperienceList,
}) {
  const [educationEditMode, setEducationEditMode] = useState({
    status: false,
    index: null,
  });
  const [practicalEditMode, setPracticalEditMode] = useState({
    status: false,
    index: null,
  });

  return (
    <section className="forms">
      <GeneralForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralForm>
      <DisplayEducations
        educationInfoList={educationInfoList}
        setEducationInfoList={setEducationInfoList}
        setEducationEditMode={setEducationEditMode}
        educationEditMode={educationEditMode}
      ></DisplayEducations>
      <DisplayExperience
        practicalExperienceList={practicalExperienceList}
        setPracticalExperienceList={setPracticalExperienceList}
        practicalEditMode={practicalEditMode}
        setPracticalEditMode={setPracticalEditMode}
      ></DisplayExperience>
    </section>
  );
}

export default Forms;
