import { FiBookOpen, FiGlobe, FiCheckCircle } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark leading-tight">
            <span className="text-primary">Karina Batista</span> — <br />
            <span className="text-neutral-dark/80 font-medium">Psicóloga Clínica</span>
          </h1>

          <p className="text-neutral-dark/70 max-w-2xl text-lg leading-relaxed">
            Ofereço um <span className="text-primary font-semibold">espaço seguro e acolhedor</span> para trabalharmos juntos em questões como depressão, ansiedade e desafios relacionais. Minha abordagem combina escuta qualificada com estratégias personalizadas de enfrentamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary-light/25 hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Agende uma consulta
            </Link>
            <Link 
              href="#about" 
              className="inline-flex items-center border-2 border-primary-light bg-white/80 px-8 py-4 rounded-xl text-primary hover:bg-primary-light/10 hover:border-primary transition-all duration-300 font-medium"
            >
              Conheça minha formação
            </Link>
          </div>

          <ul className="space-y-4 text-sm text-neutral-dark/70">
            {[
              {
                icon: IoLanguage,
                label: "Idiomas:",
                content: "Português • Inglês • Espanhol"
              },
              {
                icon: FiGlobe,
                label: "Atuação:",
                content: "Clínica, Hospitalar, Programas comunitários"
              },
              {
                icon: FiCheckCircle,
                label: "Prêmio:",
                content: "Psicóloga Destaque 2021 — Times Comunicação (Bahia)"
              }
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon 
                  className="w-5 h-5 text-primary-light mt-0.5 mr-3 flex-shrink-0" 
                  aria-hidden="true" 
                />
                <span>
                  <strong className="text-neutral-dark font-medium">{item.label}</strong> {item.content}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Card */}
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-dark/20 relative group">
            <div className="relative overflow-hidden">
              <Image
                src="/foto1.jpeg"
                alt="Dra. Karina Batista, Psicóloga"
                width={500}
                height={300}
                priority
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6 bg-neutral-light relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-primary-light/30"></div>
              
              <p className="text-sm text-neutral-dark/80 italic font-light leading-relaxed relative z-10">
                "Atendimento humanizado, baseado em práticas fenomenológicas e abordagem integrativa. Um espaço seguro para seu desenvolvimento emocional."
              </p>
            </div>
            
          </div>
              <h1 className="text-2xl mt-6 font-bold text-primary leading-tight">
                <span className="text-neutral-dark">CRP</span> — 
                <span className="text-neutral-dark font-medium"> 06/154067</span>
              </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 w-full h-96 lg:h-[58rem] z-0">
        <Image
          src="/arte1.png"
          alt="Arte decorativa"
          fill
          priority
          className="object-cover select-none opacity-20"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent"></div>

      </div>
    </section>
  );
}