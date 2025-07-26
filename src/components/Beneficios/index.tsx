'use client';

import { useState } from 'react';
import Image from 'next/image';

const Beneficios = ({ img, descripcion, beneficios }: any) => {
  const [activeTab, setActiveTab] = useState<'descripcion' | 'beneficios'>('beneficios');

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 px-6 py-10 bg-white">
      {/* Imagen */}
      <div className="md:w-1/2 w-full">
        <Image src={img} alt="Conductor feliz" className="rounded-lg w-full h-auto" />
      </div>

      {/* Tabs y contenido */}
      <div className="md:w-1/2 w-full">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-4 cursor-pointer">
          <button
            className={`px-4 py-2 font-semibold uppercase text-sm cursor-pointer ${activeTab === 'descripcion' ? 'text-[#fff] bg-[#171E52]' : 'text-gray-400'
              }`}
            onClick={() => setActiveTab('descripcion')}
          >
            DESCRIPCIÓN
          </button>
          <button
            className={`px-4 py-2 font-semibold cursor-pointer uppercase text-sm ${activeTab === 'beneficios' ? 'text-white bg-[#171E52]' : 'text-gray-400'
              }`}
            onClick={() => setActiveTab('beneficios')}
          >
            BENEFICIOS
          </button>
        </div>

        {/* Contenido */}
        {activeTab === 'descripcion' && (
          <div className="text-gray-700 space-y-2">
            <h3 className="font-semibold text-[#171E52]">Descripción</h3>
            <p>{descripcion}</p>
          </div>
        )}

        {activeTab === 'beneficios' && (
          <div className="text-gray-700 space-y-4">
            <h3 className="text-[#171E52]">Beneficios</h3>
            <ul className="space-y-2 list-none">
              {
                beneficios?.map((item: any) => {
                  return (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="text-[#171E52]">✔</span>
                      <span>{item?.beneficio}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beneficios;