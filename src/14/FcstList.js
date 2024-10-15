import { useSearchParams } from "react-router-dom"

export default function FcstList() {

  const [sParams] = useSearchParams();
  const gubun = sParams.get('gubun');
  console.log('gubun= ', gubun);

  const dt = sParams.get('dt');
  const x = sParams.get('x');
  const y = sParams.get('y');
  const area = sParams.get('area');

  console.log(gubun, dt, x, y, area);



  return (
    <div>
      dlfrllist
    </div>
  )
}
