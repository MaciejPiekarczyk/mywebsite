import React from 'react';

const handleRedirect = () => {
    window.open('https://github.com/MaciejPiekarczyk', '_blank', 'noopener,noreferrer');
};

const ButtonRedirect = () => {
    return (
        <button
            onClick={handleRedirect}
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
        >
            Go to GitHub
        </button>
    );
};

export default ButtonRedirect;