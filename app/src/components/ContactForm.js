'use client';

import { FiMapPin, FiPhone, FiClock, FiExternalLink, FiMessageCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  const endereco = {
    titulo: "Consultório Pinheiros",
    rua: "Rua Paes Leme, 136",
    complemento: "(Referência: Sesc Pinheiros)",
    cidade: "São Paulo - SP",
    cep: "05424-010",
    telefone: "(11) 95276-2332",
    comodidade: "Estações próximas: Faria Lima e Pinheiros",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2615054374355!2d-46.69801682468706!3d-23.559213767403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578a3b4e2a8d%3A0x6b7cb7cbeef5e21e!2sR.%20Paes%20Leme%2C%20136%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005424-010!5e0!3m2!1spt-BR!2sbr!4v1712345678901"
  };

  const handleCopyAddress = () => {
    const fullAddress = `${endereco.rua}, ${endereco.cidade}, ${endereco.cep}`;
    navigator.clipboard.writeText(fullAddress);
    alert("Endereço copiado para a área de transferência!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbyadqp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Mensagem enviada com sucesso! Em breve entraremos em contato.");
        form.reset();
      } else {
        alert("❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };


  return (
    <section id="contact" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            <span className="text-primary">Entre em Contato</span> e Agende sua Consulta
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Seção de Endereço e Mapa */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-dark/20">
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="bg-primary-light/20 p-4 rounded-2xl">
                      <FiMapPin className="text-primary-light text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-dark mb-3">{endereco.titulo}</h3>
                      <div className="space-y-2">
                        <p className="text-neutral-dark/80 font-medium">{endereco.rua}</p>
                        <p className="text-neutral-dark/60 text-sm">{endereco.complemento}</p>
                        <p className="text-neutral-dark/80">{endereco.cidade}</p>
                        <p className="text-neutral-dark/80 font-medium">{endereco.cep}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mapa */}
                <div className="relative h-80 rounded-b-3xl overflow-hidden">
                  {isMapLoaded ? (
                    <iframe
                      src={endereco.mapa}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-light flex items-center justify-center">
                      <p className="text-neutral-dark/60">Carregando mapa...</p>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <FiMapPin className="text-primary-light" />
                    <span className="text-sm font-medium text-neutral-dark">Consultório</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopyAddress}
                className="flex items-center gap-2 bg-neutral-dark/10 hover:bg-neutral-dark/20 text-neutral-dark px-6 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                <FiMapPin className="w-4 h-4" /> Copiar endereço
              </button>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco.rua)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                <FiExternalLink className="w-4 h-4" /> Rotas no Google Maps
              </a>
            </div>

            {/* Informações de Contato */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-dark/20">
              <h4 className="text-xl font-semibold text-neutral-dark mb-6">Outros Contatos</h4>
              <div className="space-y-6">
                {[
                  {
                    icon: FiPhone,
                    label: "Telefone / WhatsApp",
                    value: "(11) 95276-2323",
                    link: "https://wa.me/5511952762323"
                  },
                  {
                    icon: FiMessageCircle,
                    label: "E-mail",
                    value: "karinabatista.psico@gmail.com",
                    link: "mailto:karinabatista.psico@gmail.com"
                  },
                  {
                    icon: FiClock,
                    label: "Horário de Atendimento",
                    value: "Segunda a Sexta, das 9h às 18h"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-neutral-dark/10 p-3 rounded-xl">
                      <item.icon className="text-neutral-dark/60 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-neutral-dark/60 text-sm">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-dark font-medium hover:text-primary transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-dark font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-dark/20">
            <h3 className="text-2xl font-semibold text-neutral-dark mb-3">Envie uma Mensagem</h3>
            <p className="text-neutral-dark/70 mb-8">Preencha o formulário para solicitar informações ou agendar uma consulta.</p>

            <form
              action="https://formspree.io/f/xrbyadqp"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark/70 mb-2">Seu nome *</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Nome completo"
                    required
                    className="w-full p-4 border-2 border-neutral-dark/20 bg-white rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark/70 mb-2">Seu e-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@exemplo.com"
                    required
                    className="w-full p-4 border-2 border-neutral-dark/20 bg-white rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark/70 mb-2">Telefone (opcional)</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="(11) 95276-2323"
                  className="w-full p-4 border-2 border-neutral-dark/20 bg-white rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-dark/70 mb-2">Tipo de Atendimento *</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full p-4 border-2 border-neutral-dark/20 bg-white rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200"
                >
                  <option value="">Selecione uma opção</option>
                  <option>Consulta Individual</option>
                  <option>Apoio Hospitalar</option>
                  <option>Projeto Comunitário</option>
                  <option>Orientação Profissional</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark/70 mb-2">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Como posso te ajudar?"
                  required
                  className="w-full p-4 border-2 border-neutral-dark/20 bg-white rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-200 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FiMessageCircle className="w-5 h-5" />
                Enviar
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}