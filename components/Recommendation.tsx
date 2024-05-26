import React from 'react'
import ThumbsButton from './ui/ThumbsButton'

const Recommendation = () => {
  return (

    <div className="flex  relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
            <h2 className='text-2xl font-semibold'>
            Would you recommend Trausti?
            </h2>
            <p className="text-gray-600">Your opinion matters to us:</p>
            <div className="">
            <ThumbsButton/>
            </div>
        </div>
        
    </div>
  )
}

export default Recommendation