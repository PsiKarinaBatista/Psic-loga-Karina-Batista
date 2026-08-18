import { FaRegLightbulb, FaCube, FaArrowRight } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: 'Depressão',
      text: 'Avaliação e psicoterapia voltada à identificação de fatores e desenvolvimento de estratégias de enfrentamento.',
      icon: FaRegLightbulb
    },
    {
      title: 'Ansiedade e Pânico',
      text: 'Técnicas para manejo da ansiedade, redução de crises e reestruturação cognitiva.',
      icon: LuMessageCircleMore
    },
    {
      title: 'Estresse e Burnout',
      text: 'Intervenções para lidar com estressores ocupacionais e pessoais.',
      icon: FaCube
    },
    {
      title: 'Relacionamentos',
      text: 'Suporte para dificuldades de relacionamento, comunicação e vínculos afetivos.',
      icon: FaPeopleGroup
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            <span className="text-primary">Abordagens Terapêuticas</span> Personalizadas
          </h2>
          <p className="text-neutral-dark/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Atendimento individualizado, apoio em contexto hospitalar e projetos comunitários
            para promoção de saúde mental e bem-estar emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map(({ title, text, icon: Icon }, index) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-neutral-dark/20 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-12 p-3 rounded-xl bg-primary-light/20 flex items-center justify-center text-primary-light group-hover:bg-primary-light/30 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-dark mb-3">{title}</h3>
                  <p className="text-neutral-dark/70 mb-4 leading-relaxed">{text}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary-light hover:text-primary font-medium transition-colors duration-200 group/link"
                  >
                    Saiba mais sobre este tratamento
                    <FaArrowRight className="ml-2 w-4 h-4 opacity-80 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary-light/25 hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
          >
            Agendar Avaliação Inicial
          </Link>
        </div>
      </div>
    </section>
  );
}