import { useState } from 'react';
import { ProgressBar } from '../../../shared/ui/ProgressBar';
import type { Product, SortField, SortOrder } from '../model/types';
import { ProductsTableHeader } from './ProductsTableHeader';
import { ProductsTableRow } from './ProductsTableRow';

interface ProductsTableProps {
  products: Product[];
  isLoading: boolean;
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
  onEdit: (product: Product) => void;
}

export function ProductsTable({
  products,
  isLoading,
  sortField,
  sortOrder,
  onSort,
  onEdit,
}: ProductsTableProps) {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const allSelected = products.length > 0 && products.every((p) => selectedIds.has(p.id));
  const someSelected = !allSelected && products.some((p) => selectedIds.has(p.id));

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? new Set(products.map((p) => p.id)) : new Set());
  };

  const handleToggle = (id: number, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  };

  return (
    <div className="relative px-8">
      <ProgressBar isLoading={isLoading} />
      <table className="w-full">
        <ProductsTableHeader
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={onSort}
          allSelected={allSelected}
          someSelected={someSelected}
          onSelectAll={handleSelectAll}
        />
        <tbody>
          {products.length === 0 && !isLoading ? (
            <tr>
              <td
                colSpan={7}
                className="px-4 py-12 text-center text-gray-400 text-sm"
              >
                Нет данных
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductsTableRow
                key={product.id}
                product={product}
                isSelected={selectedIds.has(product.id)}
                onToggle={handleToggle}
                onEdit={onEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
