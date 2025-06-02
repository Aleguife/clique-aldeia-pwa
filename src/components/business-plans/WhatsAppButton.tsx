
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos para empresas do Clique Aldeia.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center space-x-3 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden lg:block font-medium text-sm whitespace-nowrap">
        Dúvidas? Fale conosco!
      </span>
    </a>
  );
};
