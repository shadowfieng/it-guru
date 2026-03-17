import { z } from 'zod';
import type { NewProductForm } from './types';

export const productFormSchema = z.object({
  title: z.string().min(1, 'Введите название'),
  price: z
    .string()
    .min(1, 'Введите цену')
    .refine((v) => !isNaN(Number(v)) && Number(v) > 0, 'Цена должна быть положительным числом'),
  brand: z.string().min(1, 'Введите бренд'),
  sku: z.string().min(1, 'Введите артикул'),
});

export type FormErrors = Partial<Record<keyof NewProductForm, string>>;
