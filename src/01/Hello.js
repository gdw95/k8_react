function Hello() {//사용자 정의 컴포넌트 = 태그 처럼 사용, 무조건 대문자로 시작. 반드시 펑션안에 리턴값이 들어가야함
let today = new Date();
today = today.toLocaleString();

let name = 'k-digital';

 return (//jsx문법, return 안에 태그는 하나만->div 태그로 묶어봄. (부모태그 하나만)-> <> 프래그먼트 태그(의미없이 묶기만 하는 태그)
  //프래그태그<></>:실제돔에 노드가 생기지 않음.
  <> 
   <p className="p1">
    Hello React
   </p>
   <p className="text-4xl">
    {name === 'k-digital'?'k-digital jhw':'jhw'} 
   </p>
   <p className="text-4xl">
    {/* {new Date().toLocaleString()} */}
    {today}
   </p>
  </>
 );
}

export default Hello;//App.js에쓸수있어짐

//class가 아닌 className을 사용하는 이유: class속성은 반드시 className. 소스코드로 반환될땐 class로 반환됨
//JS 예약어와 같지않도록 하기위한 문법사항 필히 준수
//종료태그 반드시
//tailwind 사이트 필요한 기능 사용.
//태그가 사용되어지지않고 묶어지기만 함. 프래그먼트 태그 fragment tag <></>
//태그에 속성을 다는 것: props 
//상태관리: state
//jsx 기본문법 {}사용법
//DOM의 마지막 자식노드 P태그가 시간업데이트를 함. 나머지 자식노드들은 변경없음.