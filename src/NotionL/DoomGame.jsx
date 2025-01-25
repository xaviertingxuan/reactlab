import React, { useEffect, useRef, useState } from 'react';

export const DoomGame = () => {
    const canvasRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
    
        const player = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            angle: 0,
            speed: 5
        };
    
        const gameLoop = () => {
            // Clear canvas
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Draw player
            ctx.fillStyle = '#f00';
            ctx.beginPath();
            ctx.arc(player.x, player.y, 10, 0, Math.PI * 2);
            ctx.fill();
    
            animationFrameId = requestAnimationFrame(gameLoop);
        };
    
        // Start the game loop immediately
        gameLoop();
    
        const handleKeyDown = (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    player.y -= player.speed;
                    break;
                case 'ArrowDown':
                    player.y += player.speed;
                    break;
                case 'ArrowLeft':
                    player.x -= player.speed;
                    break;
                case 'ArrowRight':
                    player.x += player.speed;
                    break;
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);  // Remove isPlaying dependency

    return (
        <div className="doom-game">
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="game-toggle"
            >
                {isPlaying ? 'Pause Game' : 'Play Game'}
            </button>
            <canvas 
                ref={canvasRef} 
                width={800} 
                height={400}
                className="game-canvas"
            />
        </div>
    );
};