import React from 'react';
import { FaChevronUp } from "react-icons/fa6";
import { HiOutlineTicket } from "react-icons/hi";

const TicketCard = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      {/* Main Card Container */}
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-md overflow-hidden relative">
        
        {/* Top Section */}
        <div className="p-6 flex items-start justify-between">
          <div className="flex items-start space-x-4">
            {/* Number Circle */}
            <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center font-semibold text-gray-700">
              1
            </div>
            {/* Match Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">Maroc vs Tanzanie | Huitièmes</h3>
              <p className="text-gray-500 text-sm mt-1">04.01.2026 • 17:00</p>
              <p className="text-gray-500 text-sm">Complexe Sportif Prince MOULAY ABDELLAH</p>
            </div>
          </div>
          {/* Chevron Icon */}
          <FaChevronUp className="text-gray-400 mt-2" />
        </div>

        {/* Divider with Notches */}
        <div className="relative">
          {/* Dashed Line */}
          <div className="border-t-2 border-dashed border-gray-200 mx-6"></div>
          {/* Left Notch */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
          {/* Right Notch */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
        </div>

        {/* Bottom Section */}
        <div className="p-6">
          {/* Gate Info */}
          <p className="font-bold text-gray-900 mb-4">Gate 07 • Area 229 • Block 229</p>
          
          <div className="flex items-center space-x-4">
            {/* Ticket Icon Circle */}
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-gray-500 text-2xl">
              <HiOutlineTicket />
            </div>
            {/* Seat Info */}
            <div>
              <p className="font-bold text-gray-900 text-lg">Row U • Seat 18</p>
              <p className="text-gray-500 text-sm">04010081232</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketCard;