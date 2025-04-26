
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyButton, DreamyTextarea } from '@/components/ui/DreamyCard';
import { useDream } from '@/context/DreamContext';

const DreamInput = () => {
  const [dreamContent, setDreamContent] = useState('');
  const { analyzeDream, isAnalyzing } = useDream();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dreamContent.trim()) return;
    
    await analyzeDream(dreamContent);
    navigate('/dream-analysis');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Describe Your Dream
        </h1>
        
        <DreamyCard className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-white/80 text-center">
              Share the details of your dream. Include people, places, emotions, colors, and any significant objects or events.
            </p>
            
            <DreamyTextarea
              placeholder="Last night, I dreamt that I was walking through a dense forest. The trees were tall and ancient, with branches that seemed to reach out like arms..."
              value={dreamContent}
              onChange={(e) => setDreamContent(e.target.value)}
              rows={8}
              required
              className="w-full"
            />
            
            <div className="text-right">
              <DreamyButton
                type="submit"
                variant="primary"
                disabled={isAnalyzing || !dreamContent.trim()}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze My Dream'}
              </DreamyButton>
            </div>
          </form>
        </DreamyCard>
        
        <div className="mt-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <DreamyCard variant="highlight" className="text-center">
            <h3 className="text-2xl font-dancing text-primary mb-4">Tips for Dream Recall</h3>
            <ul className="space-y-2 text-white/80 list-disc list-inside text-left">
              <li>Keep a pen and paper by your bed to record dreams immediately upon waking</li>
              <li>Try to recall your dreams while still in the position you woke up in</li>
              <li>Focus on emotions, colors, and sensations, not just events</li>
              <li>Record even small fragments - they can lead to fuller memories</li>
            </ul>
          </DreamyCard>
        </div>
      </div>
    </Layout>
  );
};

export default DreamInput;
