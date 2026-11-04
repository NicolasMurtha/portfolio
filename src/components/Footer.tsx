export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nicolas Murtha</span>
        <span>Feito com React + TypeScript</span>
      </div>
    </footer>
  );
}
