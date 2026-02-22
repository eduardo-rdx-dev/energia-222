import React from 'react';

// Atom: menor unidade — um único link de navegação
const NavLink = ({ href, alt, nome, onClick }) => (
    <a
        href={href}
        aria-label={alt}
        onClick={onClick}
        className="block px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
    >
        {nome}
    </a>
);

export default NavLink;