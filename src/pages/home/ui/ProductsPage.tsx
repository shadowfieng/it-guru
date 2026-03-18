import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { addProduct, updateProduct } from '../../../features/products/api';
import { PlusCircleIcon, RefreshIcon } from '../../../shared/ui/icons';
import {
  AddProductModal,
  EditProductModal,
  Pagination,
  ProductSearch,
  ProductsTable,
  Toast,
  useProducts,
  useProductsStore,
} from '../../../features/products';
import type { NewProductForm, Product } from '../../../features/products';

const LIMIT = 20;

export function ProductsPage() {
  const queryClient = useQueryClient();
  const { sortField, sortOrder, toggleSort } = useProductsStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const skip = (currentPage - 1) * LIMIT;

  const { data, isFetching } = useProducts({
    q: searchQuery,
    skip,
    sortField,
    sortOrder,
  });
  const products = data?.products ?? [];
  const total = data?.total ?? 0;

  // Reset to page 1 when sort or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortField, sortOrder, searchQuery]);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  const handleCloseToast = useCallback(() => setToast(null), []);

  const handleRefresh = () => {
    void queryClient.invalidateQueries({ queryKey: ['products'] });
  };

  const updateMutation = useMutation({
    mutationFn: ({ id, form }: { id: number; form: NewProductForm }) =>
      updateProduct(id, form),
    onSuccess: (product) => {
      setToast(`Товар "${product.title}" обновлён`);
    },
    onError: () => {
      setToast('Не удалось обновить товар');
    },
  });

  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (product) => {
      setToast(`Товар "${product.title}" добавлен (ID: ${product.id})`);
    },
    onError: () => {
      setToast('Не удалось добавить товар');
    },
  });

  const handleAddSuccess = (form: NewProductForm) => {
    addMutation.mutate(form);
  };

  const handleEditSuccess = (id: number, form: NewProductForm) => {
    updateMutation.mutate({ id, form });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 pt-5">
      {/* Page header block */}
      <div className="bg-white border-b rounded-xl border-gray-200 px-[26px] py-[26px] shrink-0">
        <div className="relative flex items-center justify-center">
          <h1 className="absolute left-0 text-xl font-semibold text-gray-900">
            Товары
          </h1>
          <div className="w-1/2">
            <ProductSearch onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="pt-6 flex-1 flex flex-col overflow-hidden">
        {/* Table card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col flex-1 overflow-hidden">
          {/* Card header */}
          <div className="flex items-center justify-between px-8 py-10 shrink-0">
            <span className="text-xl font-semibold text-text">Все позиции</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="w-[42px] h-[42px] flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                title="Обновить"
              >
                <RefreshIcon className={isFetching ? 'animate-spin' : ''} />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white rounded-lg transition-colors font-medium cursor-pointer bg-primary"
              >
                <PlusCircleIcon />
                Добавить
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-y-auto overflow-x-auto">
            <ProductsTable
              products={products}
              isLoading={isFetching}
              sortField={sortField}
              sortOrder={sortOrder}
              onSort={toggleSort}
              onEdit={setEditingProduct}
            />
          </div>

          {/* Pagination */}
          {total > 0 && (
            <div className="shrink-0 border-t border-gray-200">
              <Pagination
                currentPage={currentPage}
                total={total}
                limit={LIMIT}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAddSuccess}
      />

      <EditProductModal
        product={editingProduct}
        onClose={() => setEditingProduct(null)}
        onSuccess={handleEditSuccess}
      />

      {toast && <Toast message={toast} onClose={handleCloseToast} />}
    </div>
  );
}
