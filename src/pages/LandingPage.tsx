import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import { ArrowRight, CheckCircle2, Users, TrendingUp, ShieldCheck, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useSlides } from '../contexts/SlidesContext';

export default function LandingPage() {
  const { slides } = useSlides();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentSlideIndex] || {
    title: 'Resultados Reais para a sua',
    titleHighlight: 'Fazenda',
    slogan: 'Consultoria especializada em pecuária de corte e leite. Aumente sua produtividade com tecnologia e gestão eficiente.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop',
    cardIcon: 'TrendingUp',
    cardTitle: '+30%',
    cardDescription: 'Aumento médio em produtividade'
  };

  // @ts-ignore
  const CardIcon = Icons[currentSlide.cardIcon] || TrendingUp;

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-green-950 text-gray-900 dark:text-white overflow-hidden transition-colors duration-200">
        <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply dark:mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="transition-all duration-500 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {currentSlide.title} <span className="text-green-600 dark:text-yellow-400">{currentSlide.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg transition-colors duration-200">
              {currentSlide.slogan}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openQuoteModal}
                className="bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-green-950 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center gap-2"
              >
                Falar com Especialista <ArrowRight size={20} />
              </button>
              <Link 
                to="/sobre"
                className="bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 border border-gray-200 dark:border-white/30 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                <PlayCircle size={20} /> Conheça a Campec
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 dark:from-green-900 to-transparent rounded-3xl transform rotate-3 scale-105 transition-colors duration-200"></div>
            <img 
              key={currentSlide.image}
              src={currentSlide.image} 
              alt="Slide" 
              className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full animate-fade-in"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 text-green-900 dark:text-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 transition-colors duration-200 animate-slide-up">
              <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full text-green-800 dark:text-green-400 transition-colors duration-200">
                <CardIcon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold">{currentSlide.cardTitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-200">{currentSlide.cardDescription}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlideIndex 
                      ? 'bg-green-600 dark:bg-yellow-400 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-12 border-b border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100 dark:divide-gray-700 transition-colors duration-200">
            <div>
              <p className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2 transition-colors duration-200">13+</p>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2 transition-colors duration-200">500+</p>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">Fazendas Atendidas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2 transition-colors duration-200">100%</p>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">Foco em Resultados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2 transition-colors duration-200">15+</p>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200">Especialistas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-green-800 dark:text-green-400 font-bold tracking-wider uppercase text-sm mb-2 transition-colors duration-200">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Como podemos ajudar sua propriedade</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Oferecemos um portfólio completo de serviços para atender todas as necessidades da sua fazenda, do pasto à gestão financeira.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 dark:group-hover:bg-green-500 group-hover:text-white dark:group-hover:text-gray-900 transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Assessoria Reprodutiva</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">Programas de IATF, diagnóstico de gestação por ultrassonografia e avaliação andrológica.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 dark:group-hover:bg-green-500 group-hover:text-white dark:group-hover:text-gray-900 transition-colors">
                <TrendingUp size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Nutrição Animal</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">Formulação de dietas, planejamento forrageiro e estratégias de suplementação a pasto.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 dark:group-hover:bg-green-500 group-hover:text-white dark:group-hover:text-gray-900 transition-colors">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Gestão de Propriedades</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">Análise de viabilidade econômica, controle de custos e treinamento de equipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section (Reels) */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-green-800 dark:text-green-400 font-bold tracking-wider uppercase text-sm mb-2 transition-colors duration-200">Dia a Dia</h2>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Acompanhe nosso trabalho</h3>
            </div>
            <a href="#" className="hidden md:flex bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full font-medium transition-colors items-center gap-2">
              Siga @campec <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-gray-200 dark:bg-gray-700">
                <img 
                  src={`https://images.unsplash.com/photo-1596733430284-f743728fc360?q=80&w=800&auto=format&fit=crop&sig=${i}`} 
                  alt="Instagram Reel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="text-white w-12 h-12" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium line-clamp-2">Manejo reprodutivo na fazenda Santa Luzia. Resultados impressionantes!</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium transition-colors items-center gap-2">
              Siga @campec <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 dark:bg-yellow-500 py-16 border-t border-gray-200 dark:border-transparent transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-green-950 mb-6 transition-colors duration-200">Pronto para transformar os resultados da sua fazenda?</h2>
          <p className="text-gray-600 dark:text-green-900 text-lg mb-8 max-w-2xl mx-auto transition-colors duration-200">Agende uma visita técnica sem compromisso e descubra o potencial oculto da sua propriedade.</p>
          <button 
            onClick={openQuoteModal}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-900 dark:hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento
          </button>
        </div>
      </section>
    </PublicLayout>
  );
}
