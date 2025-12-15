import React from 'react';

export enum DecisionState {
  INITIAL = 'INITIAL',
  YES = 'YES',
  NO = 'NO',
}

interface ResultDisplayProps {
  state: DecisionState;
  shouldAnimate: boolean;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ state, shouldAnimate }) => {
  
  let content = "Tap to Decide";
  let textColor = "text-gray-400";
  let icon = "";

  if (state === DecisionState.YES) {
    content = "YES";
    icon = "✅";
    textColor = "text-green-600";
  } else if (state === DecisionState.NO) {
    content = "NO";
    icon = "❌";
    textColor = "text-red-600";
  }

  // Animation class logic
  const animationClass = shouldAnimate && state !== DecisionState.INITIAL
    ? "scale-125 opacity-100" 
    : "scale-100 opacity-100";

  return (
    <div className={`
      flex flex-col items-center justify-center text-center
      transition-transform duration-300 ease-out transform
      ${animationClass}
    `}>
      <h1 className={`text-6xl font-black ${textColor} mb-2`}>
        {content}
      </h1>
      {state !== DecisionState.INITIAL && (
        <span className="text-4xl filter drop-shadow-sm">
          {icon}
        </span>
      )}
    </div>
  );
};