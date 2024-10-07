import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";
import TailButton from "../UI/TailButton";


export default function Traffic() {

 //전체 데이터//undefinded를 []로 초기화
 const [tdata, setTdata] = useState([]);//useState() 공식: 배열로 구조분해할당. [변수명,변수를 바꿀수있는 set함수]

 //대분류 데이터
 const [c1, setC1] = useState([]);
 const [selC1, setSelC1] = useState([]);

 //사고유형 데이터//대분류가 선택되면 해당되는 사고유형 데이터를 가져와야함 
 const [c2, setC2] = useState([]);
 const [selC2, setSelC2] = useState();

 //데이터 정보 추출
 const[info, setInfo] = useState();

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
  // if (!tdata) return ;
  console.log(tdata)

  //map()은 배열에만 사용가능->useState()를 배열로 초기화//콜백함수 표기법//map()으로 돌아서 tm에 모아줌
  let tm = tdata.map(item => { return item['사고유형대분류'] });
  //map()으로 만든 tm의 중복데이터제거->집합을 분해해서 배열로 ...구조분해해서 만드는것
  //set()으로 중복제거하면 데이터타입이set(집합)이 됨. ...으로 배열로 구조분해
  tm = [...new Set(tm)]
  console.log('tm =', tm)

   //대분류 생성
  setC1(tm);

 }, [tdata]);


 //대분류 선택
 useEffect(()=>{
 console.log(selC1)
}, [selC1]);


 //대분류 선택 => 사고유형
 useEffect(()=>{
  console.log(selC1)
  let tm = tdata.filter(item => item['사고유형대분류'] == selC1)
  .map(item => item['사고유형']);
  // tm = tm.map(item => item['사고유형']);

  setC2(tm);
  setInfo('');
 }, [selC1]);


 //사고유형 선택
 useEffect(() => {
   if(!selC2 || !selC2) return ;
   
   let tm = tdata.filter(item => item['사고유형대분류'] == selC1 &&
                                 item['사고유형'] == selC2
   );
   tm = tm[0];//오브젝트가 됨

   console.log(tm);
   const infokey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
  // let tmk = infokey.map(k => console.log(k, tm[k]))
   let tmk = infokey.map((k, idx) => <div key={selC1 + selC2 + idx}
    className="flex justify-center items-center">
     <div className="w-3/5 p-2 text-tm font-bold bg-green-500 text-white text-center">
      {k}
     </div>
     <div className="w-2/5 p-2 text-center font-bold">
      {parseInt(tm[k]).toLocaleString()}
     </div>
    </div>
   )

    setInfo(tmk);
 }, [selC2]);


 //props 중요//대분류와 중분류를 연결 짓는 개념 중요
 return (
  <div className="w-full flex flex-col justify-center items-center">
   {/* <TrafficNav title='대분류' c={['1', '2']} />
   <TrafficNav title='중분류' c={['3', '4']} /> */}
   {/* <TrafficNav title='대분류' c={c1} sel={selC1} setsel={setSelC1} />
   <TrafficNav title='사고유형' c={['3', '4']} /> */}
   {c1 && <TrafficNav title='대분류' c={c1} sel={selC1} setsel={setSelC1} />}
   {c2 && <TrafficNav title='사고유형' c={c2} sel={selC2} setsel={setSelC2} />}
   <div className="w-10/12 grid grid-cols-5 gap-5">
     {info}
   </div>
  </div>
 )
}
