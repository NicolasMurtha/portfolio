import { STACK } from "../data";
import SectionTitle from "./SectionTitle";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="01">Stack técnica</SectionTitle>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.title} className="bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
