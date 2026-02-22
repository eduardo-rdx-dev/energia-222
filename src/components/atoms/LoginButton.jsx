import React from 'react';
import { LogIn, LogOut } from 'lucide-react';

// Atom: botão de login/logout isolado, sem lógica de estado
const LoginButton = ({ isLoggedIn, onClick }) => (
    <button
        onClick={onClick}
        aria-label={isLoggedIn ? 'Sair da conta' : 'Entrar na conta'}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors"
    >
        {isLoggedIn ? (
            <><LogOut size={18} /><span>Sair</span></>
        ) : (
            <><LogIn size={18} /><span>Entrar</span></>
        )}
    </button>
);

export default LoginButton;