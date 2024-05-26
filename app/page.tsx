import Communication from '@/components/Communication'
import Praise from '@/components/Praise'
import Recommendation from '@/components/Recommendation'
import Safety from '@/components/Safety'
import React from 'react'

const Home = () => {
  return (
   <main className="relative bg-zinc-50 flex justify-center  flex-col  mx-auto sm:px-10 px-5 overflow-clip">
    <h1 className="text-left flex flex-col text-4xl font-bold top-10 mt-10 font-sans antialiased">Leave a review</h1>
     <div className="max-w-7xl w-full">
      {/* Safety ratings */}
      <Safety />
      {/* Communication Ratings */}
      <Communication />
      {/* Recommendation  */}
      <Recommendation />
      {/* Praise or feedback */}
      <Praise/>
     </div>
   </main>
  )
}

export default Home