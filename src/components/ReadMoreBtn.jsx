import React, { useState } from 'react'


const ReadMoreBtn = ({ text, maxLength=50 }) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        
        setShowFullText(!showFullText);
        console.log("state changed")
    };
    return (
        <div className='mt-16'>
            <p>
                {showFullText ? text : text.slice(0, maxLength) + "..." }
            </p>
            <button
                onClick={toggleShowFullText}
                className="bg-[#42D5C0] hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-5"
            >
                {showFullText ? 'Read Less' : 'Read More'}
            </button>
        </div>
    )
}

export default ReadMoreBtn