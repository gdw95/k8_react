import { DiExtjs } from "react-icons/di";

export default function MyBox01() {
 return (
  <div className="w-full h-full flex flex-col justify-center items-center">

   <div className="w-10/12 grid grid-cols-2 gap-4">

    <div className="w-full bg-blue-600">
     <h1 className="flex justify-center items-center text-white">
      블루
     </h1>
     <div className="flex justify-center items-center">
      버튼
     </div>
    </div>

    <div className="w-full bg-orange-600">
     <h1 className="flex justify-center items-center text-white">
      오렌지
     </h1>
     <div className="flex justify-center items-center">
      버튼
     </div>
    </div>
   </div>
  </div>
 )
}
