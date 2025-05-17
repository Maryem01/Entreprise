import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router';
import Footer from './Component/Footer';
import WhatsAppButton from './Page/Home/whatAppButton'; // ✅ Add this

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton /> {/* ✅ Now it's always visible */}
    </div>
  );
};

export default App;
