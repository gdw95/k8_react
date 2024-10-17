import MyDiv2 from "./MyDiv2"

// export default function MyDiv1() {
 export default function MyDiv1({}) {

 const d1 = 'div1';
 const d2 = 'div2';
 const d3 = 'div3';

 return (
  <div className="w-4/6 h-4/6 
   flex flex-col justify-center items-center
   bg-blue-800 text-white font-bold">
   <div className="w-full h-10 p-5 m-2
     flex justify-start items-center ">
    {/* {d1} */}
   </div>
   <MyDiv2 />
  </div>
 )
}
//구조분해 할당
//오브젝트 기호 {} 필수