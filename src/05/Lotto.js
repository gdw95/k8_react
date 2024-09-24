import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"

export default function Lotto() {
 const handleClick = () => {
  console.log('handleClick1')
  
 }


  return (
    <div className="w-full">
     <div className="flex justify-center items-center mb-10">
     <TailBall n ={11} />
     <TailBall n ={22} />
     <TailBall n ={30} />
     <TailBall n ={40} />
     <TailBall n ={3} />
     <TailBall n ={14} />
     </div>
      
      <div className="flex justify-center items-center mb-10">
       <TailButton caption={'로또번호생성'} color='orange'
       handleClick = {handleClick} />

      </div>
      
    </div>
  )
}
