'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-05-30T18:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent mx-auto shadow-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-green-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-80 h-80 bg-gradient-to-tl from-teal-200/30 to-emerald-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className={`text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-1 shadow-2xl animate-pulse-glow">
                <div className="bg-white rounded-full p-4">
                  <svg className="w-12 h-12 text-emerald-600 animate-bounce-gentle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-700 to-green-800 bg-clip-text text-transparent animate-gradient-x">
                NRW pflanzt
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light animate-fade-in-up" style={{animationDelay: '300ms'}}>
              1 Million Bäume für Nordrhein-Westfalen
            </p>
            <div className="inline-block bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60 rounded-2xl px-10 py-5 shadow-xl animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105" style={{animationDelay: '600ms'}}>
              <p className="text-emerald-800 font-semibold text-xl">
                Live-Start: <span className="font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">Freitag, 30. Mai 2025 um 18:00 Uhr</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Countdown Section */}
        <div className={`bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-12 mb-12 relative overflow-hidden transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '900ms'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-emerald-50/30 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-200/40 to-green-200/30 rounded-full blur-2xl animate-pulse-slow"></div>
          
          <div className="relative">
    
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: timeLeft.days, label: 'Tage', color: 'from-emerald-500 to-green-600' },
                { value: timeLeft.hours, label: 'Stunden', color: 'from-green-500 to-teal-600' },
                { value: timeLeft.minutes, label: 'Minuten', color: 'from-teal-500 to-emerald-600' },
                { value: timeLeft.seconds, label: 'Sekunden', color: 'from-emerald-600 to-green-600' }
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className={`text-center group transform transition-all duration-700 hover:scale-110 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${1200 + index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white via-gray-50/80 to-emerald-50/50 border border-gray-200/60 rounded-3xl p-8 mb-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm group-hover:border-emerald-300/50 relative overflow-hidden">
                      
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        <div className={`text-5xl md:text-7xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent font-mono transition-all duration-300 group-hover:scale-105`}>
                          {String(item.value).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm md:text-base font-bold text-gray-600 uppercase tracking-widest group-hover:text-emerald-700 transition-colors duration-300">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className={`bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-12 relative overflow-hidden transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '1800ms'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-green-50/30 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-green-200/40 to-emerald-200/30 rounded-full blur-2xl animate-pulse-slow"></div>
          
          <div className="relative">
            <div className="text-center mb-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                  Ihre Spende. Ihr Baum.
                </span>
                <br />
                <span className="text-gray-800">Ihre soziale Nachhaltigkeit.</span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                Werden Sie Teil einer einzigartigen Initiative für den Klimaschutz in Nordrhein-Westfalen. 
                Gemeinsam pflanzen wir 1 Million Bäume für eine nachhaltige Zukunft.
              </p>
            </div>
            
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 mt-12 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '2100ms'}}>
          {[
            { number: '1M', label: 'Bäume geplant', icon: '🌳', gradient: 'from-emerald-500 to-green-600' },
            { number: '17.9M', label: 'Einwohner NRW', icon: '👥', gradient: 'from-green-500 to-teal-600' },
            { number: '100%', label: 'Nachhaltigkeit', icon: '♻️', gradient: 'from-teal-500 to-emerald-600' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 group transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{transitionDelay: `${2400 + index * 150}ms`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold text-lg group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


      </main>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(180deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) opacity(0.7); }
          50% { transform: translateY(-100px) opacity(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 8s ease-in-out infinite; background-size: 200% 200%; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}
