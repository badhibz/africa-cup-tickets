import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function TicketCard({ transfer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative mx-auto max-w-sm cursor-pointer px-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden relative">
        
        {/* Top Section - Always Visible (Rectangle normal quand fermé) */}
        <div className="p-5 bg-white relative z-20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-gray-800">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                Maroc vs Tanzanie | Huitièmes de finale
              </h3>
              <div className="text-sm text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="text-xs mt-1">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>
          
          {/* Indicateur visuel quand fermé */}
          {!isExpanded && (
            <div className="pt-3 flex justify-center">
              <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
            </div>
          )}
        </div>

        {/* Bottom Section - Expandable */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-white"
            >
              {/* --- LIGNE DE DÉCOUPE (À l'intérieur de l'animation) --- */}
              <div className="relative flex items-center w-full h-8">
                 {/* Encoche Gauche (bg-gray-50 pour simuler la transparence du fond) */}
                 <div className="absolute -left-3 w-6 h-6 bg-gray-50 rounded-full z-10"></div>
                 {/* Pointillés */}
                 <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-5"></div>
                 {/* Encoche Droite */}
                 <div className="absolute -right-3 w-6 h-6 bg-gray-50 rounded-full z-10"></div>
              </div>

              {/* Contenu du bas */}
              <div className="p-5 pt-0 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    Gate 07 • Area 229 • Block 229
                  </p>
                  <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Ticket className="w-5 h-5 text-[#93C5FD]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                      <p className="text-xs text-gray-600 mt-1">04010081232</p>
                    </div>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center py-2">
                   <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR CODE</span>
                   </div>
                   <p className="text-xs text-gray-500 mt-2">Scan at entrance</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}