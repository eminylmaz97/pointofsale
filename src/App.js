
import './App.css';
import Searccomp from './components/Searccomp';
import NavBar from './components/Navbarcomp';
import Calculatorcomp from './components/Calculatorcomp';
import Menucomp from './components/Menucomp';






function App() {
  return (
    <div  className="App">
     <Searccomp></Searccomp>
     <NavBar></NavBar>
     <Calculatorcomp></Calculatorcomp>
     <Menucomp></Menucomp>
    </div>
  );
}

export default App;
