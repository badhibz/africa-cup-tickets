import React from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#C8102E] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
      
      {/* Main Content */}
      <motion.div 
        className="flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* CAF Logo Badge */}
        <motion.div 
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white rounded-sm px-2 py-1 flex items-center gap-1 shadow-lg">
            <span className="text-[#C8102E] font-black text-lg tracking-tight">CAF</span>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">25</span>
            </div>
          </div>
        </motion.div>

        {/* Tournament Title */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-wider leading-tight">
            AFRICA CUP
          </h1>
          <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-wider leading-tight">
            OF NATIONS
          </h1>
          <h2 className="text-[#00A651] font-black text-3xl sm:text-4xl md:text-5xl tracking-widest mt-2">
            MOROCCO 25
          </h2>
        </motion.div>

        {/* Trophy/Emblem */}
        <motion.div 
          className="mb-12"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            {/* Stylized Trophy */}
            <svg viewBox="0 0 120 140" className="w-28 h-32 sm:w-36 sm:h-40">
              {/* Trophy Base */}
              <ellipse cx="60" cy="130" rx="25" ry="6" fill="#8B6914"/>
              <rect x="45" y="110" width="30" height="20" fill="#D4AF37"/>
              <rect x="50" y="100" width="20" height="12" fill="#D4AF37"/>
              
              {/* Trophy Stem */}
              <rect x="55" y="70" width="10" height="32" fill="#D4AF37"/>
              
              {/* Trophy Cup */}
              <path d="M25 20 Q25 70 60 70 Q95 70 95 20 L85 20 Q85 55 60 58 Q35 55 35 20 Z" fill="#D4AF37"/>
              <ellipse cx="60" cy="20" rx="35" ry="8" fill="#F4D03F"/>
              
              {/* Handles */}
              <path d="M25 25 Q5 25 5 45 Q5 60 25 55" stroke="#D4AF37" strokeWidth="6" fill="none"/>
              <path d="M95 25 Q115 25 115 45 Q115 60 95 55" stroke="#D4AF37" strokeWidth="6" fill="none"/>
              
              {/* Decorative Pattern - Moroccan Style */}
              <circle cx="60" cy="40" r="12" fill="none" stroke="#C8102E" strokeWidth="2"/>
              <circle cx="60" cy="40" r="6" fill="#C8102E"/>
              
              {/* Small decorative dots */}
              <circle cx="45" cy="35" r="3" fill="#00A651"/>
              <circle cx="75" cy="35" r="3" fill="#00A651"/>
              <circle cx="50" cy="50" r="2" fill="#1E90FF"/>
              <circle cx="70" cy="50" r="2" fill="#1E90FF"/>
              <circle cx="60" cy="55" r="2" fill="#FFD700"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Tickets Button - Fixed Right Side */}
      <motion.div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <motion.button
          className="bg-[#A50D0D] hover:bg-[#8B0000] text-white font-bold py-8 px-4 rounded-l-lg shadow-2xl flex flex-col items-center gap-2 border-l-4 border-t-4 border-b-4 border-[#8B0000]/50 transition-all duration-300"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('#', '_blank')}
        >
          <Ticket className="w-6 h-6 rotate-90" />
          <span className="writing-mode-vertical text-lg tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            TICKETS
          </span>
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/15 rounded-full" />
    </div>
  );
}