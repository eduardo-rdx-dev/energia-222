import React from 'react';
import { Zap } from 'lucide-react';

// Molecule: agrupa o ícone + nome + subtítulo da marca
const Logo = () => (
    <div className="flex items-center gap-3">
        <Zap size={32} className="text-amber-400" />
        <div>
            <h1 className="text-xl md:text-3xl font-bold">Calarke Energia</h1>
            <p className="text-slate-300 text-sm hidden md:block">
                Calcule sua economia com energia sustentável
            </p>
        </div>
    </div>
);

export default Logo;