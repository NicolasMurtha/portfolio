import type { ReactNode } from "react";

export default function SectionTitle({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-4">
      <span className="font-mono text-xs text-primary">{n}</span>
      <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{children}</h2>
    </div>
  );
}
