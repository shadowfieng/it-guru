interface ProgressBarProps {
  isLoading: boolean;
}

export function ProgressBar({ isLoading }: ProgressBarProps) {
  if (!isLoading) return null;
  return (
    <div
      className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden"
      style={{ zIndex: 10 }}
    >
      <div
        className="h-full bg-(--color-primary)"
        style={{ animation: 'progress-bar 1.5s ease-in-out infinite' }}
      />
    </div>
  );
}
