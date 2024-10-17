import Recoil3 from "./Recoil3";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";


//export default function Recoil2(probs) { ->Recoil2 (probs.y2)
 export default function Recoil2({y2}) {

  const [n, setN] = useRecoilState(AtomN);

  return (
  <div className="w-10/12 h-4/5 flex flex-col
                  mt-10 p-5 
                bg-lime-500 text-white font-bold">
      
      Recoil2 ({y2}, n = {n})
  </div>
  )
}
