import './index.css'
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home';
import HotelsPage from './components/Hotel';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HotelPage from './components/Hotel';
import Signup from './components/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/hotel",
      element: <HotelPage/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ])
  return (
    <div>
      <Navbar/>
      <RouterProvider router={router}/>
      <HomePage/>
      <HotelsPage/>
    </div>
  );
}

export default App;
