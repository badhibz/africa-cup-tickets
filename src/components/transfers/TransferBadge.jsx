import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransferBadge({ count, type }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Main Avatar */}
      <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-800">{count}</span>
      </div>

      {/* Badge Icon - Bottom Right */}
      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-transparent border-2 rounded-full flex items-center justify-center ${
        type === 'sent' 
          ? 'border-[#5B8DEE]' 
          : 'border-[#52B69A]'
      }`}>
        {type === 'sent' ? (
          <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#5B8DEE' }} />
        ) : (
          <ArrowDownLeft className="w-3.5 h-3.5" style={{ color: '#52B69A' }} />
        )}
      </div>
    </div>
  );
}