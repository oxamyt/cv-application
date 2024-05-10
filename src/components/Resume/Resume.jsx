import GeneralResume from "./General-resume/General-resume";
import EducationResume from "./Education-resume/Education-resume";
import PracticalResume from "./Practical-resume/Practical-resume";
import "./Resume.css";

function DisplayResume({
  generalInfo,
  educationInfoList,
  practicalExperienceList,
}) {
  return (
    <main className="resume-container">
      <GeneralResume generalInfo={generalInfo}></GeneralResume>
      <EducationResume educationInfoList={educationInfoList}></EducationResume>
      <PracticalResume
        practicalExperienceList={practicalExperienceList}
      ></PracticalResume>
    </main>
  );
}

export default DisplayResume;
