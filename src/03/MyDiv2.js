import MyDiv3 from "./MyDiv3_1"

export default function MyDiv2({d1, d2}) {
 // console.log(probs)//오브젝트가 됨
 return (
  <div className="w-4/6 h-4/6 
    flex flex-col justify-center items-center
    bg-blue-600 text-white font-bold">
   <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
    {/* {`${probs.dn1} > ${probs.dn2}`} */}
    {`${d1} > ${d2}`}


   </div>

   <MyDiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3} />
  </div>
 )
}
