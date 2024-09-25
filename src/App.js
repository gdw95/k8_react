// import logo from './logo.svg';
import './App.css';
// import MyClock from './02/MyClock';
// import Hello from './01/Hello';
import { IoMdHome } from "react-icons/io";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';


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
                      flex flex-col justify-center items-center
                      overflow-y-auto'>


        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {<FoodMain />}


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
