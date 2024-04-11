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
import GuidePag2 from './components/GuidePag2';
import SignupForm from './components/Signup';

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
    },
    {
      path: "/guidepage2",
      element: <><Navbar/><GuidePag2/></>
    },
    {
      path: "/guidepage3",
      element: <><Navbar/><GuidePag2/></>
    },
    {
      path: "/guidepage4",
      element: <><Navbar/><GuidePag2/></>
    },
    {
      path: "/guidepage5",
      element: <><Navbar/><GuidePag2/></>
    },
    {
      path: "/guidepage6",
      element: <><Navbar/><GuidePag2/></>
    },
    {
      path: "/signup",
      element: <><Navbar/><SignupForm/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
