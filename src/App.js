import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Person from './components/Person'
import NotFound from './components/NotFound'

function App() {
  return (
  <div className='App'>
    <header className='App-header'>
   <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/person" element={<Person />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </BrowserRouter> 
     </header>
     </div>
  )
}

export default App;