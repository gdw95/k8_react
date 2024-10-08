import { useEffect, useState, useRef } from "react"
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
   const [tdata, setTdata] = useState();
   const [info, setInfo] = useState();
   const [trs, setTrs] = useState();

   const dtRef = useRef();//인풋에 ref속성으로 넣어줘야함. ref정의는 따로해줘야함
   //어제날짜 구하기 함수
   const getYesterday = () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
   
      const year = yesterday.getFullYear();
      let month = yesterday.getMonth() + 1;
      let day = yesterday.getDate();
   
      //월 2자리
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day; 
      return `${year}-${month}-${day}`;
      }

   const handleTrClick = (item) => {//함수위치
      console.log(item);

      let tm = `[${item.movieCd}] ${item.movieNm} : 
      누적관객수 ${parseInt(item.audiCnt).toLocaleString()} 입니다.`;
      setInfo(tm);
   }
   const getFetchData = (dt) => {
      const apiKey = process.env.REACT_APP_MV_KEY;
      // const dt = '20240929';//딱 특정한 날짜를 어제날짜로 되게끔 해야함
      

      //공백있으면 안됨, 백틱문자, $ & 표기 구별 잘
      let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
      url = `${url}key=${apiKey}&targetDt=${dt}`;

      //데이터가져오기
      fetch(url)//fetch 실행개념 잘 알아야함 (비동기방식)
         .then(resp => resp.json())//데이터를 받는 것, .json 형식으로 받는 것
         .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
         .catch(err => console.log(err));//에러 시 걸림
      //요청인터페이스, 응답구조 개념 중요


      console.log('apiKey=', apiKey)
      console.log(url);


   }

   const handleDt = () => {
      const cdt = dtRef.current.value.replaceAll('-','');
      getFetchData(cdt);
   }

   //맨처음 한 번 실행
   useEffect(() => {
      const ydt = getYesterday();
      console.log('yesterday =', ydt);
      dtRef.current.value = ydt;
      dtRef.current.max = ydt;//인풋에 맥스를 어제날짜로 주면 날짜선택 뒤에가 안되도록
      getFetchData(ydt.replaceAll('-',''));//-값에 아무것도 안주니까 -가 사라지는 것
   }, []);

   //fetch하고 tdata에 넣은 데이터가 바뀔때마다 useEffect()가 실행됨
   useEffect(() => {
      if (!tdata) return;//map()을 시용하기위해선 tdata가 있어야하므로 초깃값을 줌
      console.log(tdata, 'tdata');
      let tm = tdata.map(item => <BoxOfficeTr
         handleClick={() => handleTrClick(item)}
         mv={item}
         key={(item.movieCd)} />)
      setTrs(tm);
   }, [tdata])

   //인풋이 바뀌는것 onChange 이벤트 처리//handleDt()는 인풋박스의 값이 변결될때 호출됨.
   //useState 훅을 사용하여 inputValue 상태를 관리해야함. 초기값은 빈 문자열.
   //event.target.value를 사용하여 현재 입력된 값을 가져오고, setInputValue로 상태업데이트-챗GPT
   //<tr></tr>은 한 줄
   return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
         <div className="w-10/12 h-20 p-5 flex justify-between items-center">
            <div className="font-bold p-2 text-2xl">
               박스오피스
            </div>
            <div>
               <input ref={dtRef} type='date' id='dt' name='dt'
                     onChange={handleDt} />
            </div>
         </div>
         <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xmd font-bold text-gray-700 uppercase bg-gray-50 ">
               <tr>
                  <th scope="col" className="px-6 py-3">
                     순위
                  </th>
                  <th scope="col" className="px-6 py-3">
                     영화명
                  </th>
                  <th scope="col" className="px-6 py-3">
                     매출액
                  </th>
                  <th scope="col" className="px-6 py-3">
                     관객수
                  </th>
                  <th scope="col" className="px-6 py-3">
                     증감율
                  </th>
               </tr>
            </thead>

            <tbody>

               {trs}

            </tbody>

            <tfoot>
               <tr className="bg-black text-white text-center h-10 p-2">
                  <td colSpan={5}>{info}</td>
               </tr>
            </tfoot>
         </table>


      </div>
   )
}
