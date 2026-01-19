"use client";

import { useEffect, useRef } from "react";

export default function SakuraBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const petals: Petal[] = [];
        const petalCount = 40; // Adjust for density

        class Petal {
            x: number;
            y: number;
            size: number;
            speed: number;
            angle: number;
            spin: number;
            type: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height; // Start above screen
                this.size = Math.random() * 5 + 5;
                this.speed = Math.random() * 1 + 0.5;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = Math.random() * 0.02 - 0.01;
                this.type = Math.floor(Math.random() * 3); // 3 variations
            }

            update() {
                this.y += this.speed;
                this.x += Math.sin(this.angle) * 0.5;
                this.angle += this.spin;

                if (this.y > height) {
                    this.y = -20;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.fillStyle = "rgba(255, 183, 197, 0.6)"; // #ffb7c5
                ctx.beginPath();

                // Simple oval petal shape
                ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);

                ctx.fill();
                ctx.restore();
            }
        }

        // Initialize petals
        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal());
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            petals.forEach((petal) => {
                petal.update();
                petal.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Handle Resize
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
        />
    );
}
