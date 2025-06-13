import React from 'react'
import ProgressBar from '../../../common/ProgressBar'

const PerformanceBar = ({ heading, percentage }) => {
    return (
        <div>
            <div className='flex justify-between mb-3.5'>
                <h3 className='font-semibold text-sm'>{heading}
                </h3><span className='text-[#737A84] font-semibold text-sm'>{percentage}%</span>

            </div>
            <ProgressBar percentage={percentage} />
        </div>
    )
}

export default PerformanceBar
