import { useLang } from "../i18n";
import SectionTitle from "./SectionTitle";

export default function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="01">{t.stack.title}</SectionTitle>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {t.stack.groups.map((group, i, all) => (
          <div
            key={group.title}
            // com número ímpar de grupos, o último ocupa a linha inteira no layout de 2 colunas
            className={`bg-card p-6 ${all.length % 2 === 1 && i === all.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
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
