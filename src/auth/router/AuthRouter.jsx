import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutAuth from '../layouts/LayoutAuth';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutAuth />} >
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Route>
    </Routes>
  );
};
