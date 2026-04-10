import React, { useState, useRef } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, Upload } from 'lucide-react';
import { useSlides, SlideData } from '../../contexts/SlidesContext';

export default function Slides() {
  const { slides, addSlide, updateSlide, deleteSlide } = useSlides();
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Partial<SlideData>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (slide: SlideData) => {
    setCurrentSlide(slide);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentSlide({
      title: '',
      titleHighlight: '',
      slogan: '',
      image: '',
      cardIcon: 'TrendingUp',
      cardTitle: '',
      cardDescription: ''
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (currentSlide.id) {
      updateSlide(currentSlide.id, currentSlide as Omit<SlideData, 'id'>);
    } else {
      addSlide(currentSlide as Omit<SlideData, 'id'>);
    }
    setIsEditing(false);
    setCurrentSlide({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este slide?')) {
      deleteSlide(id);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentSlide({ ...currentSlide, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  if (isEditing) {
    return (
      <div className="max-w-4xl pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentSlide.id ? 'Editar Slide' : 'Novo Slide'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Preencha os dados do slide para a página inicial.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <X size={18} /> Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#0f7636] hover:bg-[#0c5e2b] text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Save size={18} /> Salvar Slide
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          
          {/* Textos Principais */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Textos Principais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Título</label>
                <input
                  type="text"
                  value={currentSlide.title || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, title: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white"
                  placeholder="Ex: Resultados Reais para a sua"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Palavra em Destaque (Verde)</label>
                <input
                  type="text"
                  value={currentSlide.titleHighlight || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, titleHighlight: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white"
                  placeholder="Ex: Fazenda"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Slogan / Descrição</label>
                <textarea
                  value={currentSlide.slogan || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, slogan: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white resize-none"
                  placeholder="Ex: Consultoria especializada em pecuária..."
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100 dark:border-gray-700" />

          {/* Imagem */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Imagem de Fundo</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-64 h-40 bg-gray-100 dark:bg-gray-700 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 overflow-hidden relative group">
                {currentSlide.image ? (
                  <img src={currentSlide.image} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-xs font-medium">Sem imagem</span>
                  </div>
                )}
                {currentSlide.image && (
                  <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition-all">
                    <button 
                      onClick={() => setCurrentSlide({ ...currentSlide, image: '' })}
                      className="text-white text-sm font-bold hover:underline"
                    >
                      Remover
                    </button>
                  </div>
                )}
              </div>
              <div className="flex-1 w-full">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors mb-2 flex items-center gap-2"
                >
                  <Upload size={16} />
                  Fazer Upload de Imagem
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Recomendado: Imagem em alta resolução (1920x1080px). Formatos: JPG, PNG ou WebP.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 dark:border-gray-700" />

          {/* Card Flutuante */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Card Flutuante (Estatística)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Ícone (Nome Lucide)</label>
                <input
                  type="text"
                  value={currentSlide.cardIcon || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, cardIcon: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white"
                  placeholder="Ex: TrendingUp, Users, ShieldCheck"
                />
                <p className="text-xs text-gray-500 mt-1">Use nomes de ícones da biblioteca Lucide React.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Título do Card</label>
                <input
                  type="text"
                  value={currentSlide.cardTitle || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, cardTitle: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white"
                  placeholder="Ex: +30%"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Descrição do Card</label>
                <input
                  type="text"
                  value={currentSlide.cardDescription || ''}
                  onChange={(e) => setCurrentSlide({ ...currentSlide, cardDescription: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0f7636] outline-none dark:text-white"
                  placeholder="Ex: Aumento médio em produtividade"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Slides da Página Inicial</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gerencie os banners exibidos no topo do site.</p>
        </div>
        <button
          onClick={handleAddNew}
          className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus size={20} />
          Novo Slide
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row transition-colors duration-200">
            <div className="w-full md:w-64 h-48 md:h-auto bg-gray-200 dark:bg-gray-700 shrink-0 relative">
              {slide.image ? (
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <ImageIcon size={32} />
                </div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {slide.title} <span className="text-[#0f7636] dark:text-yellow-400">{slide.titleHighlight}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {slide.slogan}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3 inline-flex items-center gap-3 border border-gray-100 dark:border-gray-700">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm text-[#0f7636] dark:text-green-400">
                    <ImageIcon size={16} /> {/* Placeholder for actual icon */}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">{slide.cardTitle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{slide.cardDescription}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => handleEdit(slide)}
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-[#0f7636] dark:hover:text-green-400 transition-colors"
                >
                  <Edit2 size={16} /> Editar
                </button>
                <button
                  onClick={() => handleDelete(slide.id)}
                  className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700 transition-colors ml-auto"
                >
                  <Trash2 size={16} /> Excluir
                </button>
              </div>
            </div>
          </div>
        ))}

        {slides.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Nenhum slide cadastrado</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Adicione o primeiro slide para a página inicial.</p>
            <button
              onClick={handleAddNew}
              className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-4 py-2 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Novo Slide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
