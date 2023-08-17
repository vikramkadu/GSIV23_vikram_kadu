import './style/style.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailsPage from './pages/home/DetailsPage';
import ListPage from './pages/home/ListPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
