import React from 'react';
import { MapPin, Zap, Calculator, Loader } from 'lucide-react';
import { estadosData } from '../../data/estadosData';
import SeletorEstado from '../molecules/SeletorEstado';
const FormularioCalculo = () => {

    return (
        <div className="bg-white rounded-xl p-6 shadow-md">


            <div className="flex items-center gap-2 mb-6">
                <Calculator size={24} className="text-slate-700" />
                <h2 className="text-xl font-semibold text-slate-800">Simulação de Economia</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6 mb-6">
                <label className="block mb-2 font-semibold text-slate-700 text-sm">
                    <MapPin size={16} className="inline mr-1" />
                    Estado
                </label>
                <SeletorEstado
                    estados={estados}
                    estadoSelecionado={estadoSelecionado}
                    setEstadoSelecionado={setEstadoSelecionado}
                    loadingEstados={loadingEstados}
                />
            </div>
        </div>
    )

};

export default FormularioCalculo;