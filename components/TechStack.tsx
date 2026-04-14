"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Matter from "matter-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" },
  { name: "Solana", icon: "https://cdn.simpleicons.org/solana/14F195" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sphereRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !canvasRef.current) return;
    
    const engine = Matter.Engine.create();
    // Start with negative gravity so they stick to the top
    engine.world.gravity.y = -0.5;

    const render = Matter.Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1
      }
    });

    const runner = Matter.Runner.create();

    let boundaries: Matter.Body[] = [];
    let isUnmounted = false;

    const setupBoundaries = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      // Clear old boundaries smoothly if this is a resize
      if (boundaries.length > 0) {
        Matter.World.remove(engine.world, boundaries);
      }

      const floor = Matter.Bodies.rectangle(width / 2, height + 50, width * 2, 100, { isStatic: true });
      const ceiling = Matter.Bodies.rectangle(width / 2, -50, width * 2, 100, { isStatic: true });
      const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height * 2, { isStatic: true });
      const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height * 2, { isStatic: true });

      boundaries = [floor, ceiling, leftWall, rightWall];
      Matter.World.add(engine.world, boundaries);
    };

    // Initial boundary setup
    setupBoundaries();

    // Create spheres
    const radius = window.innerWidth > 768 ? 50 : 35; // Responsive radius
    const bodies = technologies.map(() => {
      const width = containerRef.current!.clientWidth;
      const height = containerRef.current!.clientHeight;
      // Spawn at bottom so they float UP to the ceiling dynamically
      const x = (width / 2) + (Math.random() - 0.5) * (width * 0.5);
      const y = height - 100 - (Math.random() * 200);
      
      return Matter.Bodies.circle(x, y, radius, {
        restitution: 0.8, // Bouncy
        friction: 0.1,
        frictionAir: 0.01,
        render: { visible: false } // We render DOM instead of canvas drawings
      });
    });

    Matter.World.add(engine.world, bodies);

    // Mouse constraint for interaction
    const mouse = Matter.Mouse.create(render.canvas);

    // Stop Matter.js from swallowing mouse wheel events so the user can scroll normally
    const mouseEvents = mouse as unknown as Record<string, EventListener>;
    render.canvas.removeEventListener('wheel', mouseEvents.mousewheel);
    render.canvas.removeEventListener('mousewheel', mouseEvents.mousewheel);
    render.canvas.removeEventListener('DOMMouseScroll', mouseEvents.mousewheel);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    // Important to fix mouse offset on high-density displays
    if (typeof window !== 'undefined') {
        Matter.Mouse.setScale(mouse, { x: 1 / window.devicePixelRatio, y: 1 / window.devicePixelRatio });
    }

    Matter.World.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render); // We still run this so mouse constraints update properly

    // Animation loop to map Matter.js bodies exactly to React DOM elements
    const tick = () => {
      if (isUnmounted) return;
      bodies.forEach((body, index) => {
        const domElement = sphereRefs.current[index];
        if (domElement) {
          // Adjust translation subtracting radius to perfectly center the div physically
          domElement.style.transform = `translate(${body.position.x - radius}px, ${body.position.y - radius}px) rotate(${body.angle}rad)`;
        }
      });
      requestAnimationFrame(tick);
    };
    const animId = requestAnimationFrame(tick);

    // GSAP ScrollTrigger for flipping gravity
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%", // When the top of the container hits 50% of screen
      onEnter: () => {
        gsap.to(engine.world.gravity, { y: 1, duration: 1, ease: "power2.out" }); // Animate gravity flip smoothly
      },
      onLeaveBack: () => {
        gsap.to(engine.world.gravity, { y: -0.5, duration: 1, ease: "power2.out" });
      }
    });

    // Pause physics if out of view for massive performance gains on low-end devices
    const stVisibility = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom", 
      end: "bottom top",
      onEnter: () => Matter.Runner.run(runner, engine), 
      onLeave: () => Matter.Runner.stop(runner),           
      onEnterBack: () => Matter.Runner.run(runner, engine),
      onLeaveBack: () => Matter.Runner.stop(runner),       
    });

    // Clean Resizer
    const handleResize = () => {
      if (!containerRef.current) return;
      render.canvas.width = containerRef.current.clientWidth;
      render.canvas.height = containerRef.current.clientHeight;
      if (typeof window !== 'undefined') {
        render.options.pixelRatio = window.devicePixelRatio;
        Matter.Mouse.setScale(mouse, { x: 1 / window.devicePixelRatio, y: 1 / window.devicePixelRatio });
      }
      setupBoundaries();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isUnmounted = true;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      st.kill();
      stVisibility.kill();
    };
  }, []);

  return (
    <section className="bg-neutral-900 overflow-hidden flex flex-col items-center py-20 relative border-y border-neutral-800">
      <div className="mb-4 text-center w-full z-10 pointer-events-none">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
          Expertise in Cutting-Edge Tech Stack
        </h2>
        <p className="text-xs text-neutral-500 mt-2">Interact, Drag & Toss</p>
      </div>

      {/* Constraints container specifically computed for responsive bounds */}
      <div 
        ref={containerRef} 
        className="relative w-[95%] sm:w-[90%] md:w-[85%] h-[75vh] mx-auto bg-neutral-950 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl mt-8"
      >
        {/* The transparent canvas for mouse interactions & physics sizing */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-20 cursor-grab active:cursor-grabbing"
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* The 3D CSS Spheres mapped dynamically to the Physics Engine */}
        {technologies.map((tech, i) => (
          <div
            key={tech.name}
            ref={(el) => { sphereRefs.current[i] = el; }}
            className="absolute top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-10 border border-white/10"
            style={{
              width: "100px",
              height: "100px",
              background: "radial-gradient(circle at 35% 35%, #2a2a30, #09090b)",
              boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), inset 10px 10px 20px rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            <div className="w-12 h-12 relative flex items-center justify-center p-1" title={tech.name}>
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                fill
                unoptimized
                className={`object-contain p-1 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] pointer-events-none ${tech.name === "Next.js" || tech.name === "AWS" || tech.name === "Express" || tech.name === "GitHub" ? "invert opacity-100 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" : ""}`} 
              />
            </div>
            {/* Glossy specular highlight */}
            <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[2px]" />
          </div>
        ))}

        {/* Small inner box shadow for depth */}
        <div className="absolute inset-0 z-30 pointer-events-none rounded-[3rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />
      </div>
    </section>
  );
}
