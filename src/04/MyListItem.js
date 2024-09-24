
import { useState } from "react";//useState 변수 사용 (중요)
export default function MyListItem({ imgUrl, content, title}) {
  const [n, setN] = useState(0);
  const handleHclick = () => {
    setN(n+1);//setN();
    console.log(n);
  }

  return (
    <div className='w-full h-full
                      border border-gray-300
                      flex justify-center items-center'>
      <div className='w-1/3 flex justify-start items-start'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='w-2/3 h-full p-5 flex flex-col justify-start items-center'>
        <div className="flex flex-col  h-3/4">
          <div className="text-2xl font-bold mb-2">
            {title}
          </div>
          <div className="text-sm">
            {content}
          </div>
        </div>
        <div className="flex w-full h-1/4
                        justify-end items-end">
          <div className="text-2xl cursor-pointer"
              onClick={handleHclick}>
            ❤️
          </div>
          <div className="mx-2 font-bold">좋아요</div>
          <div>{n}</div>
        </div>
      </div>
    </div>
  )

}
