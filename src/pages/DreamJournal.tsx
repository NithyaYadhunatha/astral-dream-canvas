
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyButton, DreamyInput } from '@/components/ui/DreamyCard';
import { useDream } from '@/context/DreamContext';
import { Search } from 'lucide-react';

const DreamJournal = () => {
  const { dreams, currentDream, analyzeDream } = useDream();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // Filter dreams based on search query and active filter
  const filteredDreams = dreams.filter(dream => {
    const matchesSearch = 
      dream.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dream.analysis.themes.some(theme => 
        theme.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      dream.analysis.emotions.some(emotion => 
        emotion.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    if (!matchesSearch) return false;
    
    if (activeFilter === 'all') return true;
    
    // Filter by emotion or theme
    return dream.analysis.emotions.includes(activeFilter) || 
           dream.analysis.themes.includes(activeFilter);
  });

  // Get unique emotions and themes for filtering
  const allEmotions = [...new Set(dreams.flatMap(dream => dream.analysis.emotions))];
  const allThemes = [...new Set(dreams.flatMap(dream => dream.analysis.themes))];
  
  const handleViewDream = (dream: typeof dreams[0]) => {
    // Set the selected dream as the current dream
    analyzeDream(dream.content).then(() => {
      navigate('/dream-visualizer');
    });
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Your Dream Journal
        </h1>

        <div className="mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <DreamyCard>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                <DreamyInput
                  placeholder="Search by dream content, emotion, or theme..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="w-full md:w-auto">
                <DreamyButton variant="primary" onClick={() => navigate('/dream-input')}>
                  Record New Dream
                </DreamyButton>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-white/80 mb-2">Filter by:</h3>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                    activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Dreams
                </span>
                
                {allEmotions.map((emotion) => (
                  <span
                    key={emotion}
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                      activeFilter === emotion ? 'bg-accent text-white' : 'bg-accent/20 text-white/70 hover:bg-accent/30'
                    }`}
                    onClick={() => setActiveFilter(emotion)}
                  >
                    {emotion}
                  </span>
                ))}
                
                {allThemes.map((theme) => (
                  <span
                    key={theme}
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                      activeFilter === theme ? 'bg-primary text-white' : 'bg-primary/20 text-white/70 hover:bg-primary/30'
                    }`}
                    onClick={() => setActiveFilter(theme)}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </DreamyCard>
        </div>

        <div className="space-y-6 staggered">
          {filteredDreams.length > 0 ? (
            filteredDreams.map((dream) => (
              <DreamyCard key={dream.id} className="cursor-pointer hover:border-primary/50 transition-colors">
                <div onClick={() => handleViewDream(dream)}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="h-32 md:h-full rounded-lg overflow-hidden">
                        <img
                          src={dream.imageUrl}
                          alt="Dream visualization"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/60">
                          {formatDate(dream.date)}
                        </span>
                        <div className="flex gap-2">
                          {dream.analysis.emotions.slice(0, 2).map((emotion, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-accent/20 text-white/80">
                              {emotion}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-white/80 line-clamp-2 mb-3 italic">
                        "{dream.content}"
                      </p>
                      
                      <p className="text-white/70 line-clamp-2 mb-4">
                        {dream.analysis.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {dream.analysis.themes.map((theme, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-white/80">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DreamyCard>
            ))
          ) : (
            <DreamyCard className="text-center py-12">
              <p className="text-white/80 mb-6">No dreams found matching your search.</p>
              <DreamyButton variant="primary" onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}>
                Clear Filters
              </DreamyButton>
            </DreamyCard>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DreamJournal;
