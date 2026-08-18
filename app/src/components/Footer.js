export default function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-neutral-dark/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-neutral-dark text-lg">Karina Batista</h3>
            <p className="text-neutral-dark/70">Psicóloga Clínica — São Paulo / SP</p>
          </div>

          <div className="space-y-2">
            <p className="text-neutral-dark/70">Idiomas: Português • Inglês • Espanhol</p>
            <p className="text-neutral-dark/50 text-sm">
              © {new Date().getFullYear()} Karina Batista. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}