
//ctrl + c 종료, npm install recoil 설치 진행
//같은 리콜변수를 공유하고 싶은 컴포넌트끼리 묶어줄 것. 
//공유하고싶은 컴포넌트 중 최상위 컴포넌트를 리코일 루트로 묶어줌
//공유하는 리코일 변수는 따로 파일로 관리함.(컴포넌트에 변수선언X)

import { RecoilRoot } from "recoil"
import Recoil1 from "./Recoil1"

export default function RecoilMain() {
 return (
  <RecoilRoot>
  <div className="w-full h-full flex flex-col justify-center items-center">
    <Recoil1 />
  </div>
  </RecoilRoot>

 )
}
