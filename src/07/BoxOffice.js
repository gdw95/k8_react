import { useEffect, useState } from "react"
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
   const [tdata, setTdata] = useState();
   const [info, setInfo] = useState();
   const [trs, setTrs] = useState();

   const handleTrClick = (item) => {//함수위치
      console.log(item);

      let tm = `[${item.movieCd}] ${item.movieNm} : 
      누적관객수 ${parseInt(item.audiCnt).toLocaleString()} 입니다.`;
      setInfo(tm);
   }
   const getFetchData = () => {
      const apiKey = process.env.REACT_APP_MV_KEY;
      const dt = '20240929';

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

   //맨처음 한 번 실행
   useEffect(() => {
      getFetchData();
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


   //<tr></tr>은 한 줄
   return (
      <div className='w-full h-screen flex justify-center items-center'>
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
