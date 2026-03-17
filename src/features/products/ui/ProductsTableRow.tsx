import { cn } from '../../../shared/lib/utils';
import { EditIcon } from '../../../shared/ui/icons';
import type { Product } from '../model/types';

interface ProductsTableRowProps {
  product: Product;
  isSelected: boolean;
  onToggle: (id: number, checked: boolean) => void;
  onEdit: (product: Product) => void;
}

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function ProductsTableRow({ product, isSelected, onToggle, onEdit }: ProductsTableRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td
        className={cn(
          'px-4 py-3 border-l-4 transition-colors',
          isSelected ? 'border-l-selection' : 'border-l-transparent'
        )}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onToggle(product.id, e.target.checked)}
          className="appearance-none w-5 h-5 rounded-[4px] border-2 border-gray-300 checked:bg-[#3C538E] cursor-pointer transition-colors"
        />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-10 h-10 object-cover rounded"
          />
          <div>
            <div className="text-sm font-medium text-gray-900 truncate max-w-[23ch]">
              {product.title}
            </div>
            <div className="text-xs text-gray-400">{product.category}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-black font-bold">
        {product.brand}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">{product.sku}</td>
      <td className="px-4 py-3 text-sm">
        <span
          className={cn(
            'font-medium',
            product.rating < 3 ? 'text-red-500' : 'text-gray-700'
          )}
        >
          {product.rating}/5
        </span>
      </td>
      <td className="px-4 py-3 text-sm whitespace-nowrap">
        {(() => {
          const [integer, decimal] = priceFormatter.format(product.price).split(',');
          return (
            <>
              <span className="text-gray-900 font-medium">{integer},</span>
              <span className="text-gray-400">{decimal}</span>
              <span className="text-gray-900 font-medium"> ₽</span>
            </>
          );
        })()}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onEdit(product)}
            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            title="Редактировать"
          >
            <EditIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
