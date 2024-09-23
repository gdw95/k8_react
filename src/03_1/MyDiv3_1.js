
export default function MyDiv3(probs) {
  return (
   <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-blue-400 text-white font-bold">
      <div className="w-full h-10 p-5
                      flex justify-start items-center ">
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </div>
    </div>
  )
}
