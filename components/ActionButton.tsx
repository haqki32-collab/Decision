import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  label: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="
        active:scale-95 transition-transform duration-100 ease-in-out
        bg-blue-600 hover:bg-blue-700 text-white 
        font-bold text-2xl tracking-wider 
        py-6 px-12 rounded-2xl shadow-lg 
        w-full max-w-[280px]
        focus:outline-none focus:ring-4 focus:ring-blue-300
      "
      aria-label="Make a decision"
    >
      {label}
    </button>
  );
};