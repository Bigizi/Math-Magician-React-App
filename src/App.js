import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="lists">
          <li><Link to="/">Home</Link></li>
          |
          <li><Link to="/calc">Calculator</Link></li>
          |
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
