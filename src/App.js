import './index.css'
import Navbar from './components/Navbar/Navbar';
import HotelPage from './components/Hotel'
import Homepage from './components/Home'
import TravelPage from './components/Travel';

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <TravelPage/>
      <HotelPage/>
    </div>
  );
}

export default App;
