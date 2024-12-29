import React from 'react';
import Footer from "./Footer/Footer";
import Header from './Header/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )
}

export default Layout