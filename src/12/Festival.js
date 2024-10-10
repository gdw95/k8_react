import { useEffect, useState, useRef } from "react"
import TailCard from "../UI/TailCard";

//1.전체축제데이터 data Fetch.
//2.구정보추출->콘솔로그로 확인, 중복없도록
//3.구정보->select box
//4.select box 선택된 내용 콘솔, onChange();

export default function Festival() {
 //전체 축제 데이터
 const [tdata, setTdata] = useState([]);
 //구정보
 const [gnum, setGnum] = useState([]);
 //선택된 구 정보
 const [selgu, setSelgu] = useState();
 //select box를 제어
 const gu = useRef();


 const getfetchData = async () => {
  const apiKey = process.env.REACT_APP_FT_KEY;

  let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
  url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=38&resultType=json`;
  console.log(url);

  const resp = await fetch(url);
  const data = await resp.json();
  console.log("getFetch", data.getFestivalKr.item);
  setTdata(data.getFestivalKr.item);
 }

 //option이 선택이 되면
 const handleSelect =() =>{
  console.log(gu.current.value);
 }

 useEffect(() => {
  getfetchData();
 }, []);



 //tdata가 채워지면 실행
 //13개의 구정보를 중복없이 정렬로 데이터추출한 것. ->select box에 데이터삽입
 useEffect(() => {
  let tm = tdata.map(item => item.GUGUN_NM);
  tm = [...new Set(tm)].sort();
  console.log('tm =', tm);

  tm = tm.map(item => <option key={item}
   value={item}>
   {item}
  </option>);
  setGnum(tm);

 }, [tdata]);



 return (
  <div className="w-full flex flex-col justify-center items-center">
   <div className="w-10/12 p-5 flex justify-center items-center">
    {/* <h1 className="w-full flex justify-center text-2xl mb-5 font-bold">
     부산축제정보
    </h1> */}
    <div>
     <select className="w-full form-select"
             ref={gu}
             onChange={handleSelect}>
      <option value=''>---구를 선택하세요---</option>
      {gnum}
     </select>
    </div>

   </div>

   <div>
    Festival
   </div>
  </div>
 )
}
