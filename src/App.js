import logo from './logo.svg';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './containers/About';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
