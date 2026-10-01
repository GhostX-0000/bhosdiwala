interface NoButtonProps {
  /** Called when the button is clicked/tapped */
  onClick?: () => void;
}

export default function NoButton({ onClick }: NoButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full max-w-[260px] inline-flex items-center justify-center px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-transparent text-muted border border-border hover:border-muted/60 select-none cursor-pointer"
      aria-label="No"
    >
      No
    </button>
  );
}
