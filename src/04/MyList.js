import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {

 console.log(MyListData)
 const tags = MyListData.map( item => <MyListItem //map()은 돌고있는 배열의 수 만큼 반환값을 만들어줌
  key = {item.title}
  imgUrl = {item.imgUrl}
  content = {item.content}
  title = {item.title} />);
  //tags는 태그를 가지고있는 배열-> 그대로 사용가능

  return (
   <div className= 'w-10/12 grid grid-cols-2 gap-4'>
    {tags}
    {/* <MyListItem />
    <MyListItem />
    <MyListItem />
    <MyListItem /> */}
   </div>
  )
}
      