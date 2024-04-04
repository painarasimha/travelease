import './index.css'
import Navbar from './components/Navbar/Navbar';
import HotelPage from './components/Hotel'
import Homepage from './components/Home'
import TravelPage from './components/Travel';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Home';
import TravelGuidePage from './components/Travel';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><HomePage/></>
    },
    {
      path: "/travelpage",
      element: <><Navbar/><TravelGuidePage/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
      {/*<HotelPage/>*/}
    </div>
  );
}

export default App;
