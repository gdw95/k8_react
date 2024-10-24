import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";

//외부 폴더에 db.json파일 생성
//npm install -g json-server
//cd db 로 디렉토리변경
//npx json-server --watch db.json  --port 3005 
//띄어쓰기 유의


//리액트 대표 hook -> useRef(), useState(), useEffect()

export default function Rest() {

  //입력값을 제어하기 위한 ref변수(제목, 작성자 입력값) -><input /> 에 끼워서 연결. ref속성
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  
  //화면 재랜더링을 위한, 값이 변경될때마다 랜더링 가능하도록 state변수 사용 -> 전체데이터, 
  //array 형식으로 받아와야함 
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);// 입력, 수정을 확인, 수정을 누르면 true.
  const [updateId, setUpdateId] = useState();//수정할 데이터의 id. 수정버튼이 눌러졌을 때


  //백엔드 데이터를 가져옴 -> 컴포넌트 맨처음 실행 될때 fetch
  const url = 'http://localhost:3005/posts'; //restfull endpoint 주소


  //데이터 가져오기 사용자 정의함수
  //패치 : js에서 지원해주는 함수. 비동기함수
  //패치함수가 정의되어있는 형식 확인 -> perplexity 사이트 이용 등.
  const getFetchData = async() => {
    console.log(url);

    const resp = await fetch(url);//await이 없으면 데이터가 날아오기전에 resp.json()실행됨.
    const data = await resp.json();//데이터가 날아와서 json변환까지 완

    console.log(data);

    //전체 데이터 저장 state 변수에 넣기 -> setTdata(); : useState() 내가 정의.
    //가져온 데이터를 화면에 그려줌 -> 데이터를 뿌리는 위치 선택 후 넣어줄 것
    setTdata(data);
  }

  //입력처리 함수. 사용자정의 함수
  const handlePost = async() => {
    //입력 확인절차 (제목 창 입력)
    if (txt1Ref.current.value === '' || !txt1Ref.current.value) {
      alert('제목을 입력하세요.');
      txt1Ref.current.focus();
      return;//함수가 종료
    }
    if (txt2Ref.current.value === '' || !txt2Ref.current.value) {
      alert('작성자를 입력하세요.');
      txt2Ref.current.focus();
      return;//함수가 종료
    }

    //보낼데이터를 object로 만들기
    const postData = {
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    }

    //Post fetch ->perplexity Post요청 리액트 검색
    const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });

    //입력된 데이터 반환
    const data = await resp.json();
    console.log(data);

    //배열데이터에 데이터를 추가할 때 사용가능
    //인수 순서 중요.(데이터 추가 시 화면 추가위치)
    setTdata([data, ...tdata]);
  }

  //데이터 삭제하는 사용자정의 함수
  const handleDelete = async(id) => {
    console.log(id);

    const resp = await fetch(`${url}/${id}`, {
      method: "DELETE",
  });

  //삭제된 데이터 반환
  const data = await resp.json();
  console.log('delete data', data);

  //const tm = tdata.filter(item => item.id !== id);
  setTdata(tdata.filter(item => item.id !== id));
  }

  //수정 사용자 정의 함수
  const handleUpdate = (item) => {
    console.log('update', item);
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;

    setIsUpdate(true);
    setUpdateId(item.id);
  }

  //수정처리 사용자 정의함수 -> 특정한 id 가 put이 되어야함
  //그 id 값도 state 변수로 선언해서 사용
  //Post와 유사
  const handlePut = async() => {
    console.log('handlePut');
    //입력확인
    if (!txt1Ref.current.value) {
      alert('제목을 입력하세요.') ;
      txt1Ref.current.focus();
      return ;
    }
    if (!txt2Ref.current.value) {
      alert('작성자를 입력하세요.') ;
      txt2Ref.current.focus();
      return ;
    }
   

    //보낼 데이터 object로 만들기
    const postData = { 
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    }

    //post fetch
    const resp = await fetch(`${url}/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }) ;

    //수정 데이터 반환
    const data = await resp.json() ;
    console.log(data)

    const tm = tdata.map(item => item.id === updateId ? data : item);
    setTdata(tm);

    setIsUpdate(false) ;
    setUpdateId('') ;
    txt1Ref.current.value = '' ;
    txt2Ref.current.value = '' ;
  }



  //입력과 수정 구분하는 사용자 정의함수
  const handleOk = () => {
    if (!isUpdate) handlePost();
    else handlePut();
  }


  //컴포넌트 생성 시 실행되기위해서(한 번만) -> 리액트가 실행
  //, []) 디펜던시 어레이 안 : 컴포넌트가 언제 실행될 지 리액트가 감지
  useEffect(() => {
   getFetchData();//데이터 가져오기
  }, []);


  //tdata가 변경될때마다 실행되는 useEffect();
  useEffect(() => {
    if (!tdata)  return;
    console.log(tdata);

    //tdata(배열)의 데이터요소 개수만큼 map()돌아서 뽑아줌.->{trs} 컴포넌트에 삽입
    //item에 하나 씩 들어와서 돌아줌
    //콜백함수 (), {} 생략가능 조건
    //데이터 키값 확인, 맞추는 것 중요
    const tm = tdata.map(item => 
    <tr key={item.id} className="bg-white border-b h-10 hover:bg-gray-50 cursor-pointer"> 
      <td className="text-center">{item.title}</td>
      <td className="text-center">{item.author}</td>
      <td className="text-center"> 
        <TailButton caption = "삭제"
                    color = "blue"
                    handleClick = {() => handleDelete(item.id)}
                    size ='w-1/2' />  </td>
      <td className="text-center">
        <TailButton caption = "수정"
                    color = "lime"
                    handleClick = {() => handleUpdate(item)}
                    size ='w-1/2' />  </td>
    </tr>);
   console.log(tm);

    setTrs(tm);
  }, [tdata]);


  //컴포넌트가 재랜더링 될때 마다 실행(tdata변경 시 재랜더링 useEffect()가 있으므로 사용할때주의)
  //useEffect(() => {});

  useEffect(() => {
    console.log('trs')
    console.log(trs)
  }, [trs]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="form-input  w-full"
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref} />
        </div>
        <TailButton caption = {isUpdate ? '수정' : '입력'}
                  color = "blue"
                  handleClick = {handleOk}
                  size ='w-1/2' />  
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
        {trs}
        </tbody>
      </table>
    </div>
  )
}
