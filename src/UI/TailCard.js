
//이 컴포넌트를 사용하기 위해서는 imgUrl, title, content 속성 3개가 필요
export default function TailCard({imgUrl, title, content, kw}) {
 return (
  <div>
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

    <img className="rounded-t-lg"
     // src="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg" 
     src={imgUrl}
     alt="" />
    <div className="p-5">
     <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {title}     </h1>
     <p className="mb-3 font-normal text-gray-700">
      {content}     </p>
     <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
      text-white bg-blue-700 rounded-lg
      hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      {kw}
     </p>
    </div>
   </div>

  </div>
 )
}
