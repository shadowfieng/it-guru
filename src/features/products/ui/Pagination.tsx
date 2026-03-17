import { cn } from '../../../shared/lib/utils';

interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  total,
  limit,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / limit);
  const from = (currentPage - 1) * limit + 1;
  const to = Math.min(currentPage * limit, total);

  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between px-8 py-10">
      <span className="text-base text-gray-400">
        Показано{' '}
        <span className="text-gray-800 font-medium">
          {from}-{to}
        </span>{' '}
        из <span className="text-gray-800 font-medium">{total}</span>
      </span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-xl text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-gray-600 transition-colors cursor-pointer"
        >
          ‹
        </button>
        {getPageNumbers().map((page, idx) =>
          page === '...' ? (
            <span
              key={`dots-${idx}`}
              className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 text-sm"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                'w-[30px] h-[30px] text-sm rounded-sm border cursor-pointer',
                currentPage === page
                  ? 'bg-primary text-white border-primary opacity-50'
                  : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300'
              )}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-xl text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-gray-600 transition-colors cursor-pointer"
        >
          ›
        </button>
      </div>
    </div>
  );
}
