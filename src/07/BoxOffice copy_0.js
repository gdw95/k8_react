import { useEffect, useState } from "react"
import TailButton from "../UI/TailButton";

export default function BoxOffice() {
 const [cnt, setCnt] = useState();
 const handleUp = () => {
  setCnt(cnt +1);
 }

//useEffect() 실행 경우 3가지 예시//

//맨처음 한 번 실행
useEffect(()=>{
 console.log('useEffect []');
 setCnt(100) ;
}, []);


//state 변수 cnt가 변경이 될때
useEffect(() => {
 console.log('useEffect[cnt]', cnt);
}, [cnt])

//변경이 일어날때마다 실행
useEffect(()=> {
 console.log('useEffect')
}, [])


 return (
  <div className= 'h-screen flex justify-center items-center'>
   <div className="flex justify-center items-center m-5 text-3xl">
    {cnt}{dwn}
   </div>
   <div>
    <TailButton caption='증가' 
                color='blue'
                handleClick={handleUp} />
   </div>
  </div>
 )
}
