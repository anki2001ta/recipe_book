import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Foodspage from './Pages/Food';
import Signup from './Validation/Signup';



function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
     {/* <AllRoutes/> */}
     {/* <Navbar/> */}
     {/* <Foodspage/> */}
     <AllRoutes/>
    </div>
  );
}

export default App;
