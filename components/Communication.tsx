import React from 'react'
import SafetyRating from './ui/SafetyRating'

const Communication = () => {
  return (
    <div className="flex  relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
            <h2 className='text-2xl font-semibold'>
                Communication
            </h2>
            <p className="text-gray-600">Please rate our communication :</p>
            <div className="">
            <SafetyRating />
            </div>
        </div>
        
    </div>
  )
}

export default Communication