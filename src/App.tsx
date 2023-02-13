import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoinsPage from './pages/Coins';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<CoinsPage />} />
      </Routes>
    </div>
  );
}

export default App;
