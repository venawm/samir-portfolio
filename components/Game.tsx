"use client";
import { useEffect, useState } from "react";

const GameFrame = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const gameUrl = "https://game-amber-pi.vercel.app";

  // Add error handling
  const handleIframeError = () => {
    console.error("Failed to load iframe content");
    setLoadError(true);
  };

  // Check if URL is accessible
  useEffect(() => {
    const checkUrl = async () => {
      try {
        const response = await fetch(gameUrl, {
          method: "HEAD",
          mode: "no-cors",
        });
        console.log("URL check response:", response);
      } catch (error) {
        console.error("Error checking URL:", error);
        setLoadError(true);
      }
    };

    checkUrl();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl animate-fade-in">
        <div className="mt-8 text-center w-full flex justify-center items-center">
          <h1 className="text-4xl font-bold section-title mb-8 animate-float">
            Interactive Game Demo
          </h1>
        </div>

        {/* Browser Frame */}
        <div className="rounded-xl shadow-2xl overflow-hidden bg-gray-800/40 backdrop-blur-lg border border-white/10 transform transition-all hover:scale-101 hover:shadow-3xl">
          {/* Browser Controls */}
          <div className="flex items-center px-4 py-3 bg-gray-900/80 border-b border-white/10 space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-300 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-300 cursor-pointer transition-colors" />
            </div>
            <div className="flex-1 bg-gray-700/50 rounded-lg py-1.5 px-4 text-sm text-gray-300">
              {gameUrl}
            </div>
          </div>

          {/* Iframe Container */}
          <div className="relative aspect-video bg-black/20">
            {!isLoaded && !loadError && (
              <div className="absolute inset-0 flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-400 animate-bounce" />
                <div className="w-4 h-4 rounded-full bg-indigo-400 animate-bounce delay-100" />
                <div className="w-4 h-4 rounded-full bg-pink-400 animate-bounce delay-200" />
              </div>
            )}

            {loadError ? (
              <div className="absolute inset-0 flex items-center justify-center text-red-400">
                Failed to load game. Please check the URL or try again later.
              </div>
            ) : (
              <iframe
                src={gameUrl}
                className={`w-full h-full ${
                  isLoaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                onLoad={() => setIsLoaded(true)}
                onError={handleIframeError}
                title="Game Demo"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900/80 border-t border-white/10">
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isLoaded ? "bg-green-400" : "bg-red-400"
                  } animate-pulse`}
                />
                <span>{isLoaded ? "Connected" : "Connecting..."}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFrame;
