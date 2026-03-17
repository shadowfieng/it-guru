import { api } from '../../../shared/api';
import type { NewProductForm, Product, ProductsResponse } from '../model/types';

export async function fetchProducts({
  limit,
  skip,
  sortBy,
  order,
}: {
  limit: number;
  skip: number;
  sortBy?: string;
  order?: string;
}): Promise<ProductsResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select: 'id,title,category,price,rating,brand,sku,thumbnail',
  });
  if (sortBy) params.set('sortBy', sortBy);
  if (order) params.set('order', order);

  return api.get<ProductsResponse>(`/products?${params}`);
}

export async function searchProducts({
  q,
  limit,
  skip,
}: {
  q: string;
  limit: number;
  skip: number;
}): Promise<ProductsResponse> {
  const params = new URLSearchParams({
    q,
    limit: String(limit),
    skip: String(skip),
    select: 'id,title,category,price,rating,brand,sku,thumbnail',
  });

  return api.get<ProductsResponse>(`/products/search?${params}`);
}

function toPayload(form: NewProductForm) {
  return { title: form.title, price: Number(form.price), brand: form.brand, sku: form.sku };
}

export function addProduct(form: NewProductForm): Promise<Product> {
  return api.post<Product>('/products/add', toPayload(form));
}

export function updateProduct(id: number, form: NewProductForm): Promise<Product> {
  return api.put<Product>(`/products/${id}`, toPayload(form));
}
