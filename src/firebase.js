// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDXO9oKynw_vjbP9NFCOfGd2gaYPKipiXc',
    authDomain: 'invisible-shop.firebaseapp.com',
    projectId: 'invisible-shop',
    storageBucket: 'invisible-shop.appspot.com',
    messagingSenderId: '308315231219',
    appId: '1:308315231219:web:083af1cc6ab21bb083f886',
    measurementId: 'G-72EYH0PJZN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
export default app;
