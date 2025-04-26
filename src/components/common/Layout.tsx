
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { StarryBackground, FloatingClouds, DreamySparks } from './FloatingElements';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <StarryBackground />
      <FloatingClouds />
      <DreamySparks />
      
      <div className="flex-grow">
        <Navbar />
        <main className="container mx-auto px-4 flex-grow">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
