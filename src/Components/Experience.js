import React from 'react';

const experiences = [
  {
    company: 'Innovapath IT Solutions',
    role: 'UI Developer',
    period: 'Nov 2021 - Present',
    description: 'Talent Screen is a portal application that helps recruiters in achieving staffing objectives    and evaluating job candidates and the UI of the application built using HTML5, CSS3, JavaScript, Bootstrap, React and other packages. Talent Screen has backend services in Node.js and MongoDB as the functional databases. '
  },



  {
    company: 'FinMkt',
    role: 'Software Engineer',
    period: 'Apr 2021 - Aug 2021',
    description: 'Analyzed user requirements to develop software solutions and created technical specifications. Developed, tested, debugged and documented software programs using Java, JavaScript and HTML and CSS.  Monitored system performance and troubleshoot issues in production environment. Designed databases to store application data using SQL Server or MongoDB technologies.'
  },
];


function Experience() {
  return (
    <div id="experience" className="bg-gray-100 p-8 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-blue-700">{experience.period}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">{experience.role} at {experience.company}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-brown-900">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
