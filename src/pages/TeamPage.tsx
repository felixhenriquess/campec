import React from 'react';
import PublicLayout from '../layouts/PublicLayout';
import { Linkedin, Mail } from 'lucide-react';

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Carlos Mendes",
      role: "Médico Veterinário & Fundador",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Especialista em reprodução bovina com mais de 15 anos de experiência no mercado. Doutor em Ciência Animal.",
      linkedin: "#",
      email: "carlos@campec.com.br"
    },
    {
      name: "Dra. Ana Paula",
      role: "Zootecnista - Nutrição",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Mestre em Nutrição de Ruminantes. Focada em otimizar o ganho de peso e a saúde do rebanho através de dietas estratégicas.",
      linkedin: "#",
      email: "ana@campec.com.br"
    },
    {
      name: "Roberto Silva",
      role: "Engenheiro Agrônomo",
      image: "https://images.unsplash.com/photo-1581599129568-e33151627628?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Especialista em manejo de pastagens e conservação do solo. Atua na integração lavoura-pecuária.",
      linkedin: "#",
      email: "roberto@campec.com.br"
    },
    {
      name: "Mariana Costa",
      role: "Gestão e Finanças",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Administradora com foco em agronegócio. Ajuda produtores a maximizarem seus lucros com gestão eficiente.",
      linkedin: "#",
      email: "mariana@campec.com.br"
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-green-900 dark:bg-green-950 text-white py-20 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Conheça os especialistas por trás dos resultados extraordinários da Campec. Uma equipe multidisciplinar apaixonada pelo agronegócio.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <a href={member.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-green-700 dark:text-green-400 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
