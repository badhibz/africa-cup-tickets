import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Ticket } from 'lucide-react';

export default function TicketCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const radiusSize = "xl"; 

  return (
    <motion.div
      className="relative w-full cursor-pointer my-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      {/* Fond blanc global avec coins arrondis pour éviter les artefacts */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm">
        
        {/* --- PARTIE HAUTE --- */}
        <motion.div
          layout
          className="p-3 relative z-20"
        >
          <div className="flex items-start gap-3">
            
            {/* --- BADGE 1 (Reste inchangé car il est parfait) --- */}
            <div className="relative w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <span className="text-sm font-bold text-gray-800 z-10 pr-1">1</span>
              <Ticket 
                className="absolute -right-1 w-5 h-5 text-gray-300" 
                strokeWidth={2} 
              />
            </div>
            
            {/* Texte Header */}
            <div className="flex-1 pt-0.5">
              <h3 className="font-bold text-gray-900 text-sm mb-1 pr-2">
                Maroc vs Tanzanie | Huitièmes de finale
              </h3>
              <div className="text-[11px] text-gray-600 leading-tight">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-0.5">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>

            {/* Flèche */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mt-1"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
          
          {/* Indicateur visuel (Barre grise) */}
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="pt-2 flex justify-center"
            >
              <div className="w-6 h-1 bg-gray-100 rounded-full"></div>
            </motion.div>
          )}
        </motion.div>

        {/* --- PARTIE BASSE --- */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div>
                  
                  {/* ZONE DE DÉCOUPE (Encoches latérales + Pointillés espacés) */}
                  <div 
                    className="h-4 w-full relative flex items-center justify-center bg-white" 
                    style={{
                      // Masques radiaux pour créer les trous transparents sur les côtés
                      backgroundImage: `
                        radial-gradient(circle at 0 50%, transparent 8px, white 8.5px),
                        radial-gradient(circle at 100% 50%, transparent 8px, white 8.5px)
                      `,
                      backgroundPosition: 'left, right',
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     <div className="w-full mx-4 h-[2px] overflow-hidden z-10">
                        <svg width="100%" height="2">
                          <line 
                            x1="0" y1="1" x2="100%" y2="1" 
                            stroke="#E5E7EB"
                            strokeWidth="2" 
                            strokeDasharray="10 6"
                            strokeLinecap="round" 
                          />
                        </svg>
                     </div>
                  </div>

                  {/* Contenu du bas */}
                  <div className="p-4 pt-3 pb-8">
                    
                    <p className="text-xs font-bold text-gray-900 mb-4">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-4">
                      
                      {/* CERCLE GRIS + ICÔNE TICKET (SVG PERSONNALISÉ PARFAIT) */}
                      <div className="relative w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         
                         {/* SVG dessiné à la main pour un contrôle total */}
                         <svg 
                            width="24" height="24" viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="w-5 h-5 text-gray-400"
                          >
                            {/* 1. Le contour du ticket (Rectangle avec encoches comme Lucide) */}
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                            
                            {/* 2. La ligne de séparation (SOLIDE) décalée à droite (x=17) */}
                            {/* C'est ce qui donne l'effet "stub" exact de votre image cible */}
                            <path d="M17 2v20" />
                          </svg>

                      </div>

                      <div>
                        <p className="text-base font-normal text-gray-900">Row U • Seat 18</p>
                        <p className="text-xs text-gray-500">04010081232</p>
                      </div>
                    </div>

                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}