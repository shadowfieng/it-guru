import { create } from 'zustand';
import type { SortField, SortOrder } from './types';

const SORT_KEY = 'products-sort';

interface SortState {
  field: SortField;
  order: SortOrder;
}

interface ProductsStoreState {
  sortField: SortField;
  sortOrder: SortOrder;
  toggleSort: (field: SortField) => void;
}

function getStoredSort(): SortState {
  try {
    const stored = localStorage.getItem(SORT_KEY);
    if (stored) return JSON.parse(stored) as SortState;
  } catch {
    // ignore
  }
  return { field: 'price', order: 'asc' };
}

export const useProductsStore = create<ProductsStoreState>((set) => {
  const initial = getStoredSort();
  return {
    sortField: initial.field,
    sortOrder: initial.order,

    toggleSort: (field) => {
      set((state) => {
        const order: SortOrder =
          state.sortField === field && state.sortOrder === 'asc' ? 'desc' : 'asc';
        const newSort: SortState = { field, order };
        localStorage.setItem(SORT_KEY, JSON.stringify(newSort));
        return { sortField: field, sortOrder: order };
      });
    },
  };
});
