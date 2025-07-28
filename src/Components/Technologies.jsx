import React, { useState, useEffect } from "react";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiJquery,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiFlask,
  SiKubernetes,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiSelenium,
  SiJest,
} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { FaNode, FaAws, FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { DiDjango, DiDocker } from "react-icons/di";

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    { Icon: RiReactjsLine, name: "React", category: "frontend" },
    { Icon: SiTypescript, name: "TypeScript", category: "language" },
    { Icon: RiNextjsLine, name: "Next.js", category: "frontend" },
    { Icon: SiJavascript, name: "JavaScript", category: "language" },
    { Icon: TiHtml5, name: "HTML5", category: "frontend" },
    { Icon: FaCss3Alt, name: "CSS3", category: "frontend" },
    { Icon: RiTailwindCssFill, name: "Tailwind", category: "frontend" },
    { Icon: AiOutlinePython, name: "Python", category: "language" },
    { Icon: FaNode, name: "Node.js", category: "backend" },
    { Icon: SiExpress, name: "Express", category: "backend" },
    { Icon: DiDjango, name: "Django", category: "backend" },
    { Icon: SiFlask, name: "Flask", category: "backend" },
    { Icon: SiRedux, name: "Redux", category: "state" },
    { Icon: SiMongodb, name: "MongoDB", category: "database" },
    { Icon: SiMysql, name: "MySQL", category: "database" },
    { Icon: SiPostgresql, name: "PostgreSQL", category: "database" },
    { Icon: SiSupabase, name: "Supabase", category: "database" },
    { Icon: SiFirebase, name: "Firebase", category: "database" },
    { Icon: FaAws, name: "AWS", category: "cloud" },
    { Icon: DiDocker, name: "Docker", category: "devops" },
    { Icon: SiKubernetes, name: "Kubernetes", category: "devops" },
    { Icon: SiPostman, name: "Postman", category: "testing" },
    { Icon: SiSelenium, name: "Selenium", category: "testing" },
    { Icon: SiJest, name: "Jest", category: "testing" },
    { Icon: SiJquery, name: "jQuery", category: "frontend" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      frontend: "text-blue-400",
      backend: "text-green-400",
      language: "text-purple-400",
      database: "text-amber-400",
      cloud: "text-orange-400",
      devops: "text-cyan-400",
      testing: "text-red-400",
      state: "text-pink-400",
    };
    return colors[category] || "text-gray-400";
  };

  const getCategoryGlow = (category) => {
    const glows = {
      frontend: "shadow-blue-500/20",
      backend: "shadow-green-500/20",
      language: "shadow-purple-500/20",
      database: "shadow-amber-500/20",
      cloud: "shadow-orange-500/20",
      devops: "shadow-cyan-500/20",
      testing: "shadow-red-500/20",
      state: "shadow-pink-500/20",
    };
    return glows[category] || "shadow-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Technologies
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Tools and frameworks I work with
          </p>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4">
            {technologies.map(({ Icon, name, category }, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`
                    relative aspect-square p-4 rounded-xl
                    bg-white/80 dark:bg-gray-800/50 
                    border border-gray-200/50 dark:border-gray-700/50
                    backdrop-blur-sm
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:-translate-y-1
                    hover:bg-white dark:hover:bg-gray-800
                    hover:border-gray-300 dark:hover:border-gray-600
                    hover:shadow-xl ${
                      hoveredIndex === index ? getCategoryGlow(category) : ""
                    }
                    cursor-pointer
                  `}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center h-full">
                    <Icon
                      className={`
                        text-2xl md:text-3xl transition-colors duration-300
                        ${
                          hoveredIndex === index
                            ? getCategoryColor(category)
                            : "text-gray-500 dark:text-gray-400"
                        }
                      `}
                    />
                  </div>

                  {/* Subtle hover indicator */}
                  <div
                    className={`
                      absolute bottom-1 left-1/2 transform -translate-x-1/2
                      w-6 h-0.5 rounded-full transition-all duration-300
                      ${
                        hoveredIndex === index
                          ? `${getCategoryColor(category).replace(
                              "text",
                              "bg"
                            )} opacity-100`
                          : "bg-gray-300 dark:bg-gray-600 opacity-0"
                      }
                    `}
                  />
                </div>

                {/* Tooltip */}
                <div
                  className={`
                    absolute -bottom-10 left-1/2 transform -translate-x-1/2
                    px-3 py-1.5 rounded-lg text-xs font-medium
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900
                    whitespace-nowrap shadow-lg z-10
                    transition-all duration-200
                    ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }
                  `}
                >
                  {name}
                  {/* Tooltip arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Legend */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { category: "frontend", label: "Frontend" },
              { category: "backend", label: "Backend" },
              { category: "language", label: "Languages" },
              { category: "database", label: "Database" },
              { category: "cloud", label: "Cloud" },
              { category: "devops", label: "DevOps" },
              { category: "testing", label: "Testing" },
              { category: "state", label: "State Management" },
            ].map(({ category, label }) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${getCategoryColor(
                    category
                  ).replace("text", "bg")}`}
                ></div>
                <span className="text-gray-600 dark:text-gray-400 font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
