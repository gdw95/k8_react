// import logo from './logo.svg';
import './App.css';
// import MyClock from './02/MyClock';
// import Hello from './01/Hello';
import { IoMdHome } from "react-icons/io";
//  import BoxOffice from './07/BoxOffice';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import MyBox from './08/MyBox';
//import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';

function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                        flex justify-between items-center
                       bg-slate-500'>
        <p className='text-2xl font-bold p-5'>k-digital 8기 React</p>
        <p className='text-3xl font-bold p-5'><IoMdHome />
        </p>
      </header>

      <main className='w-full grow
                      flex flex-col -*items-center
                      overflow-y-auto'>

        {/* {<MyClock />} */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* {<FoodMain />} */}
        {/* <BoxOffice /> */}
        {/* <MyBox /> */}
        {/*<Traffic /> */}
        {/* <MyRef /> */}
<Gallery />
      </main>
      <footer className='w-full h-20
                        flex justify-center items-center
                       text-white
                       bg-black'>
        <p className='font-bold'>조 효원</p>
      </footer>

    </div>
  );
}

export default App;
