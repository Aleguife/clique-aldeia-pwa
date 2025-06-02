
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const BusinessPlansContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fale conosco
          </h2>
          <p className="text-xl text-gray-600">
            Nossa equipe está pronta para ajudar seu negócio a crescer na Aldeia da Serra.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">(11) 99999-9999</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">contato@cliquealdeia.com.br</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Aldeia da Serra, Barueri - SP</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center text-base">
            <MessageCircle className="w-5 h-5 mr-2" />
            Atendimento Especializado
          </h3>
          <p className="text-blue-800">Comece com o plano Básico e evolua conforme seu negócio cresce. Você pode fazer upgrade a qualquer momento!</p>
        </div>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Solicite uma Demonstração</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Nome do negócio</Label>
                <Input id="business" name="business" value={formData.business} onChange={handleChange} placeholder="Sua empresa" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 99999-9999" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Conte-nos sobre seu negócio e como podemos ajudar..." rows={4} />
            </div>

            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
