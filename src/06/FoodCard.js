import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';
// import fooddata from './fooddata.json';


export default function FoodCard() {

 const obj = {

  "구분": "광역지원센터",
  "시군구": "부산시",
  "사업장명": "부산광역푸드뱅크",
  "신고기준": "당연",
  "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
  "연락처(대표번호)": "051-791-1377",
  "팩스번호": "051-714-3096",
  "운영주체 분류": "1. 사회복지법인",
  "운영주체명": "부산광역시사회복지협의회"

 }

 return (
  <div>
   card
   <img src ={bank} alt='기초푸드뱅크' />
   <img src ={busan} alt='광역지원센터' />
   <img src ={market} alt='기초푸드마켓' />

   {obj["구분"]}
   {obj["시군구"]}
   {obj["사업장명"]}
   {obj["신고기준"]}
   {obj["사업장 소재지"]}
   {obj["연락처(대표번호)"]}
   {obj["팩스번호"]}
   {obj["운영주체 분류"]}
   {obj["운영주체명"]}

  </div>
 )
}
