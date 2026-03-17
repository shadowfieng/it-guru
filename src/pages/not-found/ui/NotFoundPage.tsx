import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #242edb18 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute w-[520px] h-[520px] rounded-full border border-primary/6 -top-48 -right-48 pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-primary/6 -bottom-32 -left-32 pointer-events-none" />
      <div
        className="absolute w-72 h-72 rounded-full -bottom-20 -left-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #242edb08 0%, transparent 70%)' }}
      />
      <div
        className="absolute w-80 h-80 rounded-full -top-24 -right-24 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #242edb06 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-sm">
        {/* HTTP badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 mb-10"
          style={{ animation: 'nf-fade-up 0.5s ease both' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{ animation: 'nf-pulse-dot 2s ease-in-out infinite' }}
          />
          <span
            className="text-xs text-text-secondary tracking-widest uppercase"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            HTTP 404
          </span>
        </div>

        {/* Giant 404 */}
        <div
          className="flex items-center justify-center leading-none mb-4"
          style={{ animation: 'nf-float 4s ease-in-out infinite' }}
        >
          {['4', '0', '4'].map((digit, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(100px, 18vw, 176px)',
                color: i === 1 ? '#242edb' : '#232323',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                animation: `nf-fade-up 0.5s ease ${0.1 + i * 0.08}s both`,
              }}
            >
              {digit}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-10 h-px bg-primary mx-auto mb-7 origin-left"
          style={{ animation: 'nf-scale-x 0.4s ease 0.38s both' }}
        />

        {/* Text & CTA */}
        <div style={{ animation: 'nf-fade-up 0.5s ease 0.44s both' }}>
          <h1 className="text-[22px] font-semibold text-text mb-2.5 tracking-tight">
            Страница не найдена
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-xs mx-auto">
            Запрошенная страница не существует или была перемещена. Проверьте
            адрес или вернитесь на главную.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9.5 11.5L5.5 7.5l4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
