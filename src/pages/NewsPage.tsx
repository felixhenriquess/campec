import PublicLayout from '../layouts/PublicLayout';
import { Search, Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

export default function NewsPage() {
  return (
    <PublicLayout>
      {/* Page Header */}
      <div className="bg-white dark:bg-green-950 text-gray-900 dark:text-white py-16 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Notícias e Artigos</h1>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
            <span>Home</span>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-green-800 dark:text-white font-medium">Notícias</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2">
            
            {/* Featured Article Carousel (Simulated) */}
            <div className="mb-12 relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2082&auto=format&fit=crop" 
                alt="Featured News" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <span className="bg-yellow-500 text-green-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-4">Mercado</span>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Preço da arroba do boi gordo atinge novo patamar histórico em Goiás
                </h2>
                <div className="flex items-center text-gray-300 text-sm gap-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> 15 Out 2024</span>
                  <span className="flex items-center gap-1"><User size={14} /> Por João Silva</span>
                </div>
              </div>
            </div>

            {/* Instagram Highlights */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Destaques do Instagram</h3>
                <a href="#" className="text-green-800 dark:text-green-400 font-medium hover:underline flex items-center gap-1 transition-colors duration-200">
                  Ver todos <ArrowRight size={16} />
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative group transition-colors duration-200">
                    <img 
                      src={`https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400&auto=format&fit=crop&sig=${i}`} 
                      alt="Insta post" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">Ver Post</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Articles List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Artigos Recentes</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Estratégias de suplementação para o período da seca",
                    category: "Nutrição",
                    date: "10 Out 2024",
                    desc: "Aprenda como manter o ganho de peso do seu rebanho mesmo durante os meses de menor disponibilidade de pastagem.",
                    img: "https://images.unsplash.com/photo-1544022513-56834d812d4a?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Protocolos de IATF: Qual o melhor para novilhas?",
                    category: "Reprodução",
                    date: "05 Out 2024",
                    desc: "Uma análise detalhada dos protocolos mais eficientes para maximizar a taxa de prenhez em novilhas de primeira cria.",
                    img: "https://images.unsplash.com/photo-1596733430284-f743728fc360?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Gestão financeira: Onde os pecuaristas mais erram",
                    category: "Gestão",
                    date: "28 Set 2024",
                    desc: "Evite os erros comuns que corroem a margem de lucro da sua fazenda e aprenda a controlar seus custos de forma efetiva.",
                    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((post, idx) => (
                  <article key={idx} className="flex flex-col sm:flex-row gap-6 group">
                    <div className="sm:w-1/3 shrink-0 rounded-xl overflow-hidden">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="sm:w-2/3 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-green-800 dark:text-green-400 text-sm font-bold uppercase tracking-wider transition-colors duration-200">{post.category}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1 transition-colors duration-200"><Calendar size={14} /> {post.date}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors">
                        <a href="#">{post.title}</a>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors duration-200">{post.desc}</p>
                      <a href="#" className="text-green-800 dark:text-green-400 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-max">
                        Ler artigo completo <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12 gap-2">
                <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-gray-600 transition-colors">1</button>
                <button className="w-10 h-10 rounded-lg bg-green-800 dark:bg-green-700 text-white flex items-center justify-center font-medium transition-colors duration-200">2</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-gray-600 transition-colors">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400">...</span>
                <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-800 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-gray-600 transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>

          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Search */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Buscar</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Pesquisar artigos..." 
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg pl-4 pr-10 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-800/20 dark:focus:ring-green-500/20 focus:border-green-800 dark:focus:border-green-500 transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Categorias</h4>
              <ul className="space-y-3">
                {[
                  { name: "Reprodução", count: 24 },
                  { name: "Nutrição", count: 18 },
                  { name: "Gestão", count: 12 },
                  { name: "Mercado", count: 9 },
                  { name: "Eventos", count: 5 }
                ].map((cat, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex justify-between items-center text-gray-600 dark:text-gray-400 hover:text-green-800 dark:hover:text-green-400 transition-colors group">
                      <span className="flex items-center gap-2">
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                        {cat.name}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-xs py-1 px-2 rounded-md group-hover:bg-green-50 dark:group-hover:bg-green-900/30 group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors">{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-2xl text-gray-900 dark:text-white border border-green-100 dark:border-gray-800 transition-colors duration-200">
              <h4 className="text-xl font-bold mb-2">Assine nossa Newsletter</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-200">Receba as melhores dicas de pecuária diretamente no seu e-mail.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-yellow-500"
                />
                <button className="w-full bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-green-950 font-bold py-3 rounded-lg transition-colors">
                  Inscrever-se
                </button>
              </form>
            </div>

            {/* Must Watch */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Recomendados</h4>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <a key={i} href="#" className="flex gap-3 group">
                    <img 
                      src={`https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=200&auto=format&fit=crop&sig=${i+10}`} 
                      alt="Thumbnail" 
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors line-clamp-2 mb-1">
                        Como preparar o pasto para a transição águas-seca
                      </h5>
                      <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-200">12 Set 2024</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
