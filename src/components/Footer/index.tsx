// components/Footer.tsx
'use client';

import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-[#24246b] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-10 md:text-[20px]"><Link href={'/'}>Inicio</Link></h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              to="servicio">Servicios</ScrollLink></li>
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              to="testimonio">Testimonio</ScrollLink></li>
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="beneficio">Beneficios</ScrollLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-10 md:text-[20px]">Servicios</h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]"><Link href={"/pamotors"}>PaMotors</Link></li>
            <li className="md:text-[16px]"><Link href={"/papymes"}>PaPymes</Link></li>
            <li className="md:text-[16px]"><Link href={"/pafactoring"}>Pafactoring</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-10 md:text-[20px]"><Link href={'somos'}>Quiénes somos</Link></h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-300}
              to="empresas">Empresas del grupo</ScrollLink></li>
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              to="compromiso">Nuestro compromiso</ScrollLink></li>

          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-10 md:text-[20px]"><Link href={'contacto'}>Contáctanos</Link></h4>
          <ul className="space-y-1">
            <li className="md:text-[16px]"><Link href={'contacto'}>Datos de contacto</Link></li>
            <li className="md:text-[16px]"><ScrollLink
              className="cursor-pointer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="oficinas">Oficinas</ScrollLink></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/40 mt-8 pt-4 max-w-6xl mx-auto text-sm mb-10">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span className="font-bold md:text-[16px]"><Link href="https://grupopalante.hiringroom.com/jobs" target="_blank">Trabaja con nosotros</Link></span>
          <Link href={'/terminos-y-condiciones'} className="font-bold md:text-[16px]">Políticas de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}