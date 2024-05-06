import GeneralInfoDisplay from "./general-info-display";
import EducationInfoDisplay from "./education-info-display";
import PracticalInfoDisplay from "./practical-info-display";
import "../styles/resume.css";

function DisplayResume({ generalValue, educationValue, practicalValue }) {
  return (
    <section className="resume-container">
      <GeneralInfoDisplay generalValue={generalValue}></GeneralInfoDisplay>
      <EducationInfoDisplay
        educationValue={educationValue}
      ></EducationInfoDisplay>
      <PracticalInfoDisplay
        practicalValue={practicalValue}
      ></PracticalInfoDisplay>
    </section>
  );
}

export default DisplayResume;
