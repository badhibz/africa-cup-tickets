import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransferBadge({ count, type }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Main Avatar */}
      <div className="w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center">
        <span className="text-sm font-bold text-gray-800">{count}</span>
      </div>

      {/* Badge Icon - Bottom Right */}
      <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-2 border-gray-50 rounded-full flex items-center justify-center ${
        type === 'sent' 
          ? 'bg-blue-100 border-blue-200' 
          : 'bg-green-100 border-green-200'
      }`}>
        {type === 'sent' ? (
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
        ) : (
          <ArrowDownLeft className="w-3.5 h-3.5 text-green-600" />
        )}
      </div>
    </div>
  );
}