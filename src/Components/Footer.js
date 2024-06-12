import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div id="contact"className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-l font-bold">Contact Me</h2>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <div className="flex items-center mb-4 md:mb-0">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-1" />
              <span>+91 8008625421</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-1" />
              <span>sahas1797@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; Sahas Pasupunoori. Thanks and Regards.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
