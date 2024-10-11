import { useLocation, useSearchParams } from "react-router-dom"

export default function RoutePage2() {
 const loc = useLocation();//오브젝트
 console.log(loc)
 console.log(loc.pathname)
 console.log(loc.search.replace('?', '').split('&'))


 const [sparams] = useSearchParams();
 const qlist = [...sparams]
 console.log(sparams);
 console.log(qlist);


  return (
    <div>
      RoutePage2
      {
      qlist.map(item => <span>item[1]</span>)
      }
    </div>
  )
}
