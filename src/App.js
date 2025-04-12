import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 bg-light">
      <Calculator />
      <Footer/>
    </div>
  );
}

export default App;
