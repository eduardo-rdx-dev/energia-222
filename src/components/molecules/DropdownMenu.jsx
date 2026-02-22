import React from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from '../atoms/NavLink';
import { dropdownItems } from '../../data/navData';

// Molecule: botão "Mais" + lista de links que abre/fecha
const DropdownMenu = ({ isOpen, onToggle, onClose, dropdownRef }) => (
    <li className="relative" ref={dropdownRef}>
        <button
            onClick={onToggle}
            aria-label="Abrir mais opções"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
            <span>Mais</span>
            <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-6 w-screen max-w-xs lg:max-w-sm bg-slate-700 rounded-b-lg shadow-xl py-2 z-50">
                {dropdownItems.map((item) => (
                    <NavLink
                        key={item.nome}
                        href={item.href}
                        alt={item.alt}
                        nome={item.nome}
                        onClick={onClose}
                    />
                ))}
            </div>
        )}
    </li>
);

export default DropdownMenu;