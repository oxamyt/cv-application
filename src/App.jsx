import { useState } from "react";
import Forms from "./components/forms/Forms";
import DisplayResume from "./components/Resume/Resume";
import "./styles/normalize.css";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [educationInfoList, setEducationInfoList] = useState([]);
  const [practicalExperienceList, setPracticalExperienceList] = useState([]);

  return (
    <div className="container">
      <Forms
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educationInfoList={educationInfoList}
        setEducationInfoList={setEducationInfoList}
        practicalExperienceList={practicalExperienceList}
        setPracticalExperienceList={setPracticalExperienceList}
      ></Forms>
      <DisplayResume
        generalInfo={generalInfo}
        educationInfoList={educationInfoList}
        practicalExperienceList={practicalExperienceList}
      ></DisplayResume>
    </div>
  );
}

export default App;
