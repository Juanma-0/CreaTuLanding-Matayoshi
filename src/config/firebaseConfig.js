// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDuaa_hVi8AtR82GbPPnGbGZJMSiitOR3Q",
authDomain: "creatulanding-matayoshi.firebaseapp.com",
projectId: "creatulanding-matayoshi",
storageBucket: "creatulanding-matayoshi.firebasestorage.app",
messagingSenderId: "487357229891",
appId: "1:487357229891:web:d63d84d423a1913ccf9df6",
measurementId: "G-BE0VPXEQC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
