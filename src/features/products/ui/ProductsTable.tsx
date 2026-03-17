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
  return (
    <div className="relative overflow-x-auto px-8">
      <ProgressBar isLoading={isLoading} />
      <table className="w-full">
        <ProductsTableHeader
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={onSort}
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
              <ProductsTableRow key={product.id} product={product} onEdit={onEdit} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
