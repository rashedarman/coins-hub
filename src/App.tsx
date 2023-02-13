import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoinDetailsPage from './pages/CoinDetail';
import CoinsPage from './pages/Coins';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<CoinsPage />} />
        <Route path="/coins/:coinId" element={<CoinDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
