import "../styles/Preview.css";
import PropTypes from "prop-types";

function Preview({ generalData, educationData, experienceData }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview-section">
        <h3>General Information</h3>
        <div className="info-block">
          <p>
            <strong>Name: </strong> {generalData.name}
          </p>
          <p>
            <strong>Email: </strong> {generalData.email}
          </p>
          <p>
            <strong>Phone: </strong> {generalData.phone}
          </p>
          <p>
            <strong>Address: </strong> {generalData.address}
          </p>
        </div>
      </div>

      <div className="preview-section">
        <h3>Education</h3>
        {educationData.map((education) => (
          <div key={education.id} className="info-block">
            <p>
              <strong>School: </strong> {education.schoolName}
            </p>
            <p>
              <strong>Title of Study: </strong> {education.titleOfStudy}
            </p>
            <p>
              <strong>Date of Study: </strong> {education.dateOfStudy}
            </p>
          </div>
        ))}
      </div>

      <div className="preview-section">
        <h3>Experience</h3>
        {experienceData.map((experience) => (
          <div key={experience.id} className="info-block">
            <p>
              <strong>Company: </strong> {experience.company}
            </p>
            <p>
              <strong>Position: </strong> {experience.position}
            </p>
            <p>
              <strong>Start Date: </strong> {experience.startDate}
            </p>
            <p>
              <strong>End Date: </strong> {experience.endDate}
            </p>
            <p>
              <strong>Description: </strong> {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

Preview.propTypes = {
  generalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  educationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      schoolName: PropTypes.string.isRequired,
      titleOfStudy: PropTypes.string.isRequired,
      dateOfStudy: PropTypes.string.isRequired,
    })
  ).isRequired,
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Preview;
