
import React from 'react'

const ProgressBar = ({percentage}) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    )
}

export default ProgressBar

