import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(createPageUrl('Home'));
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A84A5C] via-[#8B1A1A] to-[#7B1A1A] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-12"
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/524cc0316_full-logo.png"
          alt="CAF Africa Cup of Nations Morocco 25"
          className="w-64 h-auto"
        />
        
        <button
          onClick={() => navigate(createPageUrl('Home'))}
          className="bg-gradient-to-b from-[#973238] to-[#7B1A1A] text-white font-bold text-4xl px-20 py-6 rounded-2xl shadow-[0_8px_0_0_rgba(100,20,25,0.8),0_12px_24px_rgba(0,0,0,0.3)] border-4 border-[#7B1A1A]/50 active:translate-y-1 active:shadow-[0_4px_0_0_rgba(100,20,25,0.8)] transition-all"
        >
          TICKETS
        </button>
      </motion.div>
    </div>
  );
}