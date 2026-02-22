import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import LoginButton from '../atoms/LoginButton';
import NavLink from '../atoms/NavLink';
import { navItems, dropdownItems } from '../../data/navData';

// Molecule: menu completo exibido em telas mobile
const MobileMenu = ({ isLoggedIn, onToggleLogin, onClose }) => {
    const [isMaisOpen, setIsMaisOpen] = useState(false);

    // Ref e useEffect próprios do MobileMenu — independente do desktop
    const maisRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Se clicar fora do bloco "Mais", fecha o submenu
            if (maisRef.current && !maisRef.current.contains(event.target)) {
                setIsMaisOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="md:hidden mt-4 border-t border-slate-600 pt-4">
            <ul className="flex flex-col gap-2">

                {/* Login/Logout */}
                <li>
                    <LoginButton isLoggedIn={isLoggedIn} onClick={onToggleLogin} />
                </li>

                {/* Contato e Serviços via map */}
                {navItems.map((item) => (
                    <li key={item.nome}>
                        <a
                            href={item.href}
                            aria-label={item.alt}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                            onClick={onClose}
                        >
                            {item.nome}
                        </a>
                    </li>
                ))}

                {/* Mais — ref aponta só para este bloco */}
                <li ref={maisRef}>
                    <button
                        onClick={() => setIsMaisOpen((prev) => !prev)}
                        aria-label="Abrir mais opções"
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        <span>Mais</span>
                        <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${isMaisOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {isMaisOpen && (
                        <ul className="mt-1 ml-4 flex flex-col gap-1">
                            {dropdownItems.map((item) => (
                                <li key={item.nome}>
                                    <NavLink
                                        href={item.href}
                                        alt={item.alt}
                                        nome={item.nome}
                                        onClick={() => {
                                            setIsMaisOpen(false);
                                            onClose();
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

            </ul>
        </nav>
    );
};

export default MobileMenu;