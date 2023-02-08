import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import ShopPage from './pages/Shop/ShopPage';
import SignUpPage from './pages/SignUp/SignUpPage';

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
            <Route path='/signup' element={<SignUpPage />} />
        </Routes>
    );
}

export default App;
