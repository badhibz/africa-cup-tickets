import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronDown, ChevronUp, ArrowUpRight, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function TransferDetails() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 px-4 py-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Transfer Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2">
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-purple-900">1</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-purple-700" />
          </div>
        </div>

        {/* Transfer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Transferred to</p>
          <p className="text-lg font-semibold text-gray-900">mohammed.sadry@gmail.com</p>
        </div>

        {/* Event Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
          {/* Ticket Count Badge */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-purple-900">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                Maroc vs Tanzanie | Huitièmes de finale
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>04.01.2026 • 17:00 • Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>

          {/* Collapsible Seat Details */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between py-3 border-t border-gray-200">
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    Gate 07 • Area 229 • Block 229
                  </p>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="pb-3 space-y-3">
                {/* Seat Details */}
                <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
                  <Ticket className="w-5 h-5 text-purple-700" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                    <p className="text-xs text-gray-600 mt-1">04010081232</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}