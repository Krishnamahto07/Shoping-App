import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className='flex flex-col gap-5'>
        
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

    </div>
  );
}

export default App;
