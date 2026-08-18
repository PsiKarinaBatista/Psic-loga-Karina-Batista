import { useEffect, useRef } from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
import { BiSolidQuoteRight } from "react-icons/bi";
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Testimonials() {
  const testimonialsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const testimonials = testimonialsRef.current;
    if (!testimonials) return;

    const cards = gsap.utils.toArray('.testimonial-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(0.7)"
      });
    });

    // Floating animation
    cards.forEach(card => {
      gsap.to(card, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const items = [
    { 
      name: 'Paciente', 
      quote: 'Atendimento humano e transformador que me ajudou a encontrar meu caminho de volta à alegria.',
      role: 'Tratamento para depressão'
    },
    { 
      name: 'Paciente', 
      quote: 'Me ajudou a gerenciar a ansiedade e recuperar minha rotina com técnicas práticas e acolhimento.',
      role: 'Tratamento para ansiedade'
    },
    { 
      name: 'Paciente', 
      quote: 'A abordagem fenomenológica trouxe insights profundos sobre meus relacionamentos e padrões emocionais.',
      role: 'Acompanhamento terapêutico'
    },
    { 
      name: 'Paciente', 
      quote: 'O espaço seguro criado pela Karina foi fundamental para meu processo de autoconhecimento e cura.',
      role: 'Psicoterapia integrativa'
    }
  ];

  return (
    <section id="testimonials" className="py-24 overflow-hidden" ref={testimonialsRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            <span className="text-primary">Vozes</span> de Transformação
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-8"></div>
          <p className="text-neutral-dark/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Relatos de quem vivenciou o processo terapêutico e encontrou caminhos para uma vida mais plena.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {items.map((item, index) => (
            <blockquote 
              key={item.name} 
              className="testimonial-card px-8 pt-6 pb-8 bg-white rounded-3xl border border-neutral-dark/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary-light/30 z-0 group-hover:bg-primary-light/40 transition-colors duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-accent-light/30 z-0 group-hover:bg-accent-light/40 transition-colors duration-300"></div>
              
              <div className="relative z-10">
                <BiSolidQuoteRight className="w-16 h-16 text-primary-light/50 mb-6" />
                
                <p className="text-neutral-dark/80 text-lg leading-relaxed mb-8">"{item.quote}"</p>
                
                <footer className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-light/30 to-primary-light/50 flex items-center justify-center text-primary-light font-semibold mr-4 text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-neutral-dark font-semibold text-lg">{item.name}</p>
                    <p className="text-primary-light font-medium">{item.role}</p>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 border-2 border-primary-light text-primary hover:bg-primary-light/10 hover:border-primary transition-all duration-300 font-medium group"
          >
            <LuMessageCircleMore className="w-5 h-5 mr-3" />
            Deixe seu depoimento ou agende uma consulta
          </Link>
        </div>
      </div>
    </section>
  );
}