import MyBox from "./MyBox"
import { useState, useEffect } from "react"

export default function MyBoxFlag({color}) {//props //구조분해 해서 받겠다->{속성값}

const [flag, setFlag] = useState(false);
const colorObj = {
  'blue' : {
    'bg-500' : bg-blue-500,
    'text-700' : 'text-blue-700',
    'border600' : 'border-blue-600',
  },
  'orange' : {
    'bg-500' : bg-orange-500,
    'text-700' : 'text-orange-700',
    'border600' : 'border-orange-600',
  },
  'lime' : {
    'bg-500' : bg-lime-500,
    'text-700' : 'text-lime-700',
    'border600' : 'border-lime-600',
  },
}

const handleClick = () => {
 setFlag(!flag);
}

useEffect(() => {
 console.log('useEffect =>', flag)
});

return (
  
    <div className={`w-1/3 ${flag ? obj['bg-500']:''}
                    flex flex-col justify-center items-center
                    border border-slate-400 rounded-md
                    p-5 m-5`}>
      <h1 className={`flex justify-center items-center
                    text-3xl font-bold
                    p-5 m-5 ${obj['bg-500']} bg-white
                    border border-slate-600 rounded-md
                    `}>
        {color}
      </h1>
      <div className={`flex justify-center items-center
                    text-xl font-bold
                    border border-blue-600  bg-blue-50 rounded-md
                    p-5 m-5`}
           onClick={handleClick}>
            {color} Toggle
      </div>
    </div>      
         
  
)
}