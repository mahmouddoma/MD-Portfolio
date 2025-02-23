import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "Izam Inc.",
      role: "Software Implementer",
      duration: "April 2024 - Oct 2024",
      description:
        "Developed and optimized web interfaces using HTML, CSS, JavaScript, and jQuery, enhancing user experience and functionality. Acted as a liaison between clients and the development team, gathering requirements and addressing issues to deliver effective solutions. Analyzed client feedback and resolved technical issues, contributing to improved client satisfaction and system performance.",
    },
    {
      id: 2,
      company: "Freelance",
      role: "Front-End Developer",
      duration: "January 2024 - Present",
      description:
        "Front-End Developer with 1 year of experience creating responsive, user-centric web applications. Expertise in Angular, JavaScript, and HTML/CSS. Skilled in building clean, scalable code and translating design into smooth UI/UX. Passionate about optimizing performance and enhancing user experience. Proven ability to collaborate with cross-functional teams to deliver high-quality software solutions.",
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      institution: "Zagazig University",
      degree: "Bachelor of Arts , French Department",
      duration: "2020 - 2024",
      description:
        "Graduated with a Bachelor's degree in French Language and Literature from Zagazig University, Egypt.",
    },
    {
      id: 2,
      institution: "Udacity",
      degree: "Cross Skilling Angular Nanodegree",
      duration: "August 2022",
      description:
        "Completed the Angular Nanodegree program, gaining expertise in building dynamic web applications with Angular.",
    },
  ];

  // Skills data
  const skills = [
    "Angular",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
    "SQL Server",
  ];

  // Achievements data
  const achievements = [
    "Angular Course",
    "Completed Udacity Cross Skilling Angular Nanodegree from Ministry of Communications and Information Technology. (August 2022)",
  ];

  return (
    <motion.div
      className="experience-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="experience-heading">My Experience</h1>

      {/* Timeline Section */}
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-content">
              <h3 className="company">{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-heading">Education</h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-content">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="duration">{edu.duration}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h2 className="section-heading">Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievement">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
