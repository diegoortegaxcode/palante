// components/Footer.tsx
'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#24246b] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2 md:text-[16px]">Inicio</h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]">Servicios</li>
            <li className="md:text-[16px]">Testimonio</li>
            <li className="md:text-[16px]">Beneficios</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 md:text-[16px]">Servicios</h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]">PaMotors</li>
            <li className="md:text-[16px]">PaPymes</li>
            <li className="md:text-[16px]">Pafactoring</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 md:text-[16px]">Quiénes somos</h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]">Nosotros</li>
            <li className="md:text-[16px]">Empresas del grupo</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 md:text-[16px]">Contáctanos</h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]">Datos de contacto</li>
            <li className="md:text-[16px]">Oficinas</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/40 mt-8 pt-4 max-w-6xl mx-auto text-sm mb-10">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span className="font-bold md:text-[16px]">Trabaja con nosotros</span>
          <Link href={'/terminos-y-condiciones'} className="font-bold md:text-[16px]">Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}