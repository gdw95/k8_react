
//이 컴포넌트를 사용하기 위해서는 imgUrl, title, content 속성 3개가 필요
export default function TailCard({imgUrl, title, content, kw}) {
 
 // let kws = '';
 // if (kw.includes(',')){
 //  kws = kw.split(',')
 // }
 // else{
 //  kws.push(kw);
 // }

 const kws = kw.includes(',') ? kw.split(',') :[kw]; //삼항연산자
 const kwTags = kws.map(item => <span key={item}
                                       className="inline-flex bg-slate-400
                                       text-sm font-bold
                                       p-2 m-1 rounded-xl hover:bg-blue-800">
                                {item}
                               </span>)
                               
 console.log(kws)

 return (
  <div>
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

    <img className="rounded-t-lg"
     // src="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg" 
     src={imgUrl}
     alt="" />
    <div className="p-5">
     <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {title}     
      </h1>
     <p className="mb-3 font-normal text-gray-700">
      {content}     
      </p>
     <p>
      {kwTags}
     </p>
    </div>
   </div>

  </div>
 )
}
