import { useState, useEffect } from "react";
function MyClockTime() {

const[CTime, setCTime] = useState(new Date());

//useEffect() : []안에 값이 없을 경우 컴포넌트가 실행될때 딱 한 번 실행
useEffect(() =>{
 setInterval(() => {
  setCTime(new Date());
 }, 1000)

 return clearInterval(tm);//setInterval()은 클리어하기 전까지 계속 실행되고 있음
}, []);

 // let today = new Date();
 // today = today.toLocaleString();
 return (
 
  <div className=" w-full flex justify-center items-center font-bold">
  현재 시각: {CTime.toLocaleTimeString()}
  </div>
 
 );
}

export default MyClockTime;