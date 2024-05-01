import './index.css'
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/auth'
import Navbar from './components/Navbar/Navbar';
import HotelPage from './components/Hotel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Home';
import TravelGuidePage from './components/Travel';
import ProfilePage from './components/Profile';
import LoginForm from './components/LoginForm';
import GuidePag1 from './components/GuidePag1';
import GuidePag2 from './components/GuidePag2';
import GuidePag3 from './components/GuidePag3';
import GuidePag4 from './components/GuidePag4';
import GuidePag5 from './components/GuidePag5';
import GuidePag6 from './components/GuidePag6';
import SignupForm from './components/Signup';
import ProfileDiv from './components/ProfileDiv';

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
      element: <><Navbar/><GuidePag3/></>
    },
    {
      path: "/guidepage4",
      element: <><Navbar/><GuidePag4/></>
    },
    {
      path: "/guidepage5",
      element: <><Navbar/><GuidePag5/></>
    },
    {
      path: "/guidepage6",
      element: <><Navbar/><GuidePag6/></>
    },
    {
      path: "/signup",
      element: <><Navbar/><SignupForm/></>
    },
    {
      path: "/profilediv",
      element: <><Navbar /><ProfileDiv /></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
