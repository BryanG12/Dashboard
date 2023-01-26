import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutAdmin from '../layouts/LayoutAdmin';
import { Profile } from '../pages/account/Settings';
import Chats from '../pages/Chats';
import Home from '../pages/Home';
import Tickets from '../pages/Tickets';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutAdmin />} >
        <Route index element={<Home />} />
        <Route path='account/profile' element={<Profile />} />
        <Route path='chat' element={<Chats />} />
        <Route path='tickets' element={<Tickets />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};
