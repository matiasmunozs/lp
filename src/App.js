import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componentes/NavBar/NavBar';
import { Header } from './Componentes/Header/Header';
import { CardTitle } from './Componentes/CardTitle/CardTitle';
import { Footer } from "./Componentes/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header/>
      <CardTitle/>
      <Footer/>


    </div>
  );
}

export default App;
