"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import logo from "@/public/img/logopalanta.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useCatalogosStore } from "@/zustand/catalogos";
import Link from "next/link";

const menuStructure = [
    {
        title: "Soluciones para ti",
        items: [
            { title: "Soluciones para ti" },
            {
                title: "Accede a tu préstamo", submenu: [
                    {
                        path: 'pamotors', rubro: 'PaMotors'
                    },
                    {
                        path: 'papymes', rubro: 'PaPymes'
                    },
                    {
                        path: 'pafactoring', rubro: 'PaFactoring'
                    },
                ]
            },
            {
                title: "Quiénes somos", submenu: [
                    {
                        path: 'somos', rubro: 'Empresas del grupo'
                    },
                    {
                        path: 'somos', rubro: 'Nuestro compromiso'
                    }
                ]
            },
            {
                title: "Contáctanos", submenu: [
                    {
                        path: 'contacto', rubro: 'Escribenos'
                    },
                    {
                        path: 'https://grupopalante.hiringroom.com/jobs', rubro: 'Trabaja con nosotros'
                    }
                ]
            },
        ],
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState<any[]>([menuStructure[0]]);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");

    const currentMenu = history[history.length - 1];

    const goToSubmenu = (submenu: any) => {
        if (animating) return;
        setDirection("forward");
        setAnimating(true);
        setTimeout(() => {
            setHistory((prev) => [
                ...prev,
                { title: "", items: submenu }
            ]);
            setAnimating(false);
        }, 300);
    };

    const goBack = () => {
        if (animating) return;
        setDirection("backward");
        setAnimating(true);
        setTimeout(() => {
            setHistory((prev) => prev.slice(0, -1));
            setAnimating(false);
        }, 300);
    };

    return (
        <div className="border-b shadow-sm border-[#f7f7f7]">
            <div className="max-w-screen-2xl mx-auto">
                <header className="flex justify-between items-center px-10 py-4 bg-white">
                    <a href="/"><Image src={logo} alt="Logo" width={180} height={50} /></a>

                    <div className="hidden md:flex space-x-4">
                        <Link href="https://web.facebook.com/palanteprestamos/?_rdc=1&_rdr#" target="_blank"><Icon color="#23286E" icon="ic:baseline-facebook" width="50" height="50" /></Link>
                        <Link href="https://www.linkedin.com/company/grupo-palante/" target="_blank"><Icon color="#23286E" icon="mdi:linkedin" width="50" height="50" /></Link>
                    </div>
                    <button className="md:hidden" onClick={() => setOpen(true)}>
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </header>
                <nav className="hidden md:flex justify-end pr-10 z-50 space-x-6">
                    {menuStructure[0].items.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <a href="#" className="text-[#23286E] leading-4 font-bold">{item.title}</a>
                            {item.submenu && (
                                <ul className="absolute hidden z-50 group-hover:block bg-white w-[200px] rounded">
                                    {item.submenu.map((sub: any, sidx: number) => (
                                        <li key={sidx} className="hover:bg-[#F4F4F4] transition-all">
                                            <Link href={sub.path} target={`${sub.rubro === "Trabaja con nosotros" ? '_blank' : ""}`} className="text-[#697282] hover:text-[#23286E] font-medium block px-4 py-2">{sub.rubro}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Drawer remains unchanged */}
            {open && (
                <div className="fixed inset-0 bg-white z-50 transition-all">
                    <div className="flex items-center border-b border-[#697282] px-4 py-2">
                        {history.length > 1 ? (
                            <button onClick={goBack}>
                                <ChevronLeft className="w-5 h-5 text-[#697282]" />
                            </button>
                        ) : (
                            <span className="w-5 h-5" />
                        )}
                        <span className="flex-1 text-center text-gray-500 font-semibold">
                            {history.length > 1 ? "Back" : currentMenu.title}
                        </span>
                        <button onClick={() => setOpen(false)}>
                            <X className="w-5 h-5 text-[#697282]" />
                        </button>
                    </div>

                    <div
                        className={clsx(
                            "transition-transform duration-300",
                            direction === "forward" && animating && "translate-x-full",
                            direction === "backward" && animating && "-translate-x-full"
                        )}
                    >
                        <ul className="divide-y text-sm">
                            {currentMenu.items.map((item: any, idx: number) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer text-[#697282]"
                                    onClick={() => {
                                        if (item.submenu) goToSubmenu(item.submenu);
                                    }}
                                >
                                    <Link href={item.path} target={`${item.rubro === "Trabaja con nosotros" ? '_blank' : ""}`}><span>{item.rubro || item.title}</span></Link>
                                    {item.submenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}