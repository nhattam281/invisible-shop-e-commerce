import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/productdetail' element={<ProductDetailPage />} />
                <Route path='/shop' element={<ShopPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
}

export default App;
