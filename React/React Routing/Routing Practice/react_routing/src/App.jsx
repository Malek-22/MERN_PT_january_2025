import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/color/bgcolor" element={<ColoredHello />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome</h1>;
}

function Number() {
  return <h1>{window.location.pathname.slice(1)}</h1>;
}

function Hello() {
  return <h1>Hello</h1>;
}

function ColoredHello() {
  const { color, bgcolor } = useParams();

  return (
    <h1 style={{ color: color, backgroundColor: bgcolor }}>
      {window.location.pathname.split('/')[2]}
    </h1>
  );
}

export default App;
