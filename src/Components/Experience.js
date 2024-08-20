import React from 'react';

const experiences = [
  {
    company: 'Innovapath IT Solutions',
    role: 'Web Developer',
    period: 'Nov 2021 - Present',
    description: 'Whitebox Learning (WBL) is a comprehensive classroom and online-based training program designed specifically for developers and quality engineers. The flexible training options cater to both individual learners and corporate teams, making it easier than ever to upskill and stay competitive in the rapidly evolving tech industry.'
  },



  {
    company: 'FinMkt',
    role: 'Software Engineer',
    period: 'Apr 2021 - Aug 2021',
    description: 'FinMkt a cloud-based technology powers innovative consumer lending, point of sale financing, and payment solutions for lenders and enterprise partners of all sizes.'
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
