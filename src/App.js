// import logo from './logo.svg';
import './App.css';
 import MyClock from './02/MyClock';
// import Hello from './01/Hello';
import { IoMdHome } from "react-icons/io";
 import BoxOffice from './07/BoxOffice';
 //import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
 import Lotto from './05/Lotto';
 import FoodMain from './06/FoodMain';
// import MyBox from './08/MyBox';
 import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
 import Gallery from './11/Gallery';
 import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RecoilMain from './15/RecoilMain';
//import Recoil1 from './15/Recoil1';
import Rest from './16/Rest';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                        flex justify-between items-center
                       bg-slate-500'>
        <p className='text-2xl font-bold p-5'>k-digital 8기 React</p>
        <ul className='flex justify-center items-center'>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/'>시계</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/lotto'>로또생성기</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/food'>푸드뱅크</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/boxOffice'>박스오피스</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/traffic'>교통사고</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/gallery'>관광</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/festival'>축제</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/fcst'>일기예보</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/RecoilMain'>RecoilMain</Link></li>
              <li className='mx-4 p-2 hoover: bg-slate-400 hoover:text-white rounded-md'><Link to='/Rest'>Rest</Link></li>

        </ul>
        <p className='text-3xl font-bold p-5'><IoMdHome />
        </p>
      </header>
      
      <main className='w-full grow
                      flex flex-col -*items-center
                      overflow-y-auto'>
        <Routes>
        <Route path = '/' element = {<MyClock />} />
        <Route path = '/lotto' element = {<Lotto />} /> 
        <Route path = '/food' element = {<FoodMain />} />
        <Route path = '/boxOffice' element = {<BoxOffice />} /> 
        <Route path = '/traffic' element = {<Traffic />} /> 
        <Route path = '/gallery' element = {<Gallery />} /> 
        <Route path = '/festival' element = {<Festival />} /> 
        <Route path = '/fcst' element = {<Fcst />} />
        <Route path = '/fcstlist' element = {<FcstList />} />
        <Route path = '/RecoilMain' element = {<RecoilMain />} />
        <Route path = '/Rest' element = {<Rest />} />

        </Routes>

        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <RouteMain /> */}
        {/* <MyRef /> */}
      </main>
      <footer className='w-full h-20 flex-shrink-0
                        flex justify-center items-center
                       text-white
                       bg-black'>
        <p className='font-bold'>조 효원</p>
      </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
