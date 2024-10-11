import { useNavigate } from "react-router-dom"
import TailButton from "../UI/TailButton"

export default function RouteNav() {
 const navigate = useNavigate();
 
  return (
    <div className="w-10/12 grid grid-cols-3 gap-2 mt-10">
     
     <div>
      <TailButton caption = '홈'
                      color = 'blue'
                      handleClick = {() => navigate('/')} 
                      size = 'w-full'/> 
     </div>
     <div>
      <TailButton caption = 'page1'
                      color = 'blue'
                      handleClick = {() => navigate('/p1')} 
                      size = 'w-full'/> 
     </div>
     <div>
      <TailButton caption = 'page2'
                      color = 'blue'
                      handleClick = {() => navigate('/p2')} 
                      size = 'w-full'/> 
     </div>
     
    </div>
  )
}
