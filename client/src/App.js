import{Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasssword from './pages/Auth/ForgetPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from'./components/Routes/AdminRoute';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path='/Policy' element={<Policy/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </>
  );
}

export default App;
