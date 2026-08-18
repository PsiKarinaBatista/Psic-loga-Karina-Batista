export default function LanguageSelector() {
  return (
    <div className="flex items-center gap-2">
      <label className="sr-only">Idioma</label>
      <select 
        aria-label="Idioma" 
        defaultValue="pt" 
        className="px-3 py-2 rounded-lg border border-neutral-dark/20 bg-white text-neutral-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200 hover:border-neutral-dark/30"
      >
        <option value="pt">PT</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}