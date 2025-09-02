import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomeScreenProps } from '../types';
import { AppleHelloEnglishEffect } from './apple-hello-effect';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showHelloEffect, setShowHelloEffect] = useState(false);

  useEffect(() => {
    // Start the hello effect animation
    setShowHelloEffect(true);

    // Complete welcome screen after hello animation duration
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for exit animation to complete
    }, 3500); // Total duration: 3.5 seconds (just for hello animation)

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleHelloAnimationComplete = () => {
    // Hello animation completed, content is already showing
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
          initial={{ scale: 1, opacity: 1 }}
          exit={{ 
            scale: 1.5, 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="text-center">
            {/* Apple Hello Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showHelloEffect ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <AppleHelloEnglishEffect 
                speed={1.2}
                className="h-24 md:h-32 text-white"
                onAnimationComplete={handleHelloAnimationComplete}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
