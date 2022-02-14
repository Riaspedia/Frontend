import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Routes from './components/routes/Routes';

function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <Login/> 
      <Register/> */}
    </div>
  );
}

export default App;
