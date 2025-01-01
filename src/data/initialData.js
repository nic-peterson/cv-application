import { v4 as uuidv4 } from "uuid";

export const initialGeneralInfo = {
  name: "Alice Johnsonn",
  email: "alice.johnson@example.com",
  phone: "+1-555-123-4567",
  address: "123 Main St, Anytown, USA",
};

export const initialEducation = [
  {
    id: uuidv4(),
    schoolName: "University of Example",
    titleOfStudy: "Underwater Basket Weaving",
    dateOfStudy: "2018-2022",
  },
  {
    id: uuidv4(),
    schoolName: "University of Anytown",
    titleOfStudy: "Masters in Computer Science",
    dateOfStudy: "2014-2016",
  },
  {
    id: uuidv4(),
    schoolName: "Ivy League University",
    titleOfStudy: "B.S. Computer Science",
    dateOfStudy: "2005-2008",
  },
];

export const initialExperience = [
  {
    id: uuidv4(),
    company: "Tech Corp",
    position: "Software Developer",
    description: "Full-stack development",
    startDate: "2022",
    endDate: "Present",
  },
  {
    id: uuidv4(),
    company: "Example Company",
    position: "Software Engineer",
    description: "Developed and maintained web applications",
    startDate: "2019-2020",
    endDate: "2020-2021",
  },
];
