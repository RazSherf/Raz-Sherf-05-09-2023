import {  Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fav' element={<Favorite/>}></Route>
    </Routes>
  );
}

export default App;
