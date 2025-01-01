import { useState } from "react";
import GeneralSection from "./components/GeneralSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Preview from "./components/Preview";
import {
  initialGeneralInfo,
  initialEducation,
  initialExperience,
} from "./data/initialData";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <div className="cv-container">
        <div className="left-section">
          <GeneralSection data={generalInfo} setData={setGeneralInfo} />
          <EducationSection data={education} setData={setEducation} />
          <ExperienceSection data={experience} setData={setExperience} />
        </div>
        <div className="right-section">
          <Preview
            generalData={generalInfo}
            educationData={education}
            experienceData={experience}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
