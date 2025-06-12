import React from 'react';

const ButtonRedirect: React.FC<{link: string; text?: string}> = ({ link, text })=> {
    const handleRedirect = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
};
    return (
        <button
            onClick={handleRedirect}
            className='bg-blue-500 text-white font-bold py-2 mx-3 px-4 rounded hover:bg-blue-700 transition duration-300'
        >
            {text || 'Go to Link'}
        </button>
    );
};

export default ButtonRedirect;