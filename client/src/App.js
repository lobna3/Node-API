
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/addUser" element={<Details />} />
    <Route path="/addProduct" element={<AddProduct />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
