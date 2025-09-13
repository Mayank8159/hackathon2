import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://hackathon2-2-2zka.onrender.com/api/contact', formData);
      toast.success('🚨 Alert sent successfully!');
      setFormData({ name: '', email: '', location: '', message: '' });
    } catch (err) {
      toast.error('❌ Failed to send alert. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white">
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
      <div className="max-w-4xl mx-auto px-6 py-12 mt-15 space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-wide">📡 Emergency Contact</h1>
          <p className="text-white/80 text-lg">
            If you're experiencing or witnessing a natural calamity, please reach out immediately.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 ring-1 ring-white/10 space-y-6"
        >
          {['name', 'email', 'location', 'message'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-white/80 capitalize">
                {field === 'message' ? 'Describe the Situation' : field}
              </label>
              {field === 'message' ? (
                <textarea
                  id="message"
                  rows="5"
                  required
                  aria-required="true"
                  placeholder="Briefly describe the emergency..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/10 text-white placeholder-white/40 rounded-md border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  required
                  aria-required="true"
                  placeholder={
                    field === 'name'
                      ? 'John Doe'
                      : field === 'email'
                      ? 'you@example.com'
                      : 'Rajarhat, Kolkata'
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/10 text-white placeholder-white/40 rounded-md border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
          >
            🚨 Send Alert
          </button>
        </form>

        <footer className="text-center text-sm text-white/50 pt-10">
          Your safety is our priority. This form is monitored 24/7 during active alerts.
        </footer>
      </div>
    </div>
  );
};

export default Contact;