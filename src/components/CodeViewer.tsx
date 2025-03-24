
import React from 'react';
import { motion } from 'framer-motion';

interface CodeViewerProps {
  code: string;
  language: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ code, language }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg border shadow bg-card"
      whileHover={{ y: -2, boxShadow: '0 12px 20px -10px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50">
        <div className="text-xs text-muted-foreground">{language}</div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};
