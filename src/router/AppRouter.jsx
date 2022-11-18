
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminRouter } from '../admin/router/AdminRouter';
import LayoutAuth from '../auth/layouts/LayoutAuth';
import { AuthRouter } from '../auth/router/AuthRouter';

export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
    <Routes>

      {
        (authStatus === 'not-authenticated')
          ? <Route path='/auth/*' element={<AuthRouter />} />
          : <Route path='/*' element={<AdminRouter />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  );
};
