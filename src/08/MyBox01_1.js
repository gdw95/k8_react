import { useState, useEffect } from "react";

//복사를 했던 세트를 컴포넌트로 추출-> MyBox.js 파일


export default function MyBox01_1() {
 const [blueFlag, setBlueFlag] = useState(false);//변수에 false라는 초깃값을 줬음.
 //랜더링이 가능한 blueFlag라는 변수가 생김. 리액트에 의해서 변경을 시킴
 //set()로 의해서만 변수변경 가능

 const [orangeFlag, setOrangeFlag] = useState(false);

 const handleBlue = () => {
  setBlueFlag(!blueFlag);
 }//setBlueFlag가 바뀌고 난 다음에 하는 일은 useEffect()

 const handleOrange = () => {
  setOrangeFlag(!orangeFlag);
 }
 
 //useEffect() 실행 조건 3가지 잘 알것

 useEffect(() => {
  console.log('useEffect blue =>', blueFlag)
  console.log('useEffect orang =>', orangeFlag)
 });

 // useEffect(() => {
 //  console.log('useEffect blue =>', blueFlag)
 // }, [blueFlag]);

 // useEffect(() => {
 //  console.log('useEffect orang =>', orangeFlag)
 // }, [orangeFlag]);

 return (
   <div className="w-full h-full 
                   flex justify-center items-center">
     <div className={`w-1/3 ${blueFlag ? `bg-blue-400`:''}
                     flex flex-col justify-center items-center
                     border border-slate-400 rounded-md
                     p-5 m-5`}>
       <h1 className="flex justify-center items-center
                     text-3xl font-bold
                     p-5 m-5 text-blue-700 bg-white
                     border border-slate-600 rounded-md
                     ">
         Blue
       </h1>
       <div className="flex justify-center items-center
                     text-xl font-bold
                     border border-blue-600  bg-blue-50 rounded-md
                     p-5 m-5"
            onClick={handleBlue}>
         Blue Toggle
       </div>
     </div>      
     <div className={`w-1/3 ${orangeFlag ? `bg-orange-400`:''}
                     flex flex-col justify-center items-center
                     border border-slate-400 rounded-md
                     p-5 m-5`}>
       <h1 className="flex justify-center items-center
                     text-3xl font-bold
                     p-5 m-5 text-orange-700 bg-white
                     border border-slate-600 rounded-md
                     ">
         orange
       </h1>
       <div className="flex justify-center items-center
                     text-xl font-bold
                     border border-orange-600  bg-orange-50 rounded-md
                     p-5 m-5"
            onClick={handleOrange}>
         orange Toggle
       </div>
     </div>         
   </div>
 )
}