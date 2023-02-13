import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Foodspage from './Pages/Food';



function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
     {/* <AllRoutes/> */}
     {/* <Navbar/> */}
     <Foodspage/>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
