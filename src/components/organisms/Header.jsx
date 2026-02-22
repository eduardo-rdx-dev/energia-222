import React, { useState, useEffect, useRef } from 'react';
import { Mail, Briefcase, Menu, X } from 'lucide-react';
import Logo from '../molecules/Logo';
import DropdownMenu from '../molecules/DropdownMenu';
import MobileMenu from '../molecules/MobileMenu';
import LoginButton from '../atoms/LoginButton';

// Organism: monta o Header completo unindo Logo + nav desktop + MobileMenu
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // só para o desktop
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Ref exclusivo do dropdown DESKTOP
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-slate-800 text-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">

                    {/* Molecule: Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4">

                            {/* Atom: LoginButton */}
                            <li>
                                <LoginButton isLoggedIn={isLoggedIn} onClick={toggleLogin} />
                            </li>

                            <li>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Mail size={18} />
                                    <span>Contato</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Briefcase size={18} />
                                    <span>Serviços</span>
                                </button>
                            </li>

                            {/* Molecule: DropdownMenu — tem seu próprio ref (desktop) */}
                            <DropdownMenu
                                isOpen={isDropdownOpen}
                                onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                                onClose={() => setIsDropdownOpen(false)}
                                dropdownRef={dropdownRef}
                            />

                        </ul>
                    </nav>

                    {/* Botão hambúrguer */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
                        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Molecule: MobileMenu — gerencia seus próprios ref e estado */}
                {isMobileMenuOpen && (
                    <MobileMenu
                        isLoggedIn={isLoggedIn}
                        onToggleLogin={toggleLogin}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;