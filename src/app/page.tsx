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

  useEffect(() => {
    setIsClient(true);
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          NRW pflanzt
        </h1>
        <h2 className="text-2xl md:text-3xl text-green-600 mb-8">
          1 Million Bäume für NRW
        </h2>
        
        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            Live-Start am Freitag, 30. Mai 2025 um 18:00 Uhr
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-800">
              {timeLeft.days}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Tage
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-800">
              {timeLeft.hours}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Stunden
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-800">
              {timeLeft.minutes}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Minuten
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-800">
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Sekunden
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-green-200">
          <p className="text-lg text-gray-700 mb-4">
            Ihre Spende. Ihr Baum. Ihre soziale Nachhaltigkeit!
          </p>
          <p className="text-gray-600">
            Seien Sie dabei, wenn wir gemeinsam 1 Million Bäume für Nordrhein-Westfalen pflanzen.
          </p>
        </div>
      </div>
    </div>
  );
}
