import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FloatingLinkedInLink = () => {
    return (
        <a
            href="https://www.linkedin.com/in/pasupunoori-sahas-b22909183"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl"/>
        </a>
    );
};

export default FloatingLinkedInLink;
