import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
