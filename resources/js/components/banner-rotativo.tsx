import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/images/banner1.jpg',
      title: 'Transformando Ideias em Soluções Metálicas',
      description: 'Há 67 anos, a Permetal é referência em metais perfurados e expandidos.',
      link: '/projects',
      linkText: 'Conheça Nossos Projetos',
    },
    {
      image: '/images/banner2.jpg',
      title: 'Inovação e Qualidade',
      description: 'Projetos como Carrefour Express, Centro Cultural Jacareí e Hyundai Caoa.',
      link: '/about',
      linkText: 'Saiba Mais',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[activeSlide];

  return (
    <section
      className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-custom mb-8 transition-all duration-700"
    >
      <img
        src={current.image}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{current.title}</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">{current.description}</p>
        <Link
          href={current.link}
          className="bg-[#F5A623] hover:bg-[#E5941A] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {current.linkText}
        </Link>
      </div>
    </section>
  );
}

