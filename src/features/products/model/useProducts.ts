import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchProducts, searchProducts } from '../api';
import type { Product, ProductsResponse, SortField, SortOrder } from './types';

interface UseProductsParams {
  q: string;
  skip: number;
  sortField: SortField;
  sortOrder: SortOrder;
}

const LIMIT = 20;

export function useProducts({
  q,
  skip,
  sortField,
  sortOrder,
}: UseProductsParams) {
  const trimmedQ = q.trim();

  return useQuery<ProductsResponse, Error, ProductsResponse>({
    queryKey: ['products', trimmedQ, skip, sortField, sortOrder],
    queryFn: () => {
      if (trimmedQ) {
        return searchProducts({ q: trimmedQ, limit: LIMIT, skip });
      }
      return fetchProducts({
        limit: LIMIT,
        skip,
        sortBy: sortField,
        order: sortOrder,
      });
    },
    select: (data): ProductsResponse => {
      if (!trimmedQ) return data;
      const sorted = [...data.products].sort((a: Product, b: Product) => {
        const aVal = a[sortField];
        const bVal = b[sortField];
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      });
      return { ...data, products: sorted };
    },
    placeholderData: keepPreviousData,
    staleTime: 10_000,
  });
}
