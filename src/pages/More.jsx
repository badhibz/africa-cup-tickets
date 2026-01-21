import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Assure-toi d'importer motion
import { ChevronLeft, ChevronDown, Ticket, ArrowUpRight } from 'lucide-react'; // Plus besoin de ChevronUp
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import TransferBadge from '../components/transfers/TransferBadge';

export default function TransferDetails() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 pt-6 pb-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Transfer Badge */}
        <div className="flex justify-center">
          <TransferBadge count={1} type="sent" />
        </div>

        {/* Transfer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Transferred to</p>
          <p className="text-lg font-semibold text-gray-900">mohammed.sadry@gmail.com</p>
        </div>

        {/* --- TICKET CARD --- */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
            
            {/* Header */}
            <div className="p-5 relative bg-white z-20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-gray-800">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    Maroc vs Tanzanie | Huitièmes de finale
                  </h3>
                  <div className="text-sm text-gray-600">
                    <p>04.01.2026 • 17:00 • Complexe Sportif Prince MOULAY ABDELLAH</p>
                  </div>
                </div>
                
                {/* --- L'ANIMATION DE ROTATION EST ICI --- */}
                <CollapsibleTrigger asChild>
                  <button className="flex-shrink-0 mt-1 focus:outline-none">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }} // Rotation de 0 à 180 degrés
                      transition={{ duration: 0.3, ease: "easeInOut" }} // Durée fluide
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                </CollapsibleTrigger>
                {/* --------------------------------------- */}

              </div>
            </div>

            {/* Contenu Dépliable */}
            <CollapsibleContent>
              <div className="relative flex items-center w-full h-6 bg-white">
                <div className="w-6 h-6 bg-gray-50 rounded-full absolute -left-3 z-10" />
                <div className="flex-1 border-t-2 border-dashed border-gray-100 mx-4 h-0" />
                <div className="w-6 h-6 bg-gray-50 rounded-full absolute -right-3 z-10" />
              </div>

              <div className="p-5 pt-2 bg-white">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Gate 07 • Area 229 • Block 229
                </p>
                <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3 border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Ticket className="w-5 h-5" style={{ color: '#a91101' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                    <p className="text-xs text-gray-600 mt-1">04010081232</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>

          </div>
        </Collapsible>
      </div>
    </div>
  );
}