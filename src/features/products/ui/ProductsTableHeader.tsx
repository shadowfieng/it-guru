import { cn } from '../../../shared/lib/utils';
import type { SortField, SortOrder } from '../model/types';

interface ProductsTableHeaderProps {
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
  allSelected: boolean;
  someSelected: boolean;
  onSelectAll: (checked: boolean) => void;
}

function SortArrow({ active, order }: { active: boolean; order: SortOrder }) {
  if (!active) {
    return <span className="ml-1 text-gray-300 text-xs">↕</span>;
  }
  return <span className="ml-1 text-xs">{order === 'asc' ? '↑' : '↓'}</span>;
}

export function ProductsTableHeader({
  sortField,
  sortOrder,
  onSort,
  allSelected,
  someSelected,
  onSelectAll,
}: ProductsTableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <th className="px-4 py-3 w-10">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={(e) => onSelectAll(e.target.checked)}
            className={cn(
              'appearance-none w-5 h-5 rounded-[4px] border-2 border-gray-300 checked:bg-[#3C538E] cursor-pointer transition-colors',
              someSelected && 'checkbox-indeterminate'
            )}
          />
        </th>
        <th className="px-4 py-3">Наименование</th>
        <th className="px-4 py-3"></th>
        <th className="px-4 py-3">Артикул</th>
        <th
          className="px-4 py-3 cursor-pointer select-none hover:text-gray-700 whitespace-nowrap"
          onClick={() => onSort('rating')}
        >
          Оценка
          <SortArrow active={sortField === 'rating'} order={sortOrder} />
        </th>
        <th
          className="px-4 py-3 cursor-pointer select-none hover:text-gray-700 whitespace-nowrap"
          onClick={() => onSort('price')}
        >
          Цена, ₽
          <SortArrow active={sortField === 'price'} order={sortOrder} />
        </th>
        <th className="px-4 py-3 w-20"></th>
      </tr>
    </thead>
  );
}
