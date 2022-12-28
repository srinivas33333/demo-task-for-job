import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';




export default function DashboardLayout() {

  return (
   <>
      <Header />
      <div>
        <Outlet />
      </div>
   </>
   
  );
}
