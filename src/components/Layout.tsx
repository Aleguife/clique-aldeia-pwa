
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';
import { HeaderNavigation } from './HeaderNavigation';
import { Footer } from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Páginas que não mostram a navegação
  const noNavPages = ['/login', '/register', '/planos'];
  const showNavigation = !noNavPages.includes(location.pathname);
  
  // Páginas que não mostram o footer original
  const noFooterPages = ['/planos'];
  const showFooter = !noFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showNavigation && !isMobile && <HeaderNavigation />}
      
      <main className={`flex-1 ${showNavigation && !isMobile ? 'pt-16' : ''} ${showNavigation && isMobile ? 'pb-20' : ''}`}>
        {children}
      </main>
      
      {showFooter && <Footer />}
      
      {showNavigation && isMobile && <BottomNavigation />}
    </div>
  );
};
