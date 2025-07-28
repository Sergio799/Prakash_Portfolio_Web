import React, { useState, useEffect, useRef } from "react";
import ResumeButton from "./ResumeButton"; // Adjust the import based on your file structure

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const experiences = [
    {
      id: 3,
      title: "Full Stack Developer Intern",
      location: "Sports Excitement, New York",
      type: "work",
      description:
        "Developed dynamic, responsive web pages using Next.js, Tailwind CSS, and Redux, ensuring performance optimization, accessibility, and a mobile-first design approach. Collaborated with design and product teams to transform wireframes and user flows into intuitive, visually consistent interfaces. Built and integrated RESTful APIs to support smooth client-server communication and feature extensibility.",
    },
    {
      id: 2,
      title: "Graduate Teaching Assistant @ UNCC",
      location: "(Contract)",
      type: "work",
      description:
        "As a Teaching Assistant for Logic and Algorithms, I assist in providing academic support to students, fostering a deeper understanding of logical reasoning, algorithms, and problem-solving techniques. I guide students through assignments, grading, and conducting office hours for additional help. Collaborating with the professor, I ensure course materials are delivered effectively and concepts are thoroughly understood.",
    },
    {
      id: 1,
      title: "Master's of Science in Information Technology @ UNCC",
      location: "",
      type: "education",
      description:
        "Pursuing a Master's degree at UNC Charlotte is a pivotal step toward achieving my career aspirations and advancing my expertise in Information Technology. UNC Charlotte's renowned faculty, cutting-edge research facilities, and industry-aligned curriculum offer the ideal environment to deepen my technical knowledge and develop innovative solutions to complex challenges, which aligns perfectly with my interests in development.",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      location: "Accenture, India",
      type: "work",
      description:
        "Engineered custom web applications to streamline workflows and enhance operational efficiency, serving 200+ end-users with 99.9% uptime. Resolved critical system issues, reducing downtime by 30%, and developed advanced applications to boost user satisfaction by 40%. Designed scalable middleware solutions with Node.js, AWS EC2, and MySQL, optimizing performance for high-traffic environments.",
    },
  ];

  // Skills data
  const skills = [
    "Python",
    "React.js",
    "JavaScript",
    "SQL",
    "Node.js",
    "AWS",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "MySQL",
    "RESTful APIs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Passionate developer crafting digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm p-8 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                As a Software Engineer with a deep-rooted passion for
                problem-solving and innovation, I’ve honed my skills across
                various domains—from crafting intuitive user interfaces as a
                Frontend Engineer to building robust backend systems as a
                Backend Developer. My journey includes designing scalable
                architectures, optimizing system reliability in Site Reliability
                Engineering contexts, and delivering end-to-end solutions as a
                Full Stack Developer. I thrive on transforming complex ideas
                into impactful, production-ready applications through clean,
                efficient, and maintainable code.
              </p>
            </div>
            <div className="">
              <ResumeButton />
            </div>

            {/* Skills Section */}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-12 text-center">
            Experience & Education
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
                )}

                <div className="bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 mt-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          exp.type === "education"
                            ? "bg-green-400"
                            : "bg-blue-400"
                        }`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-3">
                        <h3 className="text-gray-900 dark:text-white text-lg font-medium">
                          {exp.title}
                        </h3>
                        {exp.location && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {exp.location}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-light mb-4">
              Let's work together to bring your ideas to life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
