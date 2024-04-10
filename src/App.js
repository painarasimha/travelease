import './index.css'
import Navbar from './components/Navbar/Navbar';
import HotelPage from './components/Hotel'
import Homepage from './components/Home'
import TravelPage from './components/Travel';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Home';
import TravelGuidePage from './components/Travel';
import ProfilePage from './components/Profile';
import LoginForm from './components/LoginForm';
import GuidePag1 from './components/GuidePag1';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><HomePage/></>
    },
    {
      path: "/travelpage",
      element: <><Navbar/><TravelGuidePage/></>
    },
    {
      path: "/hotel",
      element: <><Navbar/><HotelPage/></>
    },
    {
      path: "/profile",
      element: <><Navbar/><ProfilePage/></>
    },
    {
      path: "/login",
      element: <><Navbar/><LoginForm/></>
    },
    {
      path: "/guidepage1",
      element: <><Navbar/><GuidePag1/></>
    }
  ])

  return (
    <div className='overflow-y-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
