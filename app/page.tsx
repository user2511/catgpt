"use client"; // This is a client component 
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dpsmhtzwoircangjjglv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc21odHp3b2lyY2FuZ2pqZ2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NzEwMTcsImV4cCI6MjAyOTI0NzAxN30.5QVGHZDUn8Uf-t8ssAK125qsEonuIpjIXmlObbx2RvE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State variable to store authentication errors

  const handleSignUp = async () => {
    try {
      setError(null); // Clear any previous errors
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      console.log(user);
      // Redirect or show success message
    } catch (error) {
      console.error('Sign up error:', error.message);
      setError(error.message); // Set error state
    }
  };

  const handleLogin = async () => {
    try {
      setError(null); // Clear any previous errors
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      console.log(user);
      // Redirect or show success message
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message); // Set error state
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('User logged out successfully');
      // Redirect or show success message
    } catch (error) {
      console.error('Logout error:', error.message);
      setError(error.message); // Set error state
    }
  };

  return (
    <div>
      {/* Sign up form */}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>

      {/* Login form */}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Log In</button>

      {/* Logout button */}
      <button onClick={handleLogout}>Log Out</button>

      {/* Error message */}
      {error && <p>{error}</p>}
    </div>
  );
}