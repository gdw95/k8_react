import { Link } from "react-router-dom"

export default function RouteHome() {
 //1.주소 뒤에 /로 들고옴
 //2.쿼리스트링 방식으로 들고옴


 return (
  <div className="w-1/2 grid grid-cols-2 mt-5">
   <div>
    <h1 className="text-3xl justify-center items-center 
    mb-5 p-5 bg-slate-300">page1</h1>
    <ul>
    <li><Link to='/p1/🍎/사과'>사과 🍎</Link></li>
    <li><Link to='/p1/🍌/바나나'>바나나 🍌</Link></li>
    <li><Link to='/p1/🥕/당근'>당근 🥕</Link></li>    </ul>
   </div>
   <div>
    <h1 className="text-3xl justify-center items-center
    mb-5 p-5 bg-slate-300">page2</h1>
    <ul>
    <li><Link to='/p2?item=🍎&item2=사과'>사과 🍎</Link></li>
    <li><Link to='/p2?item=🍌&item2=바나나'>바나나 🍌</Link></li>
    <li><Link to='/p2?item=🥕&item2=당근'>당근 🥕</Link></li>
   </ul>
   </div>
   </div>
   )
}
