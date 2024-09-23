import MyDiv2 from "./MyDiv2_1"

export default function MyDiv1() {
 const d1 = 'div1';
 const d2 = 'div2';
 const d3 = 'div3';

 return (
  <div className="w-4/6 h-4/6 
   flex flex-col justify-center items-center
   bg-blue-800 text-white font-bold">
   <div className="w-full h-10 p-5 m-2
     flex justify-start items-center ">
    {d1}
   </div>
   <MyDiv2 dn1={d1} dn2={d2} dn3={d3} />
  </div>
 )
}
//오브젝트이름으로 사용하면 번거로움 -> 구조분해로 사용하면 간소화됨.
//03 코딩은 잘 사용하지 않음.