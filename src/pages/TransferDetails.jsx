import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TransferBadge from '../components/transfers/TransferBadge';

export default function TransferDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
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
          <TransferBadge count={1} type="sent" />
        </div>

        {/* Transfer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Transferred to</p>
          <p className="text-lg font-semibold text-gray-900">mohammed.sadry@gmail.com</p>
        </div>

        {/* Event Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
          {/* Event Header */}
          <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-gray-800">1</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-2">
                <Ticket className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <h3 className="font-bold text-gray-900 text-base">
                  Maroc vs Tanzanie | Huitièmes de finale
                </h3>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                <p>04.01.2026 • 17:00 • Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>

          {/* Seat Details - Repeated 4 times */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">
                Gate 07 • Area 229 • Block 229
              </p>
              <div className="flex items-center gap-3 bg-white rounded-xl p-3">
                <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                  <p className="text-xs text-gray-600 mt-1">04010081232</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}