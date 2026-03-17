import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg text-sm"
      style={{ animation: 'slide-in-toast 0.2s ease-out' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-400 shrink-0">
        <path d="M13.5 4.5l-7 7L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {message}
      <style>{`
        @keyframes slide-in-toast {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
