import GeneralForm from "./General-form/General-form";
import DisplayEducations from "../displaySections/DisplayEducations/DisplayEducations";
import DisplayExperience from "../displaySections/DisplayPracticalExperience/DisplayPracticalExperience";
import "./Forms.css";

function Forms({
  generalInfo,
  setGeneralInfo,
  educationInfoList,
  setEducationInfoList,
  practicalExperienceList,
  setPracticalExperienceList,
}) {
  return (
    <section className="forms">
      <GeneralForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralForm>
      <DisplayEducations
        educationInfoList={educationInfoList}
        setEducationInfoList={setEducationInfoList}
      ></DisplayEducations>
      <DisplayExperience
        practicalExperienceList={practicalExperienceList}
        setPracticalExperienceList={setPracticalExperienceList}
      ></DisplayExperience>
    </section>
  );
}

export default Forms;
