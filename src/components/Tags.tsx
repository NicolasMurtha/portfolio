export default function Tags({ items, className = "mt-4" }: { items: string[]; className?: string }) {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {items.map((t) => (
        <span key={t} className="rounded bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground">
          {t}
        </span>
      ))}
    </div>
  );
}
