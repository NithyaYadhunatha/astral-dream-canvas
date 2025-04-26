
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyButton, DreamyTextarea } from '@/components/ui/DreamyCard';
import { useDream } from '@/context/DreamContext';

const DreamVisualizer = () => {
  const { currentDream, updateDream } = useDream();
  const [noteText, setNoteText] = useState(currentDream?.notes || '');
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  if (!currentDream) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-dancing text-primary mb-8">No Dream to Visualize</h1>
          <p className="text-white/80 mb-8">Please enter and analyze a dream first to see the visualization.</p>
          <DreamyButton variant="primary" onClick={() => navigate('/dream-input')}>
            Enter a Dream
          </DreamyButton>
        </div>
      </Layout>
    );
  }

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      updateDream(currentDream.id, { notes: noteText });
      setIsSaving(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Dream Visualization
        </h1>

        <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <DreamyCard className="p-0 overflow-hidden relative">
            <div className="h-[60vh] relative">
              <img
                src={currentDream.imageUrl}
                alt="Dream visualization"
                className="w-full h-full object-cover"
              />
              
              {/* Hover elements */}
              <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-8 p-8 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                {currentDream.analysis.symbols.map((symbol, index) => (
                  <div 
                    key={index}
                    className="glass-card p-3 backdrop-blur-md cursor-pointer transform hover:scale-105 transition-all"
                    style={{
                      top: `${20 + (index * 25)}%`,
                      left: `${10 + (index * 20)}%`,
                    }}
                  >
                    <h3 className="text-lg font-medium text-primary">{symbol.name}</h3>
                    <p className="text-sm text-white/80">{symbol.meaning}</p>
                  </div>
                ))}
              </div>
              
              {/* Instruction overlay */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm bg-black/30 py-2">
                Hover over the image to reveal dream symbols
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-dancing text-primary mb-4">Your Reflections</h2>
              <DreamyTextarea
                placeholder="Add your thoughts or reflections about this dream..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={4}
                className="w-full"
              />
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <DreamyButton variant="primary" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Notes'}
                </DreamyButton>
                <DreamyButton variant="secondary" onClick={() => navigate('/dream-journal')}>
                  Go to Journal
                </DreamyButton>
              </div>
            </div>
          </DreamyCard>
        </div>

        <div className="mt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <DreamyCard className="bg-opacity-40">
            <h2 className="text-2xl font-dancing text-primary mb-4">Dream Insights</h2>
            <p className="text-white/80 mb-4">{currentDream.analysis.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-white/60 text-sm">Themes:</span>
              {currentDream.analysis.themes.map((theme, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-primary/20 text-white text-sm">
                  {theme}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-white/60 text-sm">Emotions:</span>
              {currentDream.analysis.emotions.map((emotion, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-accent/20 text-white text-sm">
                  {emotion}
                </span>
              ))}
            </div>
          </DreamyCard>
        </div>
      </div>
    </Layout>
  );
};

export default DreamVisualizer;
