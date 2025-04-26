
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { DreamyInput, DreamyButton } from '@/components/ui/DreamyCard';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error is handled in the auth context
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email
        </label>
        <DreamyInput
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
          Password
        </label>
        <DreamyInput
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded bg-dreamBlue border-dreamTeal/50 text-primary focus:ring-dreamTeal/50"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="text-dreamTeal hover:text-dreamTeal-light">
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <DreamyButton
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </DreamyButton>
      </div>

      <div className="text-center text-sm text-white/70">
        Don't have an account?{' '}
        <Link to="/signup" className="text-dreamTeal hover:text-dreamTeal-light">
          Sign up
        </Link>
      </div>
    </form>
  );
};

interface SignupFormProps {
  onSuccess?: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    setPasswordError('');
    
    try {
      await signup(name, email, password);
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error is handled in the auth context
    }
  };

  return (
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
          Password
        </label>
        <DreamyInput
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-2">
          Confirm Password
        </label>
        <DreamyInput
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {passwordError && <p className="mt-2 text-sm text-destructive">{passwordError}</p>}
      </div>

      <div>
        <DreamyButton
          type="submit"
          variant="accent"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </DreamyButton>
      </div>

      <div className="text-center text-sm text-white/70">
        Already have an account?{' '}
        <Link to="/login" className="text-dreamTeal hover:text-dreamTeal-light">
          Sign in
        </Link>
      </div>
    </form>
  );
};
