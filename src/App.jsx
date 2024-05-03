import { useEffect } from 'react'
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Services from './pages/Services';
import './App.css'
function App() {
  const location = useLocation();

  const alwaysOnTopPage = () => window.scrollTo(0, 0);
  useEffect(()=> {
         alwaysOnTopPage();
  }, [location])
  return (
    <Routes>
                   <Route path='/' element={<Home />} />
                  <Route path='/service/:id' element={<Services />} />
    </Routes>
  )
}

export default App
