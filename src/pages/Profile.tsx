
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Settings, LogOut, User, Building } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="text-center bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Faça login para ver seu perfil
            </h2>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">Cadastrar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getUserTypeIcon = () => {
    switch (user.user_type) {
      case 'estabelecimento':
        return <Building className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getUserTypeLabel = () => {
    switch (user.user_type) {
      case 'estabelecimento':
        return 'Estabelecimento';
      case 'admin':
        return 'Administrador';
      default:
        return 'Morador';
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Profile Header */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-xl">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <Badge variant="secondary" className="mt-2">
                  {getUserTypeIcon()}
                  <span className="ml-1">{getUserTypeLabel()}</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Options */}
        <div className="space-y-4">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="ghost" className="w-full justify-start" disabled>
                <Settings className="w-4 h-4 mr-3" />
                Editar Perfil
                <Badge variant="outline" className="ml-auto text-xs">Em breve</Badge>
              </Button>
            </CardContent>
          </Card>

          {user.user_type === 'estabelecimento' && (
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Negócio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start" disabled>
                  <Building className="w-4 h-4 mr-3" />
                  Gerenciar Estabelecimento
                  <Badge variant="outline" className="ml-auto text-xs">Em breve</Badge>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/planos">
                    <Settings className="w-4 h-4 mr-3" />
                    Ver Planos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="bg-white">
            <CardContent className="p-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={logout}
              >
                <LogOut className="w-4 h-4 mr-3" />
                Sair
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
