import { useEffect, useState } from 'react';
import { Field } from '../../../shared/ui/Field';
import { Modal } from '../../../shared/ui/Modal';
import { productFormSchema, type FormErrors } from '../model/validation';
import type { NewProductForm, Product } from '../model/types';

interface EditProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSuccess: (id: number, form: NewProductForm) => void;
}

const EMPTY_FORM: NewProductForm = { title: '', price: '', brand: '', sku: '' };

export function EditProductModal({ product, onClose, onSuccess }: EditProductModalProps) {
  const [form, setForm] = useState<NewProductForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title,
        price: String(product.price),
        brand: product.brand ?? '',
        sku: product.sku ?? '',
      });
      setErrors({});
    }
  }, [product]);

  const handleChange = (field: keyof NewProductForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = productFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof NewProductForm;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    onSuccess(product!.id, form);
    onClose();
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={!!product} onClose={handleClose} title="Редактировать товар">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Название" error={errors.title}>
          <input type="text" value={form.title} onChange={handleChange('title')} placeholder="Название товара" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </Field>
        <Field label="Цена" error={errors.price}>
          <input type="text" value={form.price} onChange={handleChange('price')} placeholder="0.00" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </Field>
        <Field label="Бренд" error={errors.brand}>
          <input type="text" value={form.brand} onChange={handleChange('brand')} placeholder="Бренд" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </Field>
        <Field label="Артикул" error={errors.sku}>
          <input type="text" value={form.sku} onChange={handleChange('sku')} placeholder="SKU-0000" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </Field>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={handleClose} className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Отмена
          </button>
          <button type="submit" className="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Сохранить
          </button>
        </div>
      </form>
    </Modal>
  );
}
