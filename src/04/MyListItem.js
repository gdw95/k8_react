
export default function MyListItem() {
  return (
    <div>
      <div className= 'w-full'>
     <div className= 'w-full flex justify-center items-center border border-gray-300'>
      <div className= 'w-1/3 flex justify-center items-start'>
       이미지
       </div>                
        <div className='w-2/3 flex flex-col justify-between items-center'>
          <div>
            <div>
              title
            </div>
            <div>
              content
            </div>
          </div>
          <div>
            <span>❤️</span>
            <span>좋아요</span>
            <span>0</span>
          </div>
        </div>                
      </div>
    </div>
    </div>
  )
}
