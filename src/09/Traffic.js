import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";
import TailButton from "../UI/TailButton";


export default function Traffic() {

 //전체 데이터//undefinded를 []로 초기화
 const [tdata, setTdata] =useState([]);//useState() 공식: 배열로 구조분해할당. [변수명,변수를 바꿀수있는 set함수]

 //data fetch
 const getFetchData = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  // const page ='';
  // const perPage = '';
  // const serviceKey = '';


  //serviceKey는 가려야 함.
  // url = `${url}key=${apiKey}&page=${page}&perPage=${perPage}&serviceKey=${serviceKey}`;
  let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
  url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
  console.log(url)

  fetch(url)
   .then(resp => resp.json())
   .then(data => setTdata(data.data))
   .catch(err => console.log(err));

  //  console.log('apiKey=', apiKey);
  //  console.log(page);
  //  console.log(perPage);
  //  console.log(serviceKey);
 }

 //맨처음 한 번
 useEffect(() => {
  getFetchData();
 }, []);

 //useState()를 한 번 초기화할때 콘솔 undefinded을 []로 잡아줘야함.
 //tdata가 변경되었을 때
 useEffect(() => {
  console.log(tdata)
  //map()은 배열에만 사용가능->useState()를 배열로 초기화//콜백함수 표기법//map()으로 돌아서 tm에 모아줌
  let tm = tdata.map(item =>{return item['사고유형대분류']});
  //map()으로 만든 tm의 중복데이터제거->집합을 분해해서 배열로 ...구조분해해서 만드는것
  tm = [...new Set(tm)]
  console.log('tm =', tm)
 }, [tdata]);


 //props 중요//대분류와 중분류를 연결 짓는 개념 중요
 return (
  <div className="w-full">
   <TrafficNav />
  </div>
 )
}
