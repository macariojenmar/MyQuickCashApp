//import '../bootstrap';
//import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import App from './components/App';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('app')).render(     
    <BrowserRouter>

        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/usermanagement" element={<UserManagement/>} />
        </Routes>
    
    </BrowserRouter>        
);