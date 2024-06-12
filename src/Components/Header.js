// Header.js
import React, { useState } from 'react';

function Header() {



  return (
<nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 fixed w-full z-10">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <div className="flex items-center lg:order-2">
      <a
        href="https://drive.google.com/file/d/1Ikb6AFfoWFDEgtQZ0cfD_Ym2hJiqE8Lc/view?usp=sharinghas_UI.pdf"
        download = "Resume.pdf"
        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-red-400 dark:hover:bg-red-500 dark:text-white focus:outline-none dark:focus:ring-red-500"
      >
        Resume
      </a>
    </div>

    {/* Utilize Tailwind's responsive classes to control visibility */}
    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 hidden lg:block" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <a
            href="#home"
            className="block py-2 pl-3 pr-4 text-white bg-blue-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  )
}

export default Header;
