import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <RefreshCw className="w-8 h-8 text-[#8B1A1A]" />
      </motion.div>
    </div>
  );
}