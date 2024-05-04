import { useState } from "react";
import GeneralInfoForm from "./components/general-info-form";
import EducationInfoForm from "./components/education-form";
import PracticalExperienceForm from "./components/practical-form";
import DisplayResume from "./components/display-resume";
import "./styles/reset.css";
import "./styles/index.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    date: { start: "", end: "" },
  });
  const [practicalInfo, setPracticalInfo] = useState({
    companyName: "",
    positionTitle: "",
    date: { start: "", end: "" },
    description: "",
  });

  return (
    <div className="container">
      <section className="forms">
        <GeneralInfoForm
          generalValue={generalInfo}
          setGeneralValue={setGeneralInfo}
        ></GeneralInfoForm>
        <EducationInfoForm
          educationValue={educationInfo}
          setEducationValue={setEducationInfo}
        ></EducationInfoForm>
        <PracticalExperienceForm
          practicalValue={practicalInfo}
          setPracticalValue={setPracticalInfo}
        ></PracticalExperienceForm>
      </section>
      <DisplayResume
        generalValue={generalInfo}
        educationValue={educationInfo}
        practicalValue={practicalInfo}
      ></DisplayResume>
    </div>
  );
}

export default App;
