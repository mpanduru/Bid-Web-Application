import { NavComp } from './components/pages/NavComp';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesContext } from './context/RoutesContext';

function App() {
  return (
    <div className='App'>
      < AuthProvider >
        <Router>
          <NavComp />
          <RoutesContext />
        </Router>
      </AuthProvider >
    </div>
  );
}

export default App;
