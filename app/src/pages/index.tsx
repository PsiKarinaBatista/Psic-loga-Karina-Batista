import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import PersonalAbout from '../components/PersonalAbout';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <section className="">
      <Head>
        <title>Karina Batista — Psicóloga Clínica</title>
        <meta name="description" content="Karina Batista — Psicóloga clínica e hospitalar. Atendimento para depressão, ansiedade, estresse e dificuldades relacionais." />
      </Head>

      <div className="min-h-screen bg-background text-slate-800">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <PersonalAbout />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>

      {/* Global styles - tailwind assumed */}
      <style jsx global>{`
        html,body,#__next{height:100%;}
        body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
      `}</style>
    </section>
  );
}