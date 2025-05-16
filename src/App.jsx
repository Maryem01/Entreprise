import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App