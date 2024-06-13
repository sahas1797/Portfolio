import React from "react";


function Education() {
    return (

        <div id="education" className="bg-white dark:bg-gray-900 p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
            <div className="space-y-6">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">PG Diploma</h3>
                        <p className="text-gray-600 dark:text-gray-400">Centre for Development of Advanced Computing (C-DAC) </p>
                        <p className="text-gray-600 dark:text-gray-400">Feburary 2020 - Feburary 2021</p>
                    </div>
                    <div className="max-w-md text-gray-700 dark:text-gray-300">
                        <p>Focused on Software development, Algorithms, Data Structures and Advancements in digital technologies </p>
                    </div>
                </div>



                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor of Technology</h3>
                        <p className="text-gray-600 dark:text-gray-400">Jawaharlal Nehru Technological University</p>
                        <p className="text-gray-600 dark:text-gray-400">August 2015 - June 2019</p>
                    </div>
                    <div className="max-w-md text-gray-700 dark:text-gray-300">
                        <p>Specialized in CS-IT, Programming and Software Development, Computer Networks and Security, DBMS and Web Development</p>
                    </div>
                </div>



            </div>
        </div>


    );
}

export default Education;