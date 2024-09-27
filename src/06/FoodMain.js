import fooddata from './fooddata.json';
import FoodCard from './FoodCard';
import { useState, useEffect } from 'react';
import TailButton from '../UI/TailButton';


export default function FoodMain() {
  const [tags, setTags] = useState();

  let tm = fooddata.map(item=>item["운영주체 분류"].replace(' ', ''));
  tm = [...new Set(tm)];//중복데이터 제거 후 전개연산자... 사용 -> 5개를 버튼으로 생성
  console.log(tm)

  const bts = tm.map(item => <TailButton
                     key={item}
                     caption={item}
                     color='blue'
                     handleClick={() => handleFood(item)}
  />)

  const handleFood = (item) => {
    let tm = fooddata.filter(i =>i["운영주체 분류"].replace(' ', '')===item)
                      
    tm = tm.map(i => <FoodCard obj={i} key={i.사업자명} />)//여러개 만들경우 키 값 만들것
    setTags(tm);
  }

  return (
    <div className='w-full flex flex-col justify-start'>
      <div className='w-full h-20 bg-blue-100
      flex justify-center items-center'>
        {bts}
      </div>
      <div className='w-full grow grid grid-cols-1 xl:grid-cols-2 gap-4 p-4'>
        {tags}
      </div>
    </div>
  )
}
