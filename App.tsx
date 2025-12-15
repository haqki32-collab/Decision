import React, { useState, useCallback } from 'react';
import { ActionButton } from './components/ActionButton';
import { ResultDisplay, DecisionState } from './components/ResultDisplay';

const App: React.FC = () => {
  const [decision, setDecision] = useState<DecisionState>(DecisionState.INITIAL);
  const [animate, setAnimate] = useState<boolean>(false);

  // Handle the vibration logic safely for web
  const triggerVibration = useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      // 50ms vibration for a light tactile feel
      navigator.vibrate(50);
    }
  }, []);

  const handleDecide = useCallback(() => {
    // Reset animation state to trigger it again
    setAnimate(false);

    // Use a small timeout to allow the react render cycle to pick up the animation reset
    // This ensures the scale animation plays every time the button is pressed
    setTimeout(() => {
      const isYes = Math.random() >= 0.5;
      const newDecision = isYes ? DecisionState.YES : DecisionState.NO;
      
      setDecision(newDecision);
      setAnimate(true);
      triggerVibration();
    }, 10);
  }, [triggerVibration]);

  const handleReset = useCallback(() => {
    setDecision(DecisionState.INITIAL);
    setAnimate(false);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      <main className="w-full max-w-md flex flex-col items-center gap-12">
        
        {/* Result Area */}
        <div className="h-48 flex items-center justify-center w-full">
          <ResultDisplay 
            state={decision} 
            shouldAnimate={animate} 
          />
        </div>

        {/* Action Area */}
        <div className="w-full flex flex-col items-center gap-6">
          <ActionButton onClick={handleDecide} label="DECIDE" />
          
          <button
            onClick={handleReset}
            className={`
              px-8 py-3 rounded-full font-bold text-sm tracking-widest
              transition-all duration-300 transform
              ${decision === DecisionState.INITIAL 
                ? 'opacity-0 translate-y-4 pointer-events-none' 
                : 'opacity-100 translate-y-0 text-gray-400 hover:text-gray-600 hover:bg-gray-50'}
            `}
            aria-hidden={decision === DecisionState.INITIAL}
            aria-label="Reset decision"
          >
            RESET
          </button>
        </div>
        
        {/* Placeholder for AdMob or other footer content */}
        {/* <div id="ad-banner" className="mt-8 w-full h-12 bg-gray-100 rounded text-center text-xs text-gray-400 flex items-center justify-center">
            Ad Space
        </div> */}
        
      </main>
    </div>
  );
};

export default App;