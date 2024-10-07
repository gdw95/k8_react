// import { useEffect, useState } from "react";
import TailButton from "../UI/TailButton";

export default function TrafficNav({title, c, sel, setsel}) {

//  const [sel, setSel] = useState();//버튼 클릭 시 색깔바꾸고 싶음

//  const c = ['차대사람', '차대차', '차량단독', '철길건널목'];

 const handleBtClick = (item) => {
  setsel(item);
 }

 //c의 개수만큼 버튼을 만들어야함//여러개의 태그일 경우 속성값 key도 줘야함 
 const tags = c.map(item => <TailButton
  key={item}
  caption={item}
  color={item == sel ? 'orange' : 'blue'}//sel 값에따라 오렌지일지 블루일지 결정.//Tailbutton확인
  handleClick={() => handleBtClick(item)}
 />

 );

//  useEffect(() => {
//   console.log(sel);
//  }, [sel]);

 return (
  <div className="w-full p-2 m-2
    flex justify-between items-center">
   <div className="w-1/5 flex justify-center items-center text-2xl font-bold">
    교통사고대분류
   </div>
   <div className="flex justify-start items-center">
    {tags}
   </div>
  </div>
 )
}
