import React from 'react';

/**
 * Atom: SelectInput
 * Responsabilidade única: renderizar um <select> estilizado.
 * Sem lógica de negócio — só recebe props e emite eventos.
 */
const SelectInput = ({ value, onChange, disabled = false, children }) => (

    <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500
      focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {children}
    </select>
);

export default SelectInput;