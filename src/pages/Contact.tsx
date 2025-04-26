
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import { DreamyCard, DreamyInput, DreamyTextarea, DreamyButton } from '@/components/ui/DreamyCard';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <DreamyCard className="h-full">
              <h2 className="text-3xl font-dancing text-primary mb-6">Get In Touch</h2>
              <p className="text-white/80 mb-6">
                Have questions about Lucid AI? Want to share your experiences or provide feedback? We'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-white mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-white/60 text-sm">hello@lucidai.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-white mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-white/60 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-white mr-4">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-white/60 text-sm">Dreamland, Suite 42<br />Imagination City, 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-dancing text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <span className="text-white">✦</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <span className="text-white">✧</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <span className="text-white">⋆</span>
                  </a>
                </div>
              </div>
            </DreamyCard>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <DreamyCard>
              <h2 className="text-3xl font-dancing text-primary mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <DreamyInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <DreamyInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <DreamyTextarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <DreamyButton
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </DreamyButton>
                </div>
              </form>
            </DreamyCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
