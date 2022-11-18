import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutAdmin from '../layouts/LayoutAdmin';
import Chats from '../pages/Chats';
import Home from '../pages/Home';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutAdmin />} >
        <Route index element={<Home />} />
        <Route path='chat' element={<Chats />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};
