import React, { useState, useEffect, useRef } from "react";
import logo1 from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const [logoPositions, setLogoPositions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const profileRef = useRef(null);

  const skills = [
    { name: "React", icon: "Welcome", color: "from-blue-500 to-cyan-400" },
    { name: "Python", icon: "HI", color: "from-green-500 to-blue-400" },
    { name: "JavaScript", icon: "T0", color: "from-yellow-500 to-amber-400" },
    { name: "Node.js", icon: "MY", color: "from-green-600 to-emerald-400" },
    {
      name: "MongoDB",
      icon: "Universe",
      color: "from-green-500 to-emerald-400",
    },
    { name: "AWS", icon: "🤝 ", color: "from-orange-500 to-red-400" },
  ];

  // Your existing useEffect animation code remains the same until the return section

  return (
    <div
      ref={containerRef}
      className="bg-neutral-950 text-white py-16 min-h-screen flex items-center overflow-hidden relative"
    >
      {/* Moving Skill Logos - same as before */}
      {logoPositions.map((logo) => (
        <div
          key={logo.id}
          className="absolute z-10"
          style={{
            transform: `translate(${logo.x}px, ${logo.y}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${logo.skill.color} p-0.5 animate-pulse shadow-lg`}
          >
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
              <span className="text-2xl">{logo.skill.icon}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-0">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {/* Left Content - Same as before */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-6xl font-thin tracking-tight mb-4 text-white"
              >
                Sai Prakash
              </motion.h1>

              <span className="">
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
                >
                  Full Stack Developer
                </motion.h3>
              </span>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.5 }}
                className="max-w-xl text-neutral-300 text-lg"
              >
                Hey everyone! Out of 9.2 million full-stack developers across
                the globe, I'm proud to be one of them building, creating, and
                innovating every day!
              </motion.p>
            </div>
          </div>

          {/* Enhanced Profile Image with animations */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              ref={profileRef}
              className="relative mx-auto w-80 h-80"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={
                isHovered
                  ? {
                      scale: [1, 1.05, 1.02],
                      rotateY: [0, 10, -10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75 blur-xl"
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }
                    : {}
                }
              />
              <motion.div
                className="w-full h-full rounded-full border-4 border-purple-500 overflow-hidden shadow-2xl shadow-purple-500/20 relative z-10"
                whileHover={{
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
                }}
              >
                <motion.img
                  src={logo1}
                  alt="logo1"
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.05, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                      : {}
                  }
                />
              </motion.div>

              {/* Orbiting particles */}
              {isHovered &&
                Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: 360,
                      x: Math.cos(i * 45) * 100,
                      y: Math.sin(i * 45) * 100,
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
