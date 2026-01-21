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
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Top Section - Always Visible */}
        <div className="p-5 pb-0">
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
        </div>

        {/* --- TEAR LINE SECTION (Dynamic placement) --- */}
        <div className="relative flex items-center w-full h-10 my-1">
            {/* Left Notch - Matches parent background (gray-50 usually, check your page bg) */}
            <div className="absolute -left-3 w-6 h-6 bg-gray-50 rounded-full z-10"></div>
            
            {/* Dashed Line */}
            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-5"></div>
            
            {/* Right Notch */}
            <div className="absolute -right-3 w-6 h-6 bg-gray-50 rounded-full z-10"></div>
        </div>

        {/* Bottom Section - Expandable */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
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

                {/* QR Code Area */}
                <div className="flex flex-col items-center py-2">
                   {/* ... QR Code content ... */}
                   <p className="text-xs text-gray-500 mt-2">Scan at entrance</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicator if collapsed */}
        {!isExpanded && (
          <div className="pb-3 flex justify-center">
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
}