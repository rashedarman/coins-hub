import { Route, Routes } from 'react-router-dom';
import CoinsPage from './pages/Coins';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<CoinsPage />} />
      </Routes>
    </div>
  );
}

export default App;
