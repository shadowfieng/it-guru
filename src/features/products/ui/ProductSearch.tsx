import { useEffect, useState } from 'react';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce';

interface ProductSearchProps {
  onSearch: (q: string) => void;
}

export function ProductSearch({ onSearch }: ProductSearchProps) {
  const [inputValue, setInputValue] = useState('');
  const debounced = useDebounce(inputValue, 400);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle
            cx="6.5"
            cy="6.5"
            r="4.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.5 10.5L14 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Найти"
        className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-[#F3F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full placeholder-gray-400"
      />
    </div>
  );
}
