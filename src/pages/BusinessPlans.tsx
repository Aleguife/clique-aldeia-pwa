import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, TrendingUp, Phone, Mail, MapPin, ArrowLeft, Target, Search, Calendar, MessageCircle, BarChart, Shield, Zap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
const BusinessPlans = () => {
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
  const benefits = [{
    icon: Search,
    title: 'Maior Visibilidade',
    description: 'Apareça nos resultados de busca quando clientes procurarem seu tipo de negócio na região.'
  }, {
    icon: Target,
    title: 'Público Local',
    description: 'Conecte-se diretamente com moradores de Aldeia da Serra que procuram seus serviços.'
  }, {
    icon: TrendingUp,
    title: 'Aumento nas Vendas',
    description: 'Empresas parceiras relatam aumento médio de 40% nas vendas após se cadastrarem.'
  }, {
    icon: Calendar,
    title: 'Divulgação de Eventos',
    description: 'Promova eventos, promoções e novidades diretamente para a comunidade local.'
  }];
  const howItWorks = [{
    step: '1',
    title: 'Cadastre seu Negócio',
    description: 'Crie um perfil completo com fotos, horários e informações de contato.'
  }, {
    step: '2',
    title: 'Seja Encontrado',
    description: 'Apareça nos resultados quando clientes buscarem seus produtos ou serviços.'
  }, {
    step: '3',
    title: 'Conecte-se com Clientes',
    description: 'Receba contatos diretos e aumente suas vendas na comunidade local.'
  }];
  const plans = [{
    name: 'Básico',
    price: 'R$ 99',
    period: '/mês',
    description: 'Ideal para pequenos negócios',
    features: ['Perfil completo do estabelecimento', 'Galeria de até 5 fotos', 'Informações de contato e horários', 'Avaliações de clientes', 'Suporte por email'],
    highlighted: false
  }, {
    name: 'Profissional',
    price: 'R$ 199',
    period: '/mês',
    description: 'Para negócios em crescimento',
    features: ['Tudo do plano Básico', 'Galeria ilimitada de fotos', 'Publicação de eventos e promoções', 'Destaque na busca', 'Estatísticas de visualização', 'Suporte prioritário por WhatsApp'],
    highlighted: true
  }, {
    name: 'Premium',
    price: 'R$ 299',
    period: '/mês',
    description: 'Máxima visibilidade',
    features: ['Tudo do plano Profissional', 'Banner destacado na página inicial', 'Newsletter mensal para clientes', 'Integração com redes sociais', 'Relatórios detalhados de performance', 'Suporte telefônico dedicado'],
    highlighted: false
  }];
  const testimonials = [{
    name: 'Maria Silva',
    business: 'Salão Beleza & Charme',
    content: 'Desde que me cadastrei no Aldeia Connect, minha agenda ficou sempre cheia. Os moradores agora me encontram facilmente!',
    rating: 5
  }, {
    name: 'João Santos',
    business: 'Restaurante Sabor Local',
    content: 'Excelente plataforma! Aumentamos nosso delivery em 60% apenas divulgando nosso cardápio aqui.',
    rating: 5
  }, {
    name: 'Ana Costa',
    business: 'Pet Shop Amigo Fiel',
    content: 'A visibilidade que ganhamos na região foi incrível. Recomendo para todos os empresários da Aldeia.',
    rating: 5
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transforme seu negócio no
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                coração de Aldeia da Serra
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Conecte-se com mais de 5.000 moradores locais e multiplique suas vendas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5" />
                <span>+5.000 moradores ativos</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5" />
                <span>+40% aumento médio nas vendas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Star className="w-5 h-5" />
                <span>Líder regional em conectividade</span>
              </div>
            </div>
            <div className="pt-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Comece Agora Gratuitamente
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Benefits Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Aldeia Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A plataforma que conecta seu negócio com a comunidade local
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Em apenas 3 passos simples, seu negócio estará conectado com toda a comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>)}
          </div>
        </section>

        {/* Plans Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os planos incluem tudo que você precisa para ter sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.highlighted ? 'ring-2 ring-blue-500 bg-gradient-to-b from-blue-50 to-white' : 'bg-white hover:shadow-lg'}`}>
                {plan.highlighted && <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Mais Popular
                  </Badge>}
                
                <CardHeader className="text-center space-y-4 pt-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>)}
                  </ul>

                  <Button className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.highlighted ? 'default' : 'outline'}>
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Social Proof */}
        <section className="text-center bg-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Empresas Cadastradas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.000+</div>
              <p className="text-gray-600">Usuários Ativos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-gray-600">Aumento Médio nas Vendas</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos parceiros dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de sucesso de empresários da Aldeia da Serra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para fazer seu negócio crescer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 150 empresas que já estão conectadas com a comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Falar com Consultor
            </Button>
          </div>
        </section>

        {/* Contact Form */}
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
                <span className="text-gray-700">contato@aldeiaconnect.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Aldeia da Serra, Barueri - SP</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
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
      </div>
    </div>;
};
export default BusinessPlans;