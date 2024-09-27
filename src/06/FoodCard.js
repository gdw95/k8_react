import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';
import { useState } from 'react';
// import fooddata from './fooddata.json';


export default function FoodCard({obj}) {

 const [isShow, setIsShow] = useState(false);

const objImg = {
 "광역지원센터": busan,
 "기초푸드뱅크": bank,
 "기초푸드마켓": market
}

const handleClick = () => {
 setIsShow(!isShow);
  }
  return (
  <div className='w-10/12 flex border border-slate-400 rounded-md p-5'>

   <div className='w-1/5 mr-5'>
   
    <img src={objImg[obj["구분"]]}
     alt={obj["구분"]} />
   </div>
   <div className='w-4/5 flex flex-col justify-between items-start'>
    <div>
     <div className='text-2xl text-slate-500 font-bold'>
      {obj["사업장명"]}
     </div>
     <div className='text-1xl text-slate-400 font-bold'>
      {obj["사업장 소재지"]}
     </div>
    </div>
    <div className='w-full h-8 p-2 
                    flex justify-end items-center bg-slate-600 text-white font-bold'
        onClick={handleClick}>
     {isShow && obj["연락처(대표번호)"]}
    </div>
   </div>
  </div>
 )
}


{/* <img src ={bank} alt='기초푸드뱅크' /> */}
    {/* <img src ={market} alt='기초푸드마켓' /> */}

    {/* <img src={obj.["구분"]==='광역지원센터' ? busan: 
              obj.["구분"]==='기초푸드뱅크'? bank : marcket} alt={obj["구분"]} /> */}

{/* {obj["팩스번호"]}
   {obj["운영주체 분류"]}
   {obj["운영주체명"]} */}