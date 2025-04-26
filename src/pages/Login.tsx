
import React from 'react';
import Layout from '@/components/common/Layout';
import { DreamyCard } from '@/components/ui/DreamyCard';
import { LoginForm } from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-dancing text-center text-primary mb-8 animate-fadeIn">
          Welcome Back
        </h1>
        
        <DreamyCard className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <LoginForm />
        </DreamyCard>
      </div>
    </Layout>
  );
};

export default Login;
