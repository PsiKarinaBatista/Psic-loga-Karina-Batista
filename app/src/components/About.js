import { LuGraduationCap } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import Link from "next/link";

export default function About() {
  const education = [
    {
      title: "Graduação em Psicologia",
      institution: "Universidade Paulista"
    },
    {
      title: "Pós-graduação em Saúde Pública",
      institution: "Universidade Anhembi Morumbi"
    },
    {
      title: "Clínica Fenomenológica Ampliada",
      institution: "NUCAFE (em andamento)"
    },
    {
      title: "Publicação Científica",
      institution: '"O olhar da Psicologia sobre a gravidez precoce vivenciada por casais adolescentes"'
    }
  ];

  const experience = [
    {
      title: "Psicóloga Técnica",
      institution: "CRAS, Prefeitura de Nordestina-BA",
      description: "Prevenção de riscos e fortalecimento de vínculos familiares e comunitários"
    },
    {
      title: "Psicóloga Hospitalar",
      institution: "Prefeitura de Nordestina-BA",
      description: "Apoio emocional a pacientes com ansiedade, depressão e processos de luto"
    },
    {
      title: "Estágio Hospitalar",
      institution: "Hospital Rede D'or São Luiz",
      description: "Projetos na minimização da ansiedade no processo de adoecimento"
    },
    {
      title: "Estágio Clínico",
      institution: "Centro de Psicologia Aplicada",
      description: "Psicodiagnóstico infantil e psicoterapia individual"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            <span className="text-primary">Karina Batista</span> — Psicóloga Clínica
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-8"></div>
          <p className="text-neutral-dark/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Minha missão é oferecer um espaço seguro e acolhedor para seu crescimento emocional, 
            combinando abordagens científicas com sensibilidade humana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formação */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-light/20 flex items-center justify-center text-primary-light">
                <LuGraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-dark">Formação Acadêmica</h3>
            </div>

            <ul className="space-y-6">
              {education.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-primary-light"></div>
                  </div>
                  <div>
                    <strong className="text-neutral-dark font-medium">{item.title}</strong>
                    <p className="text-neutral-dark/70 text-sm mt-1">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiência */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent-light/20 flex items-center justify-center text-accent-light">
                <MdWorkOutline className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-dark">Experiência Profissional</h3>
            </div>

            <ul className="space-y-6">
              {experience.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-accent-light"></div>
                  </div>
                  <div>
                    <strong className="text-neutral-dark font-medium">{item.title}</strong>
                    <p className="text-neutral-dark/70 text-sm mt-1">{item.institution}</p>
                    <p className="text-neutral-dark/50 text-xs mt-2">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 border-2 border-primary-light text-primary hover:bg-primary-light/10 hover:border-primary transition-all duration-300 font-medium"
          >
            <SlEnvolopeLetter className="w-5 h-5 mr-3" />
            Entre em contato para saber mais
          </Link>
        </div>
      </div>
    </section>
  );
}