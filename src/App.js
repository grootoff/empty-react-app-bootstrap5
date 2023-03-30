import './App.css';
import "./styles/variable.scss"
import "./styles/global.scss"
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
//Bootstrap
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Dashboard/>
    </>
  );
}

export default App;
