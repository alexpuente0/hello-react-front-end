import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from './components/Hello';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/greet" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
