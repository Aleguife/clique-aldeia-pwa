
import React from 'react';

export const BusinessPlansSocialProof: React.FC = () => {
  return (
    <section className="text-center bg-gray-100 rounded-2xl p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">400+</div>
          <p className="text-gray-600">Empresas Cadastradas</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">15.000+</div>
          <p className="text-gray-600">Usuários</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">Destaque-se</div>
          <p className="text-gray-600">Aumente suas Vendas</p>
        </div>
      </div>
    </section>
  );
};
