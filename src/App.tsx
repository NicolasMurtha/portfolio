import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Highlights />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster theme={theme ?? "system"} position="bottom-right" />
    </div>
  );
}
