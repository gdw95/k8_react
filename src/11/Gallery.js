import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton"//테일버튼 사이즈 속성 추가
import { useState, useEffect, useRef } from "react"


//tailwind form-input속성 사용
//브라우저 시작할 때 한국관광공사 검색창에 커서가 찍히도록 설정->Ref 변수 사용
export default function Gallery() {

 const csRef = useRef();

 const handleCancel=()=> {//취소버튼 누르면 입력한 값이 사라지도록. 테일버튼_취소
  csRef.current.value ='';
  csRef.current.focus();
 }

 const handleCheck=()=> {
  if (csRef.current.value = '') {
  csRef.current.value='값을 입력하세요.'}
  csRef.current.focus();
 }

 useEffect(()=>{
  csRef.current.focus();//Ref변수는 반드시 .current로 불러서 사용.(.focus()함수)
 }, []);



  return (
   
   <div className="w-full flex justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-end items-center">
          <input ref={csRef} type='text' className="w-10/12 form-input"
                 id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
          <TailButton caption = '확인'
                      color = 'blue'
                      handleClick = {handleCheck} 
                      size = 'w-1/2'/>
          <TailButton caption = '취소'
                      color = 'blue'
                      handleClick = {handleCancel}
                      size = 'w-1/2' />
          </div>
        </div>  
      </div>
      <div>
      <TailCard imgUrl="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
      title="서울빛초롱축제"
      content="서울특별시 종로구"
      kw="서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제" />
      </div>
    </div>
    
  )
}
