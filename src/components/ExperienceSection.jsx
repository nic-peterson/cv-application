import PropTypes from "prop-types";
import ItemArraySection from "./ItemArraySection";

function ExperienceSection({ data, setData }) {
  const experienceFields = [
    { key: "position", label: "Position" },
    { key: "company", label: "Company" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "description", label: "Description" },
  ];

  const emptyExperience = {
    id: crypto.randomUUID(),
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { ...emptyExperience }]);
  };

  return (
    <ItemArraySection
      title="Professional Experience"
      data={data}
      setData={setData}
      fields={experienceFields}
      emptyItem={emptyExperience}
      onAdd={handleAdd}
    />
  );
}

const dataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

ExperienceSection.propTypes = {
  data: PropTypes.arrayOf(dataShape).isRequired,
  setData: PropTypes.func.isRequired,
};

export default ExperienceSection;
