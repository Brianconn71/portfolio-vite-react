import project1 from "../assets/images/asylum_data.png";
import project2 from "../assets/images/olympic_data.png";
import project3 from "../assets/images/dunmore.png";
import project4 from "../assets/images/townley.png";

export const HERO_CONTENT = `Welcome to my Portfolio. I am a passionate Software Engineer who has a great love for data and harnessing the power of Machine Learning and AI to develop cool new things! If you have some time (less than two minutes!) then please watch my introduction below and feel free to download my CV.`;

export const ABOUT_TEXT = `I am an enthusiastic and passionate Software Engineer with a desire to build highly scalable Infrastructure and applications. I have a wide range of experience in Frontend development, Backend Development and Full-Stack. I have embarked on a journey to understand and use Statistics and Machine Learning principles to understand data and to help influence decisions.With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My biggest Passion lies in Python and the wide range of applications that can be built using various python frameworks such as Django, Flask, FastApi and Streamlit. I have completed a Masters degree in Cloud Computing in which I received a first class honours Grade. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Engineer",
    company: "Ezora Ltd.",
    description: ``,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2021 - 2023",
    role: "Junior Software Engineer",
    company: "Payslip Ltd.",
    description: ``,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2020 - Present",
    role: "Freelance Full Stack Software Developer",
    company: "Freelance",
    description: ``,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Refugee Asylum Streamlit Data Dashboard",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Olympic Medals Streamlit Data Dashboard",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Dunmore Medical Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Townley Medical Website",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Hollymount, Co Mayo, Ireland",
  phoneNo: "+353 86 32 688 58",
  email: "brian@brianconnolly.dev",
};
