import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HelpCenter from './components/HelpCenter';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Home />
      <Footer />
    </div>
  );
}

export default App;
