import PropTypes from "prop-types";
import ItemArraySection from "./ItemArraySection";

function EducationSection({ data, setData }) {
  const educationFields = [
    { key: "schoolName", label: "School Name" },
    { key: "titleOfStudy", label: "Title of Study" },
    { key: "dateOfStudy", label: "Date of Study" },
  ];

  const emptyEducation = {
    id: crypto.randomUUID(),
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { ...emptyEducation }]);
  };

  return (
    <ItemArraySection
      title="Education"
      data={data}
      setData={setData}
      fields={educationFields}
      emptyItem={emptyEducation}
      onAdd={handleAdd}
    />
  );
}

const dataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  titleOfStudy: PropTypes.string.isRequired,
  dateOfStudy: PropTypes.string.isRequired,
});

EducationSection.propTypes = {
  data: PropTypes.arrayOf(dataShape).isRequired,
  setData: PropTypes.func.isRequired,
};

export default EducationSection;
