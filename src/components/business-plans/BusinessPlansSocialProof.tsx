
import React from 'react';

export const BusinessPlansSocialProof: React.FC = () => {
  return (
    <section className="text-center bg-gray-100 rounded-3xl p-12 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-5xl font-bold text-blue-600 mb-4">400+</div>
          <p className="text-gray-600 text-lg">Empresas Cadastradas</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-blue-600 mb-4">15.000+</div>
          <p className="text-gray-600 text-lg">Usuários</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-blue-600 mb-4">Destaque-se</div>
          <p className="text-gray-600 text-lg">Aumente suas Vendas</p>
        </div>
      </div>
    </section>
  );
};
