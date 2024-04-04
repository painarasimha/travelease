import './index.css'
import Navbar from './components/Navbar/Navbar';
import HotelPage from './components/Hotel'
import Signup from './components/Signup';
import Homepage from './components/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      {/*<HotelPage/>*/}
    </div>
  );
}

export default App;
