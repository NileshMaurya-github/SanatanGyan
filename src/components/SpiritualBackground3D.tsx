import React from 'react';

export const SpiritualBackground3D: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Animated Sanskrit Om Symbols floating in 3D space */}
            <div className="absolute top-10 left-10 text-8xl text-primary/5 animate-om-spin float-3d">
                ॐ
            </div>
            <div className="absolute top-1/4 right-1/4 text-6xl text-accent/10 animate-om-spin rotate-3d" style={{ animationDelay: '2s', animationDuration: '45s' }}>
                ॐ
            </div>
            <div className="absolute bottom-1/3 left-1/3 text-7xl text-primary/8 animate-om-spin float-3d" style={{ animationDelay: '4s', animationDuration: '50s' }}>
                ॐ
            </div>
            <div className="absolute top-2/3 right-1/3 text-9xl text-accent/5 rotate-3d" style={{ animationDelay: '1s', animationDuration: '55s' }}>
                ॐ
            </div>

            {/* Floating lotus petals */}
            <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-saffron opacity-10 blur-xl animate-float-slow"></div>
            <div className="absolute bottom-32 left-24 w-20 h-20 rounded-full bg-gradient-divine opacity-15 blur-xl animate-float float-3d" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 left-10 w-12 h-12 rounded-full bg-primary/10 blur-lg animate-divine-pulse"></div>

            {/* Sacred geometry circles */}
            <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full border-2 border-primary/10 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full border border-accent/15 animate-float-slow"></div>

            {/* Spiritual glow orbs */}
            <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-gradient-cosmic animate-divine-pulse glow-divine"></div>
            <div className="absolute bottom-1/4 right-1/2 w-32 h-32 rounded-full bg-gradient-saffron opacity-20 blur-3xl animate-float"></div>
        </div>
    );
};

export default SpiritualBackground3D;
