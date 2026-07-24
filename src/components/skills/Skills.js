import React from "react";
import "./Skills.css";

const skills = [
  "C++",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub"
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__list-item project__stack-item-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
