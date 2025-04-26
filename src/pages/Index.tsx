
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyButton } from '@/components/ui/DreamyCard';

const Index = () => {
  const features = [
    {
      title: "Dream Analysis",
      description: "Uncover the hidden meanings behind your dreams with our AI-powered analysis.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop",
    },
    {
      title: "Dream Visualization",
      description: "See your dreams come to life through stunning AI-generated artwork.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
    },
    {
      title: "Dream Journal",
      description: "Keep track of your dreams and their meanings in your personal dream journal.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&auto=format&fit=crop",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-dancing animate-fadeIn gradient-text text-shadow-lg mb-6">
          Lucid AI
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Explore the hidden meanings of your dreams through AI-powered analysis and visualization
        </p>
        
        <div className="mt-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <Link to="/login">
            <DreamyButton variant="primary" className="text-lg px-8 py-4">
              Start Dreaming
            </DreamyButton>
          </Link>
        </div>

        <div className="mt-16 max-w-md mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <DreamyCard variant="highlight" className="py-8">
            <p className="text-lg italic text-center text-white/90">
              "The dream is the small hidden door in the deepest and most intimate sanctum of the soul."
            </p>
            <p className="mt-4 text-right text-white/70">— Carl Jung</p>
          </DreamyCard>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-16">
          Unlock Your Dreams
        </h2>

        <div className="grid md:grid-cols-3 gap-8 staggered">
          {features.map((feature, index) => (
            <DreamyCard key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-dancing text-primary mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </DreamyCard>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-16">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center staggered">
          <div className="md:w-1/2">
            <DreamyCard variant="floating" className="backdrop-blur-lg">
              <h3 className="text-3xl font-dancing text-primary mb-4">Record Your Dream</h3>
              <p className="text-white/80 mb-6">
                Enter the details of your dream into our intuitive dream input form. The more details you provide, the more accurate your analysis will be.
              </p>
              <div className="glass-card p-4 rounded-lg bg-opacity-30">
                <p className="italic text-white/70">
                  "Last night I dreamt I was flying over mountains, feeling free and unbounded..."
                </p>
              </div>
            </DreamyCard>
          </div>
          
          <div className="md:w-1/2">
            <DreamyCard>
              <h3 className="text-3xl font-dancing text-primary mb-4">Receive Your Analysis</h3>
              <p className="text-white/80 mb-6">
                Our AI analyzes the symbols, emotions, and themes in your dream to provide a personalized interpretation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-white text-sm">Flying</span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-white text-sm">Freedom</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-white text-sm">Mountains</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-white text-sm">Journey</span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-white text-sm">Elevation</span>
              </div>
            </DreamyCard>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup">
            <DreamyButton variant="secondary">
              Create Your Account
            </DreamyButton>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-[-1]"></div>
        
        <h2 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-16">
          Dream Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-8 staggered">
          <DreamyCard className="backdrop-blur-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center text-white text-xl">
                JD
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Jane Doe</h4>
                <p className="text-white/60 text-sm">Dream Explorer</p>
              </div>
            </div>
            <p className="text-white/80 italic">
              "Lucid AI has helped me understand recurring dreams that I've had for years. The insights provided were surprisingly accurate and meaningful."
            </p>
          </DreamyCard>
          
          <DreamyCard className="backdrop-blur-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center text-white text-xl">
                MS
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Michael Smith</h4>
                <p className="text-white/60 text-sm">Dream Journaler</p>
              </div>
            </div>
            <p className="text-white/80 italic">
              "The visualizations created from my dreams are hauntingly beautiful. They capture the essence of my dreams in ways I couldn't have imagined."
            </p>
          </DreamyCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-center">
        <DreamyCard variant="floating" className="max-w-3xl mx-auto backdrop-blur-xl">
          <h2 className="text-4xl font-dancing text-primary mb-6">Begin Your Dream Journey</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Start exploring the hidden meanings of your dreams today. Sign up for Lucid AI and unlock the secrets of your subconscious mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <DreamyButton variant="accent">
                Create Account
              </DreamyButton>
            </Link>
            <Link to="/login">
              <DreamyButton variant="outline">
                Sign In
              </DreamyButton>
            </Link>
          </div>
        </DreamyCard>
      </section>
    </Layout>
  );
};

export default Index;
