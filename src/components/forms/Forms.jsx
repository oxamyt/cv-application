import GeneralForm from "./General-form/General-form";
import EducationForm from "./Education-form/Education-form";
import PracticalExperienceForm from "./Practical-experience/Practical-experience-form";
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
      <EducationForm
        educationInfoList={educationInfoList}
        setEducationInfoList={setEducationInfoList}
      ></EducationForm>
      <PracticalExperienceForm
        practicalExperienceList={practicalExperienceList}
        setPracticalExperienceList={setPracticalExperienceList}
      ></PracticalExperienceForm>
    </section>
  );
}

export default Forms;
