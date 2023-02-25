import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import AccountPage from './pages/Account/AccountPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import ErrorPage from './pages/Error/ErrorPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import OrdersPage from './pages/Orders/OrdersPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import ShopPage from './pages/Shop/ShopPage';
import SignUpPage from './pages/SignUp/SignUpPage';

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route
                    path='/productdetail/:productID'
                    element={<ProductDetailPage />}
                />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/orders' element={<OrdersPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
