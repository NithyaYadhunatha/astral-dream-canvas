
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

// Define the dream type
interface DreamSymbol {
  name: string;
  meaning: string;
}

interface Dream {
  id: string;
  date: Date;
  content: string;
  analysis: {
    symbols: DreamSymbol[];
    emotions: string[];
    themes: string[];
    summary: string;
  };
  imageUrl: string;
  notes?: string;
}

// Dream context type
interface DreamContextType {
  dreams: Dream[];
  currentDream: Dream | null;
  isAnalyzing: boolean;
  analyzeDream: (content: string) => Promise<void>;
  saveDream: (dream: Omit<Dream, 'id' | 'date'>) => void;
  updateDream: (id: string, updates: Partial<Dream>) => void;
  deleteDream: (id: string) => void;
  getDreamById: (id: string) => Dream | undefined;
}

// Create the context
const DreamContext = createContext<DreamContextType | undefined>(undefined);

// Sample dream data
const sampleDreams: Dream[] = [
  {
    id: '1',
    date: new Date('2023-04-15'),
    content: 'I was flying above a beautiful forest, feeling free and light as I soared through clouds.',
    analysis: {
      symbols: [
        { name: 'Flying', meaning: 'Freedom, liberation, escape from limitations' },
        { name: 'Clouds', meaning: 'Uncertainty, transformation, divine realm' },
        { name: 'Forest', meaning: 'Unconscious mind, unexplored territory, natural wisdom' },
      ],
      emotions: ['Joy', 'Freedom', 'Peace'],
      themes: ['Liberation', 'Natural connection', 'Spiritual journey'],
      summary: 'This dream reflects a desire for freedom and transcendence. The flying symbolizes rising above earthly concerns, while the forest represents your connection to inner wisdom.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2070',
  },
  {
    id: '2',
    date: new Date('2023-03-22'),
    content: 'I was in an old house with many rooms. Each time I opened a door, I discovered a new, fantastic room that was bigger than the house itself.',
    analysis: {
      symbols: [
        { name: 'House', meaning: 'Self, psyche, different aspects of personality' },
        { name: 'Doors', meaning: 'Opportunities, transitions, choices' },
        { name: 'Rooms', meaning: 'Different aspects of self, unexplored potential' },
      ],
      emotions: ['Wonder', 'Curiosity', 'Surprise'],
      themes: ['Self-discovery', 'Expansion', 'Hidden potential'],
      summary: 'This dream suggests you're discovering new aspects of yourself. The house represents your mind, and the expanding rooms indicate there's more to you than you've realized.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2071',
    notes: 'This dream occurred after I started my new creative project.',
  },
];

// Dream provider component
export const DreamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dreams, setDreams] = useState<Dream[]>(sampleDreams);
  const [currentDream, setCurrentDream] = useState<Dream | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Analyze a new dream
  const analyzeDream = async (content: string) => {
    setIsAnalyzing(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock dream analysis (this would be replaced with actual API call)
      const mockSymbols = [
        { name: 'Water', meaning: 'Emotions, unconscious mind, purification' },
        { name: 'Mountain', meaning: 'Achievement, challenges, perspective' },
        { name: 'Stars', meaning: 'Guidance, hope, divine influence' },
      ];
      
      const mockEmotions = ['Awe', 'Tranquility', 'Reflection'];
      const mockThemes = ['Personal journey', 'Spiritual growth', 'Inner peace'];
      
      const newDream: Dream = {
        id: Date.now().toString(),
        date: new Date(),
        content,
        analysis: {
          symbols: mockSymbols,
          emotions: mockEmotions,
          themes: mockThemes,
          summary: 'Your dream reflects a journey of self-discovery and emotional processing. The symbols present indicate you are navigating through your feelings while seeking clarity and growth.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2071',
      };
      
      setCurrentDream(newDream);
      toast({
        title: 'Dream Analysis Complete',
        description: 'Your dream has been analyzed successfully',
      });
    } catch (error) {
      toast({
        title: 'Analysis failed',
        description: 'Unable to analyze your dream. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Save a dream to the journal
  const saveDream = (dream: Omit<Dream, 'id' | 'date'>) => {
    const newDream: Dream = {
      ...dream,
      id: Date.now().toString(),
      date: new Date(),
    };
    
    setDreams(prevDreams => [...prevDreams, newDream]);
    toast({
      title: 'Dream Saved',
      description: 'Your dream has been saved to your journal',
    });
  };

  // Update an existing dream
  const updateDream = (id: string, updates: Partial<Dream>) => {
    setDreams(prevDreams =>
      prevDreams.map(dream =>
        dream.id === id ? { ...dream, ...updates } : dream
      )
    );
    
    toast({
      title: 'Dream Updated',
      description: 'Your dream has been updated successfully',
    });
  };

  // Delete a dream
  const deleteDream = (id: string) => {
    setDreams(prevDreams => prevDreams.filter(dream => dream.id !== id));
    
    toast({
      title: 'Dream Deleted',
      description: 'Your dream has been removed from your journal',
    });
  };

  // Get a dream by ID
  const getDreamById = (id: string) => {
    return dreams.find(dream => dream.id === id);
  };

  return (
    <DreamContext.Provider
      value={{
        dreams,
        currentDream,
        isAnalyzing,
        analyzeDream,
        saveDream,
        updateDream,
        deleteDream,
        getDreamById,
      }}
    >
      {children}
    </DreamContext.Provider>
  );
};

// Hook to use the dream context
export const useDream = () => {
  const context = useContext(DreamContext);
  if (context === undefined) {
    throw new Error('useDream must be used within a DreamProvider');
  }
  return context;
};
