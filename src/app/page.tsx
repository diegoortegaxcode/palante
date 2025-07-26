"use client";
import Banner from "@/components/Banners";
import Clientes from "@/components/Clientes";
import Confianza from "@/components/Confiar";
import Modal from "@/components/Modal";
import Servicios from "@/components/Servicios";
import { useState } from "react";

export default function Home() {

  const [abrirModal, esAbrirModal] = useState<boolean>(true);

  return (
    <div>
      <Modal isOpen={abrirModal} close={() => esAbrirModal(false)} />
      <Banner />
      <Servicios />
      <Clientes />
      <Confianza />
    </div>
  );
}
