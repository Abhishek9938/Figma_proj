
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Orders from '../pages/Orders/Orders';
import { DarkModeProvider } from '../contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  )
}

export default App
