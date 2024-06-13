import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faGithub, faBootstrap, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faHtml5, name: 'HTML5' },
  { icon: faCss3Alt, name: 'CSS3' },
  { icon: faJs, name: 'JavaScript' },
  { icon: faReact, name: 'React' },
  { icon: faNodeJs, name: 'Node.js' },
  { icon: faDatabase, name: 'SQL/NoSQL' },
  { icon: faJava, name: 'Java' },
  { icon: faGithub, name: 'Git' },
  { icon: faBootstrap, name: 'Bootstrap' },
  { icon: faLinux, name: 'Linux' },


];

function Skills() {
  return (
    <div id="skills"className="bg-black-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 items-center text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 hover:bg-red-300"
          >
            <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-500 mb-2" />
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
