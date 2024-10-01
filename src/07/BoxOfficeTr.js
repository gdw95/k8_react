import BoxOffice from "./BoxOffice"
import { useEffect, useState } from "react"


export default function BoxOfficeTr({handleClick, mv}) {//오브젝트로 받아야함

  return (
   <tr onClick={handleClick} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
   <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     {mv.rank}
   </td>
   <td className="px-6 py-2 text-center">
     {mv.movieNm}
   </td>
   <td className="px-6 py-2 text-right">
     {parseInt(mv.salesAmt).toLocaleString()}
   </td>
   <td className="px-6 py-2 text-right">
     {parseInt(mv.audiCnt).toLocaleString()}
   </td>
   <td className="px-6 py-2 text-center">
      { mv.rankInten > 0 ? <span className="text-red-600 pr-3">▲</span> : 
           mv.rankInten < 0 ? <span className="text-blue-600 pr-3">▼</span> : '-' }
     { mv.rankInten != 0 && Math.abs(mv.rankInten)}
   </td>
 </tr>
      
    
  )
}
