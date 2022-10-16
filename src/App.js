import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Navbar from './components/shared/Navbar';
import Home from './components/pages/Home';
import QuizDetails from './components/solid/QuizDetails';
import Statics from './components/pages/Statics';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
        <Navbar />
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz_:id" element={<QuizDetails />} />
        <Route path="/statics" element={<Statics />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
