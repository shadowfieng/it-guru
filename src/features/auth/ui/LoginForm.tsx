import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../shared/api/auth';
import { useAuthStore } from '../model';
import { cn } from '../../../shared/lib/utils';
import logo from '../../../shared/assets/logo.svg';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon, XIcon } from '../../../shared/ui/icons';

const schema = z.object({
  username: z.string().min(1, 'Логин обязателен'),
  password: z.string().min(1, 'Пароль обязателен'),
});

type FormFields = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormFields, string>>;

function validate(fields: FormFields): FieldErrors {
  const result = schema.safeParse(fields);
  if (result.success) return {};
  return Object.fromEntries(
    result.error.issues.map((e) => [e.path[0], e.message])
  ) as FieldErrors;
}

export function LoginForm() {
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const mutation = useMutation({
    mutationFn: () => login({ username, password }),
    onSuccess: (data) => {
      setToken(data.accessToken, rememberMe);
      navigate('/');
    },
  });

  const errors = validate({ username, password });

  function handleBlur(field: keyof FormFields) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ username: true, password: true });
    if (Object.keys(errors).length > 0) return;
    mutation.mutate();
  }

  const apiError =
    mutation.error instanceof Error ? mutation.error.message : null;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-(--color-border) px-8 py-10">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 w-10 block mx-auto mb-6" />

      {/* Heading */}
      <div className="text-center mb-7">
        <h1 className="text-2xl font-semibold text-(--color-text) mb-1">
          Добро пожаловать!
        </h1>
        <p className="text-sm text-(--color-text-secondary)">
          Пожалуйста, авторизируйтесь
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Username */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-(--color-text)"
            htmlFor="username"
          >
            Логин
          </label>
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors',
              touched.username && errors.username
                ? 'border-red-400'
                : 'border-(--color-border) focus-within:border-(--color-primary)'
            )}
          >
            <span className="text-(--color-text-secondary) shrink-0">
              <UserIcon />
            </span>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur('username')}
              placeholder="Введите логин"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-(--color-text-secondary)"
            />
            {username && (
              <button
                type="button"
                onClick={() => setUsername('')}
                className="cursor-pointer text-(--color-text-secondary) hover:text-(--color-text) shrink-0"
              >
                <XIcon />
              </button>
            )}
          </div>
          {touched.username && errors.username && (
            <p className="text-xs text-red-500">{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-(--color-text)"
            htmlFor="password"
          >
            Пароль
          </label>
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors',
              touched.password && errors.password
                ? 'border-red-400'
                : 'border-(--color-border) focus-within:border-(--color-primary)'
            )}
          >
            <span className="text-(--color-text-secondary) shrink-0">
              <LockIcon />
            </span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              placeholder="Введите пароль"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-(--color-text-secondary)"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="cursor-pointer text-(--color-text-secondary) hover:text-(--color-text) shrink-0"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {touched.password && errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Remember me */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-(--color-border) accent-(--color-primary)"
          />
          <span className="text-sm text-(--color-text-secondary)">
            Запомнить данные
          </span>
        </label>

        {/* API error */}
        {apiError && (
          <p className="text-sm text-red-500 text-center">{apiError}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full cursor-pointer rounded-lg bg-(--color-primary) py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {mutation.isPending ? 'Вход...' : 'Войти'}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 before:flex-1 before:h-px before:bg-(--color-border) after:flex-1 after:h-px after:bg-(--color-border)">
          <span className="text-sm text-(--color-text-secondary)">или</span>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-(--color-text-secondary)">
          Нет аккаунта?{' '}
          <a
            href="#"
            className="text-(--color-primary) font-medium hover:underline"
          >
            Создать
          </a>
        </p>
      </form>
    </div>
  );
}
