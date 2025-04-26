
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyButton } from '@/components/ui/DreamyCard';
import { useDream } from '@/context/DreamContext';

const DreamAnalysis = () => {
  const { currentDream, saveDream } = useDream();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  if (!currentDream) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-dancing text-primary mb-8">No Dream to Analyze</h1>
          <p className="text-white/80 mb-8">Please enter a dream first to see the analysis.</p>
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
      saveDream(currentDream);
      setIsSaving(false);
      navigate('/dream-journal');
    }, 1000);
  };

  const handleVisualize = () => {
    navigate('/dream-visualizer');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Your Dream Analysis
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <DreamyCard className="h-full">
              <h2 className="text-2xl font-dancing text-primary mb-4">Your Dream</h2>
              <div className="glass-card p-4 mb-6 bg-opacity-30">
                <p className="italic text-white/80">{currentDream.content}</p>
              </div>

              <h3 className="text-xl font-dancing text-primary mb-2">Themes</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentDream.analysis.themes.map((theme, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-primary/20 text-white text-sm">
                    {theme}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-dancing text-primary mb-2">Emotions</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentDream.analysis.emotions.map((emotion, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-accent/20 text-white text-sm">
                    {emotion}
                  </span>
                ))}
              </div>
            </DreamyCard>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <DreamyCard className="h-full">
              <h2 className="text-2xl font-dancing text-primary mb-4">Dream Visualization</h2>
              <div className="rounded-lg overflow-hidden mb-6 h-48 md:h-64">
                <img
                  src={currentDream.imageUrl}
                  alt="Dream visualization"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-xl font-dancing text-primary mb-2">Interpretation</h3>
              <p className="text-white/80 mb-6">{currentDream.analysis.summary}</p>
              
              <h3 className="text-xl font-dancing text-primary mb-2">Key Symbols</h3>
              <div className="space-y-2">
                {currentDream.analysis.symbols.map((symbol, index) => (
                  <div key={index} className="glass-card p-3 bg-opacity-30">
                    <span className="font-medium text-primary">{symbol.name}:</span> {symbol.meaning}
                  </div>
                ))}
              </div>
            </DreamyCard>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <DreamyButton variant="primary" onClick={handleVisualize}>
            View Full Visualization
          </DreamyButton>
          <DreamyButton variant="accent" onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save to Dream Journal'}
          </DreamyButton>
        </div>
      </div>
    </Layout>
  );
};

export default DreamAnalysis;
