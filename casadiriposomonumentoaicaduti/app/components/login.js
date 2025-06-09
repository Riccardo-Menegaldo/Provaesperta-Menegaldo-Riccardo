"use client";
import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Inserisci username e password.");
      return;
    }
    setError("");
    if (onLogin) {
      onLogin({ username, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        <div className="flex flex-col items-center mb-8">
          {/* Logo rimosso */}
          <h2 className="text-3xl font-extrabold text-red-700 mb-1 tracking-tight">
            Area Riservata
          </h2>
          <p className="text-gray-500 text-sm">Accedi con le tue credenziali</p>
        </div>
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded py-2 px-3">
            {error}
          </div>
        )}
        <div className="mb-5">
          <label className="block mb-2 font-semibold text-gray-700" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <input
              id="username"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              placeholder="Inserisci username"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="mb-7">
          <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Inserisci password"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-400 transition"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Nascondi password" : "Mostra password"}
            >
              {showPassword ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c1.657 0 3.234.336 4.675.938M21.542 12c-1.274 4.057-5.065 7-9.542 7-1.657 0-3.234-.336-4.675-.938" />
                  <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth={2} />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-400 text-white py-2.5 rounded-lg font-semibold text-lg shadow hover:from-red-700 hover:to-red-500 transition"
        >
          Accedi
        </button>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-red-500 hover:underline transition"
            tabIndex={-1}
            onClick={e => e.preventDefault()}
          >
            Password dimenticata?
          </a>
        </div>
      </form>
    </div>
  );
}
