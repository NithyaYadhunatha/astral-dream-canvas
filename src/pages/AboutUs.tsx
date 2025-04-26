
import React from 'react';
import Layout from '@/components/common/Layout';
import { DreamyCard } from '@/components/ui/DreamyCard';

const AboutUs = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          About Lucid AI
        </h1>

        <div className="space-y-8 staggered">
          <DreamyCard>
            <h2 className="text-3xl font-dancing text-primary mb-4">Our Vision</h2>
            <p className="text-white/80 mb-4">
              Lucid AI was born from a fascination with dreams and their meanings. We believe that dreams are not just random firings of neurons during sleep, but windows into our subconscious mind, offering insights into our deepest thoughts, fears, and desires.
            </p>
            <p className="text-white/80">
              Our vision is to create a platform where anyone can explore the rich tapestry of their dream life, gaining valuable insights and understanding of themselves through this magical, often overlooked dimension of human experience.
            </p>
          </DreamyCard>

          <DreamyCard>
            <h2 className="text-3xl font-dancing text-primary mb-4">Our Approach</h2>
            <p className="text-white/80 mb-4">
              At Lucid AI, we combine ancient wisdom about dream interpretation with cutting-edge AI technology to analyze and visualize your dreams in a way that is both meaningful and beautiful.
            </p>
            <p className="text-white/80">
              Our AI has been trained on a vast array of dream symbols and their interpretations across different cultures and psychological frameworks. We don't believe in one-size-fits-all interpretations, but rather in offering perspectives that resonate with your unique experience.
            </p>
          </DreamyCard>

          <DreamyCard>
            <h2 className="text-3xl font-dancing text-primary mb-4">The Technology Behind Lucid AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-dancing text-accent mb-2">Dream Analysis</h3>
                <p className="text-white/80 mb-4">
                  Our AI uses natural language processing to identify key elements, emotions, and themes in your dream narratives. It analyzes patterns and connections, drawing from psychological frameworks including Jungian archetypes, Freudian symbolism, and contemporary cognitive approaches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-dancing text-accent mb-2">Dream Visualization</h3>
                <p className="text-white/80 mb-4">
                  Using advanced image generation technology, we transform the key elements and emotional tone of your dreams into unique visual representations. These images capture not just what happened in your dream, but the feeling and essence of the experience.
                </p>
              </div>
            </div>
          </DreamyCard>

          <DreamyCard>
            <h2 className="text-3xl font-dancing text-primary mb-4">Our Team</h2>
            <p className="text-white/80 mb-6">
              Lucid AI was created by a diverse team of dreamers, technologists, psychologists, and artists who share a passion for exploring the mysteries of the human mind. We believe in the power of dreams to enlighten, inspire, and heal.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/30 mx-auto flex items-center justify-center text-white text-2xl mb-3">
                  AS
                </div>
                <h4 className="text-white font-medium">Dr. Alex Smith</h4>
                <p className="text-white/60 text-sm">Dream Researcher</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-accent/30 mx-auto flex items-center justify-center text-white text-2xl mb-3">
                  ML
                </div>
                <h4 className="text-white font-medium">Maya Lee</h4>
                <p className="text-white/60 text-sm">AI Engineer</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-secondary/30 mx-auto flex items-center justify-center text-white text-2xl mb-3">
                  JR
                </div>
                <h4 className="text-white font-medium">James Rivera</h4>
                <p className="text-white/60 text-sm">Visual Artist</p>
              </div>
            </div>
          </DreamyCard>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
