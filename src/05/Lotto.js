import { useState } from "react"//괄호사용 잘 할 것 중괄효사용 잘할것->변수값을 사용하고싶을경우 중괄호사용
import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"

export default function Lotto() {
  //자바스크립트 문법
  //state 변수는 useState Hook으로 만듬
  const [tags, setTags] = useState();// -> 바뀌는 변수값은 react의 간섭아래 돔에 실시간 적용됨//[태그명지정, set으로]
  
  const handleClick = () => {
    console.log('handleClick1')
    let arr = [];

    while(arr.length < 7) {
      let n = Math.floor(Math.random()*45)+1;//버튼을 누를때마다 생성된 1~45 랜덤수(n)를 화면에 뿌려야함// return에 state 변수tags 가 있어야함.
      //arr배열변수에 랜덤수n을 집어넣기 -> 중복값없어야 하기때문에 if 문
      // arr.push(n);
      //indexOf는 n을찾는것
      //false가 되어야 하므로-> !
      if(!arr.includes(n)) arr.push(n);
    }
    // console.log(arr)
    // setTags(<h1 className="text-3xl"> {n}</h1>);//스테이트변수를 바꿀려면 셋함수를 사용하여야 가능
    
    //번호6개와 보너스 값은 섞이면 안되므로 splic(-1)
    const bonus = arr.splice(-1);
    console.log(arr, bonus)

    //번호정렬
    arr.sort((a, b)=>a-b);//콜백함수사용 오름차순

    //보너스 번호 추가
    arr = arr.concat(bonus);//concat() 배열을 합쳐줌 , 전개연산자도 가능 
    // console.log(arr)


    //볼만들기->map()의 결과는 arr, map()의 결과수?만큼 arr를 만들어줌. 맵은 푸쉬안해도됨
    //map()함수는 배열을 순회해서 각 요소를 콜백함수로 적용해서 처리해 모은 새로운 배열을 반환하기 위한 함수
    //원본 배열은 변경하지 않으면서 해당배열요소에대한 규칙적인 새로운 배열 요소를 생성할때 사용
    //map() 함수에 전달되는 콜백 함수는 "각 요소를 변환하여 새로운 배열로 매핑(mapping)하는 역할을 함
    let tm = arr.map(item => <TailBall key={'b'+item}
                                         n={item} />);

    //플러스기호넣기
    tm.splice(6,0,<div className="text-3xl mx-2 font-bold" key ="sp">+</div>)                                    
    console.log(tm)
    setTags(tm);
 
  } 

  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-10">


         {tags}


        {/* <TailBall n ={11} />
     <TailBall n ={22} />
     <TailBall n ={30} />
     <TailBall n ={40} />
     <TailBall n ={3} />
     <TailBall n ={14} /> */}
      </div>

      <div className="flex justify-center items-center mb-10">
        <TailButton caption={'로또번호생성'} color='orange'
          handleClick={handleClick} />

      </div>

    </div>
  )
}

//리액트에서 콜백 함수는 주로 컴포넌트의 이벤트 처리, 상태 업데이트, 그리고 자식 컴포넌트에 함수를 전달하는 데 사용. 콜백 함수는 특정 이벤트가
//발생했을 때 실행되는 함수로, 보통 1.이벤트처리, 2.자식컴포넌트에 함수전달, 3.state를 다룰 때 수행된다.
