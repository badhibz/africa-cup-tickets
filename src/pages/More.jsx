"use client"; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, MoreHorizontal, ChevronRight, User, Globe, Link2, CreditCard, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function More() {
  const [activeBottomTab, setActiveBottomTab] = useState('more');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Email - ANIMATION FORCÉE */}
      <div className="bg-gray-50 px-4 pt-6 pb-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}  // Commence 50px plus bas (invisible)
          animate={{ opacity: 1, y: 0 }}   // Remonte à sa place
          transition={{ 
            duration: 0.8,                 // Animation un peu plus lente
            ease: "easeOut",
            delay: 0.2                     // Petit délai pour être sûr que la page est prête
          }}
        >
          <p className="text-2xl font-semibold text-gray-900">
            ad@gmail.com
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 space-y-4">
        {/* Group 1: Profile & Language */}
        <div className="space-y-0 bg-white rounded-xl overflow-hidden">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-100"
          >
            <User className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <span className="flex-1 text-left text-gray-700">My Profile</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors"
          >
            <Globe className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <span className="flex-1 text-left text-gray-700">App language</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>
        </div>

        {/* Group 2: Info & Support */}
        <div className="space-y-0 bg-white rounded-xl overflow-hidden">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-100"
          >
            <Link2 className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <span className="flex-1 text-left text-gray-700">More information</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors"
          >
            <CreditCard className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <span className="flex-1 text-left text-gray-700">Support details</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>
        </div>

        {/* Sign Out */}
        <div className="pt-4">
          <Link to={createPageUrl('SignOut')}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-5 h-5 text-gray-700 flex-shrink-0" />
              <span className="flex-1 text-left text-gray-700">Sign out</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center sticky bottom-0">
        <Link
          to={createPageUrl('Home')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs font-medium">My Tickets</span>
        </Link>

        <Link
          to={createPageUrl('Transfers')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/c18d12009_ic_transfer.png"
            alt="Transfers"
            className="w-7 h-7 object-contain"
          />
          <span className="text-xs font-medium">Transfers</span>
        </Link>

        {/* Bouton MORE actif en ROUGE */}
        <button
          onClick={() => setActiveBottomTab('more')}
          className="flex flex-col items-center gap-1 transition-colors text-[#a91101]"
        >
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs font-medium">More</span>
        </button>
      </div>
    </div>
  );
}