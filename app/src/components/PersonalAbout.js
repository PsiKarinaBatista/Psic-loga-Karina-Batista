import Image from 'next/image';

export default function PersonalAbout() {
  return (
    <section id="personal-about" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Foto com moldura artística */}
          <div className="w-full lg:w-2/5 relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-primary-light transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src="/foto3.jpg"
                alt="Karina Batista - Psicóloga"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <a
              href="https://www.instagram.com/karinabatistapsi?igsh=azl0ZHBtdXhubHFx"
              className="text-lg text-neutral-dark/70 flex items-center justify-center hover:text-primary-light transition-colors duration-300 mt-6 font-medium"
            >
              Instagram: @karinabatistapsi
            </a>
            
            <div className="absolute -z-10 top-5 left-5 w-full h-full rounded-3xl bg-primary-light/30 border-4 border-white transform -rotate-2 group-hover:rotate-1 transition-all duration-700"></div>
          </div>

          {/* Texto pessoal */}
          <div className="w-full lg:w-3/5 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
              <span className="text-primary">Minha Jornada</span> na Psicologia
            </h2>

            <div className="w-24 h-1 bg-primary-light"></div>

            <div className="space-y-6 text-neutral-dark/70 leading-relaxed text-lg">
              <p>
                Desde criança, sempre fui aquela pessoa que ouvia atentamente os outros, que se comovia com as histórias
                alheias e que acreditava no poder transformador da escuta acolhedora. Essa sensibilidade me levou
                naturalmente à Psicologia, onde encontrei meu propósito.
              </p>

              <p>
                Minha abordagem é <span className="text-primary font-semibold">humanizada e integrativa</span>, porque acredito que cada pessoa é única e merece
                um cuidado que vá além de técnicas padronizadas. Trabalho com a fenomenologia porque ela respeita a
                singularidade de cada experiência humana.
              </p>

              <p>
                O que me motiva diariamente é ver meus pacientes <span className="text-primary font-semibold">redescobrindo sua força interior</span>. Aquele momento
                em que percebem que podem ressignificar suas histórias e encontrar novos caminhos - isso é mágico.
              </p>

              <blockquote className="italic text-neutral-dark/70 border-l-4 border-primary-light pl-6 py-4 bg-white rounded-r-xl shadow-sm">
                "Ser psicóloga para mim é ser ponte. Uma ponte entre a dor e o alívio, entre a confusão e a clareza,
                entre o que fomos e o que podemos nos tornar."
              </blockquote>

              <p>
                Quando não estou no consultório, você me encontrará estudando (sou eterna aprendiz), praticando yoga
                ou cuidando do meu jardim - minhas outras formas de terapia.
              </p>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-40 h-40 rounded-full bg-accent-light/20 -z-10"></div>
      </div>
    </section>
  );
}