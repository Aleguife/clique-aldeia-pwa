
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown, User, LogOut, Settings, MousePointer } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Início' },
  { path: '/search', label: 'Buscar' },
  { path: '/events', label: 'Eventos' }
];

export const HeaderNavigation: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Updated with MousePointer icon */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <MousePointer className="text-white w-5 h-5" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight uppercase">Clique Aldeia</span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Conectando comunidades</span>
            </div>
          </Link>

          {/* Navigation - Melhorada */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-50",
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
            
            {/* CTA Para Empresas - Melhorado */}
            <Link
              to="/planos"
              className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Para Empresas
            </Link>
          </nav>

          {/* User Menu - Modernizado */}
          <div className="flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-auto p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-9 w-9 ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white font-semibold">
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="hidden lg:block text-left">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-64 bg-white shadow-xl border-0 rounded-xl p-2" 
                  align="end" 
                  forceMount
                >
                  <div className="px-3 py-3 border-b border-gray-100">
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                  
                  <DropdownMenuItem asChild className="mt-2">
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <User className="h-4 w-4 text-gray-500" />
                      <span>Meu Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="my-2" />
                  
                  <DropdownMenuItem 
                    onClick={logout}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  asChild
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 rounded-lg"
                >
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 rounded-lg"
                >
                  <Link to="/register">Cadastrar</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
