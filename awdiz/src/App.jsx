import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Effect2 from './components/Effect.jsx';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;