
import './App.css';
import Header from "./Components/Header/Header";
// import Dropdown from "./Components/Header/Dropdown" ;
import Home from "./Components/Home/Home";
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router> 
    <div>
      <Header />
      
      <Home />
    </div>
  </Router>
  );
}

export default App;
