import TailBall from "../05/TailBall";
import TailButton from "../UI/TailButton";

export default function Fcst() {
  return (
    <div>
      <div className="w-full flex">
       <h1 className="font-bold">기상청 단기예보</h1>
       <div>
        <TailButton caption='단기예보메인' color='lime' handleClick='' />
       </div>
      </div>

      <div className="w-10/12">
       <h1 className="font-bold text-2xl">단기예보 선택</h1>
       <div>
        <input type='date' id='dt' name='dt' />
        연도월일
       </div>
       <input type='checkbox' id='ck' name='ck' />
       선택
       <div>
        <TailButton caption='초단기예보' color='lime' handleClick='' />
       </div>
       <div>
        <TailButton caption='단기예보' color='lime' handleClick='' />
       </div>
      </div>
    </div>
  )
}
