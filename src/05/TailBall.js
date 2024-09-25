import { useState } from "react"
export default function TailBall({ n }) {

const ballColor = {
 'b0' : ' bg-lime-300',
 'b1' : ' bg-lime-400',
 'b2' : ' bg-lime-500',
 'b3' : ' bg-lime-600',
 'b4' : ' bg-lime-700'
}

 return (
  <div className={`w-20 h-20 m-2
                      flex justify-center items-center
                      rounded-full
                      ${ballColor['b' + Math.floor(n / 10)]}
                      text-white text-2xl
                      font-bold`}>
   {n}
  </div>
 )
}
