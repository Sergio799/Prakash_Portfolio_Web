// import React from "react";
// import logo3 from "../assets/ABOUT.png";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="bg-[0F162C] p-8">
//       <h1 className="text-white text-4xl font-bold mb-8">About</h1>

//       <div className="flex items-start gap-8">
//         {/* Left side - Illustration */}
//         <motion.div className="w-1/3 bg-black color">
//           <img
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 4 }}
//             src={logo3}
//             alt="logo3"
//             className='w-full relative overflow-hidden rounded-lg shadow-2xl animate-fade-in duration-1000 ease-in-out hover:scale-105 transition-transformhover:shadow-lg hover:shadow-blue-500/50"'
//           />
//         </motion.div>

//         <div className="w-2/3 space-y-6">
//           <div>
//             <div className="flex items-center gap-2"></div>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 5 }}
//               className="text-gray-400 mt-1 ml-6"
//             >
//               With a deep-rooted passion for problem-solving and innovation,
//               I’ve honed my skills in software development to transform ideas
//               into tangible solutions. My journey includes tackling complex
//               challenges, designing scalable architectures, and writing clean,
//               efficient code that drives impact. Leveraging expertise in Python,
//               React.js, JavaScript, SQL, Node.js, AWS. I thrive on creating
//               user-centric applications that blend functionality with
//               performance. Collaboration fuels my drive, enabling me to work
//               seamlessly in diverse teams. With a mindset of continuous
//               learning, I embrace cutting-edge technologies to stay ahead in
//               this dynamic field. My ultimate goal is to shape the future
//               through technology-driven excellence.
//             </motion.p>
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">→</span>
//               <h2 className="text-white text-xl font-semibold">
//                 Master's of Science in Information Technology @ UNCC
//               </h2>
//             </div>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 5.5 }}
//               className="text-gray-400 mt-1 ml-6"
//             >
//               Pursuing a Master’s degree at UNC Charlotte is a pivotal step
//               toward achieving my career aspirations and advancing my expertise
//               in Information Technology. UNC Charlotte's renowned faculty,
//               cutting-edge research facilities, and industry-aligned curriculum
//               offer the ideal environment to deepen my technical knowledge and
//               develop innovative solutions to complex challenges. which aligns
//               perfectly with my interests in development.
//             </motion.p>
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">→</span>
//               <h2 className="text-white text-xl font-semibold">
//                 Graduate Teaching Assistant @ UNCC
//               </h2>
//               <h3>(Contract)</h3>
//             </div>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 6 }}
//               className="text-gray-400 mt-1 ml-6"
//             >
//               As a Teaching Assistant for Logic and Algorithms, I assist in
//               providing academic support to students, fostering a deeper
//               understanding of logical reasoning, algorithms, and
//               problem-solving techniques. I guide students through assignments,
//               grading, and conducting office hours for additional help.
//               Collaborating with the professor, I ensure course materials are
//               delivered effectively and concepts are thoroughly understood. I
//               also help develop and refine teaching strategies to improve
//               student engagement and performance. My role involves clear
//               communication, problem-solving, and adapting materials to meet
//               students' diverse learning needs. I work to cultivate a positive
//               and productive learning environment.
//             </motion.p>
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">→</span>
//               <h2 className="text-white text-xl font-semibold">
//                 Full Stack Developer Intern
//               </h2>
//               <h3> Sports Excitement, NewYork</h3>
//             </div>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 6 }}
//               className="text-gray-400 mt-1 ml-6"
//             >
//               Developed dynamic, responsive web pages using Next.js, Tailwind
//               CSS, and Redux, ensuring performance optimization, accessibility,
//               and a mobile-first design approach.collaborated with design and
//               product teams to transform wireframes and user flows into
//               intuitive, visually consistent interfaces.Built and integrated
//               RESTful APIs to support smooth client-server communication and
//               feature extensibility.Utilized Supa base for back-end services,
//               including authentication, real-time data management, and database
//               operations.Actively contributed to both front-end and back-end
//               teams, delivering full-stack features in an agile development
//               environment.Ensured cross-browser compatibility and adherence to
//               WCAG accessibility standards, enhancing inclusivity.
//             </motion.p>
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">→</span>
//               <h2 className="text-white text-xl font-semibold">
//                 Full Stack Developer
//               </h2>
//               <h3>Accenture, india</h3>
//             </div>
//             <motion.p
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 6.5 }}
//               className="text-gray-400 mt-1 ml-6"
//             >
//               Engineered custom web applications to streamline workflows and
//               enhance operational efficiency, serving 200+ end-users with 99.9%
//               uptime. Resolved critical system issues, reducing downtime by 30%,
//               and developed advanced applications to boost user satisfaction by
//               40%. Designed scalable middleware solutions with Node.js, AWS EC2,
//               and MySQL, optimizing performance for high-traffic environments.
//               Spearheaded front-end development using React.js and JavaScript,
//               improving UI responsiveness by 35%.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;

