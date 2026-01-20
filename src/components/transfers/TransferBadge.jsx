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
      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-white border-2 rounded-full flex items-center justify-center ${
        type === 'sent' 
          ? 'border-[#718096]' 
          : 'border-[#8E9B8E]'
      }`}>
        {type === 'sent' ? (
          <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#718096' }} />
        ) : (
          <ArrowDownLeft className="w-3.5 h-3.5" style={{ color: '#8E9B8E' }} />
        )}
      </div>
    </div>
  );
}