import React, { useState, useEffect } from "react";
import logo3 from "../assets/ABOUT.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants for better performance and consistency
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  // Experience data for better maintainability
  const experiences = [
    {
      id: 1,
      title: "Master's of Science in Information Technology @ UNCC",
      location: "",
      type: "education",
      description:
        "Pursuing a Master's degree at UNC Charlotte is a pivotal step toward achieving my career aspirations and advancing my expertise in Information Technology. UNC Charlotte's renowned faculty, cutting-edge research facilities, and industry-aligned curriculum offer the ideal environment to deepen my technical knowledge and develop innovative solutions to complex challenges, which aligns perfectly with my interests in development.",
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
      id: 3,
      title: "Full Stack Developer Intern",
      location: "Sports Excitement, New York",
      type: "work",
      description:
        "Developed dynamic, responsive web pages using Next.js, Tailwind CSS, and Redux, ensuring performance optimization, accessibility, and a mobile-first design approach. Collaborated with design and product teams to transform wireframes and user flows into intuitive, visually consistent interfaces. Built and integrated RESTful APIs to support smooth client-server communication and feature extensibility.",
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
    <div className="bg-gradient-to-br from-[#0F162C] to-[#1a2332] min-h-screen p-4 md:p-8">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left side - Image */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={logo3}
                alt="Profile illustration"
                className="relative w-full max-w-sm rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                With a deep-rooted passion for problem-solving and innovation,
                I've honed my skills in software development to transform ideas
                into tangible solutions. My journey includes tackling complex
                challenges, designing scalable architectures, and writing clean,
                efficient code that drives impact.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-blue-400">🚀</span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                  )}

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4">
                      {/* Timeline dot */}
                      <div
                        className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                          exp.type === "education"
                            ? "bg-green-400 shadow-lg shadow-green-400/50"
                            : "bg-blue-400 shadow-lg shadow-blue-400/50"
                        }`}
                      ></div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <h2 className="text-white text-xl font-semibold group-hover:text-blue-300 transition-colors">
                            {exp.title}
                          </h2>
                          {exp.location && (
                            <span className="text-gray-400 text-sm bg-gray-700/50 px-2 py-1 rounded">
                              {exp.location}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-white text-2xl font-bold mb-4">
            Ready to collaborate and innovate together?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's connect and explore how we can create something amazing
            together.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

// import React, { useState, useEffect, useRef, useMemo } from "react";
// import logo3 from "../assets/ABOUT.png";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";

// const About = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [activeSection, setActiveSection] = useState(0);
//   const [imageError, setImageError] = useState(false);

//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   // Transform values for parallax effects
//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   // Memoized particles to prevent recreation on each render
//   const particles = useMemo(() =>
//     Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       delay: Math.random() * 2,
//       duration: 3 + Math.random() * 2,
//     })), []
//   );

//   // Animation variants - memoized for performance
//   const containerVariants = useMemo(() => ({
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1
//       }
//     }
//   }), []);

//   const itemVariants = useMemo(() => ({
//     hidden: { x: -50, opacity: 0, scale: 0.9 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   }), []);

//   const floatingVariants = useMemo(() => ({
//     animate: {
//       y: [-20, 20],
//       x: [-10, 10],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   }), []);

//   // Experience data - moved outside component or memoized
//   const experiences = useMemo(() => [
//     {
//       id: 1,
//       title: "Master's of Science in Information Technology @ UNCC",
//       location: "",
//       type: "education",
//       icon: "🎓",
//       color: "from-emerald-400 to-teal-500",
//       bgColor: "from-emerald-500/10 to-teal-500/10",
//       borderColor: "border-emerald-500/30",
//       description: "Pursuing a Master's degree at UNC Charlotte is a pivotal step toward achieving my career aspirations and advancing my expertise in Information Technology. UNC Charlotte's renowned faculty, cutting-edge research facilities, and industry-aligned curriculum offer the ideal environment to deepen my technical knowledge and develop innovative solutions to complex challenges."
//     },
//     {
//       id: 2,
//       title: "Graduate Teaching Assistant @ UNCC",
//       location: "(Contract)",
//       type: "work",
//       icon: "👨‍🏫",
//       color: "from-purple-400 to-pink-500",
//       bgColor: "from-purple-500/10 to-pink-500/10",
//       borderColor: "border-purple-500/30",
//       description: "As a Teaching Assistant for Logic and Algorithms, I assist in providing academic support to students, fostering a deeper understanding of logical reasoning, algorithms, and problem-solving techniques. I guide students through assignments, grading, and conducting office hours for additional help."
//     },
//     {
//       id: 3,
//       title: "Full Stack Developer Intern",
//       location: "Sports Excitement, New York",
//       type: "work",
//       icon: "💻",
//       color: "from-blue-400 to-cyan-500",
//       bgColor: "from-blue-500/10 to-cyan-500/10",
//       borderColor: "border-blue-500/30",
//       description: "Developed dynamic, responsive web pages using Next.js, Tailwind CSS, and Redux, ensuring performance optimization, accessibility, and a mobile-first design approach. Collaborated with design and product teams to transform wireframes and user flows into intuitive, visually consistent interfaces."
//     },
//     {
//       id: 4,
//       title: "Full Stack Developer",
//       location: "Accenture, India",
//       type: "work",
//       icon: "🚀",
//       color: "from-orange-400 to-red-500",
//       bgColor: "from-orange-500/10 to-red-500/10",
//       borderColor: "border-orange-500/30",
//       description: "Engineered custom web applications to streamline workflows and enhance operational efficiency, serving 200+ end-users with 99.9% uptime. Resolved critical system issues, reducing downtime by 30%, and developed advanced applications to boost user satisfaction by 40%."
//     }
//   ], []);

//   // Skills with categories - memoized
//   const skillCategories = useMemo(() => ({
//     "Frontend": {
//       skills: [
//         { name: "React.js", level: 90, icon: "⚛️" },
//         { name: "JavaScript", level: 85, icon: "🟨" },
//         { name: "Next.js", level: 80, icon: "▲" },
//         { name: "Tailwind CSS", level: 88, icon: "🎨" }
//       ],
//       color: "from-blue-400 to-cyan-500"
//     },
//     "Backend": {
//       skills: [
//         { name: "Node.js", level: 85, icon: "🟢" },
//         { name: "Python", level: 90, icon: "🐍" },
//         { name: "SQL", level: 80, icon: "🗄️" },
//         { name: "RESTful APIs", level: 85, icon: "🔗" }
//       ],
//       color: "from-green-400 to-emerald-500"
//     },
//     "Cloud & Tools": {
//       skills: [
//         { name: "AWS", level: 75, icon: "☁️" },
//         { name: "MySQL", level: 80, icon: "🐬" },
//         { name: "Redux", level: 78, icon: "🔄" }
//       ],
//       color: "from-purple-400 to-pink-500"
//     }
//   }), []);

//   // Stats data - memoized
//   const stats = useMemo(() => [
//     { number: "200+", label: "Users Served", icon: "👥" },
//     { number: "99.9%", label: "Uptime", icon: "⚡" },
//     { number: "30%", label: "Reduced Downtime", icon: "📈" },
//     { number: "40%", label: "User Satisfaction", icon: "😊" }
//   ], []);

//   // Error boundary for image loading
//   const handleImageError = () => {
//     setImageError(true);
//   };

//   // Optimized particle component to prevent rerenders
//   const ParticleElement = React.memo(({ particle }) => (
//     <motion.div
//       className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
//       style={{
//         left: `${particle.x}%`,
//         top: `${particle.y}%`,
//       }}
//       animate={{
//         y: [-20, 20],
//         opacity: [0.3, 0.8, 0.3],
//         scale: [1, 1.5, 1],
//       }}
//       transition={{
//         duration: particle.duration,
//         repeat: Infinity,
//         delay: particle.delay,
//         ease: "easeInOut",
//       }}
//     />
//   ));

//   // Optimized skill component
//   const SkillItem = React.memo(({ skill, category, data, skillIndex, categoryIndex }) => {
//     const skillKey = `${category}-${skill.name}`;

//     return (
//       <motion.div
//         className="relative group"
//         onHoverStart={() => setHoveredSkill(skillKey)}
//         onHoverEnd={() => setHoveredSkill(null)}
//         whileHover={{ scale: 1.02 }}
//       >
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center gap-2">
//             <span className="text-lg">{skill.icon}</span>
//             <span className="text-white font-medium">{skill.name}</span>
//           <span className="text-sm text-gray-400">{skill.level}%</span>
//         </div>

//         <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
//           <motion.div
//             className={`absolute left-0 top-0 h-full bg-gradient-to-r ${data.color} rounded-full`}
//             initial={{ width: 0 }}
//             animate={{
//               width: isInView ? `${skill.level}%` : 0,
//               boxShadow: hoveredSkill === skillKey
//                 ? '0 0 20px rgba(59, 130, 246, 0.5)'
//                 : '0 0 0px rgba(59, 130, 246, 0)'
//             }}
//             transition={{
//               duration: 1,
//               delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
//               boxShadow: { duration: 0.3 }
//             }}
//           />
//         </div>
//       </motion.div>
//     );
//   });

//   return (
//     <div className="relative bg-gradient-to-br from-[#0F162C] via-[#1a2332] to-[#0F162C] min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Floating Particles */}
//         {particles.map((particle) => (
//           <ParticleElement key={particle.id} particle={particle} />
//         ))}

//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />
//       </div>

//       <motion.div
//         ref={containerRef}
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="relative z-10 max-w-7xl mx-auto p-4 md:p-8"
//         style={{ opacity }}
//       >
//         {/* Header */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <motion.div
//             className="inline-block"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               About Me
//             </h1>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               animate={isInView ? { width: 128 } : { width: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             />
//           </motion.div>

//           <motion.p
//             className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 1 }}
//           >
//             Transforming ideas into digital reality through code and creativity
//           </motion.p>
//         </motion.div>

//         <div className="flex flex-col xl:flex-row items-start gap-12">
//           {/* Left side - Image Section */}
//           <motion.div
//             className="w-full xl:w-1/3 flex flex-col items-center space-y-8"
//             style={{ y: y1 }}
//           >
//             {/* Profile Image */}
//             <motion.div
//               className="relative group"
//               variants={floatingVariants}
//               animate={isInView ? "animate" : ""}
//             >
//               <motion.div
//                 className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
//                 animate={isInView ? { rotate: 360 } : { rotate: 0 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               />

//               <div className="relative">
//                 <motion.div
//                   className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"
//                   animate={isInView ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
//                   transition={{ duration: 6, repeat: Infinity }}
//                 />

//                 {!imageError ? (
//                   <img
//                     src={logo3}
//                     alt="Profile illustration"
//                     className="relative w-full max-w-sm rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 group-hover:shadow-blue-500/25"
//                     loading="lazy"
//                     onError={handleImageError}
//                   />
//                 ) : (
//                   <div className="relative w-full max-w-sm h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center text-gray-400">
//                     <div className="text-center">
//                       <div className="text-6xl mb-4">👨‍💻</div>
//                       <p>Profile Image</p>
//                     </div>
//                   </div>
//                 )}

//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
//                     <span className="text-4xl">💻</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Stats Cards */}
//             <motion.div
//               className="grid grid-cols-2 gap-4 w-full max-w-sm"
//               variants={itemVariants}
//             >
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={`${stat.label}-${index}`}
//                   className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ delay: index * 0.1 + 1 }}
//                 >
//                   <div className="text-2xl mb-1">{stat.icon}</div>
//                   <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
//                   <div className="text-xs text-gray-400">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right side - Content */}
//           <motion.div
//             className="w-full xl:w-2/3 space-y-10"
//             style={{ y: y2 }}
//           >
//             {/* Introduction */}
//             <motion.div
//               variants={itemVariants}
//               className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl" />
//               <motion.h3
//                 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <span className="text-3xl">🚀</span>
//                 My Journey
//               </motion.h3>
//               <p className="text-gray-300 text-lg leading-relaxed relative z-10">
//                 With a deep-rooted passion for problem-solving and innovation,
//                 I've honed my skills in software development to transform ideas
//                 into tangible solutions. My journey includes tackling complex
//                 challenges, designing scalable architectures, and writing clean,
//                 efficient code that drives impact.
//               </p>
//             </motion.div>

//             {/* Skills Section */}
//             <motion.div variants={itemVariants}>
//               <h3 className="text-3xl font-bold text-white mb-8 text-center">
//                 Technical Arsenal
//               </h3>
//               <div className="space-y-8">
//                 {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
//                   <motion.div
//                     key={category}
//                     className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//                     transition={{ delay: categoryIndex * 0.2 }}
//                   >
//                     <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
//                       {category}
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {data.skills.map((skill, skillIndex) => (
//                         <SkillItem
//                           key={`${category}-${skill.name}`}
//                           skill={skill}
//                           category={category}
//                           data={data}
//                           skillIndex={skillIndex}
//                           categoryIndex={categoryIndex}
//                         />
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Experience Timeline */}
//             <motion.div variants={itemVariants}>
//               <h3 className="text-3xl font-bold text-white mb-8 text-center">
//                 Professional Timeline
//               </h3>
//               <div className="relative space-y-8">
//                 <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

//                 {experiences.map((exp, index) => (
//                   <motion.div
//                     key={exp.id}
//                     className="relative group"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//                     transition={{ delay: index * 0.2 + 0.5 }}
//                     onHoverStart={() => setActiveSection(exp.id)}
//                     onHoverEnd={() => setActiveSection(0)}
//                   >
//                     <motion.div
//                       className={`absolute left-6 w-5 h-5 bg-gradient-to-r ${exp.color} rounded-full border-4 border-gray-900 z-10`}
//                       whileHover={{ scale: 1.5 }}
//                       animate={{
//                         boxShadow: activeSection === exp.id
//                           ? '0 0 20px rgba(59, 130, 246, 0.8)'
//                           : '0 0 0px rgba(59, 130, 246, 0)'
//                       }}
//                     />

//                     <div className="ml-16">
//                       <motion.div
//                         className={`bg-gradient-to-br ${exp.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${exp.borderColor} hover:border-opacity-100 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden`}
//                         whileHover={{ scale: 1.02, x: 10 }}
//                       >
//                         <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
//                           <div className="text-6xl">{exp.icon}</div>
//                         </div>

//                         <div className="relative z-10">
//                           <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
//                             <div className="flex items-center gap-3">
//                               <span className="text-2xl">{exp.icon}</span>
//                               <h2 className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
//                                 {exp.title}
//                               </h2>
//                             </div>
//                             {exp.location && (
//                               <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
//                                 {exp.location}
//                               </span>
//                             )}
//                           </div>
//                           <p className="text-gray-300 leading-relaxed">
//                             {exp.description}
//                           </p>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Footer CTA */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-20 relative"
//         >
//           <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-gray-700/50 text-center overflow-hidden relative">
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
//               animate={isInView ? {
//                 background: [
//                   "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
//                   "linear-gradient(to right, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))",
//                   "linear-gradient(to right, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
//                 ]
//               } : {}}
//               transition={{ duration: 5, repeat: Infinity }}
//             />

//             <div className="relative z-10">
//               <motion.h3
//                 className="text-4xl font-bold text-white mb-4"
//                 initial={{ scale: 0.9 }}
//                 whileInView={{ scale: [0.9, 1.1, 1] }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 Ready to Build Something Amazing?
//               </motion.h3>
//               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                 Let's collaborate and turn your vision into reality with cutting-edge technology and innovative solutions.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <motion.button
//                   className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transform transition-all duration-300 relative overflow-hidden group"
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10">Let's Connect 🚀</span>
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={false}
//                   />
//                 </motion.button>

//                 <motion.button
//                   className="px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-xl hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   View My Work 📄
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
