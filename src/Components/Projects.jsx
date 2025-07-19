// // import React from "react";
// // import ProjectCard from "../Components/ProjectCard";

// // const Projects = () => {
// //   return (
// //     <div id="projects" className="p-10 md:p-24 text-white">
// //       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
// //       <div className="py-12 px-8 flex flex-wrap gap-5">
// //         <ProjectCard
// //           title="Event Sharing Application"
// //           main="Developed a platform for users to discover, register, and manage events with an intuitive interface using HTML and.Bootstrap. Integrated JavaScript/React, EJS templates, and Nodejs/Express to deliver dynamic functionality and secure authentication. Designed a scalable MongoDB database for efficient session management and reliable data storage. Enhanced user engagement and accessibility with responsive design and interactive features."
// //         />
// //         <ProjectCard
// //           title="Photo Sharing Application"
// //           main="A photo-sharing application empowers users to upload, share, and engage with images through features like likes, comments, personalized feeds, and real-time notifications. The front end, built with React, delivers an interactive and responsive UI, while the back end, powered by Node.js and Express, ensures robust authentication and high-performance RESTful APIs. MongoDB enables scalable and efficient data management, while AWS or Firebase supports secure cloud hosting and storage. This cutting-edge tech stack drives seamless user interaction, scalability, and dynamic community engagement."
// //         />
// //         <ProjectCard
// //           title="Property Pulse Application"
// //           main="Developed a full-stack property rental platform with Next.js 14, boosting user engagement by 20%, Implemented secure authentication via Google and Next AUTH, enhancing data protection and access control.Designed a responsive UI using Tailwind CSS, improving mobile usability by 35%, Optimized image handling with Cloud nary, reducing page load times by 40%.Enhanced search and location filtering through React Geocode and Map box for accurate recommendations.Deployed on Vercel, ensuring global scalability and 30% faster server response times."
// //         />
// //         <ProjectCard
// //           title="Sematic Book Recommender"
// //           main="Developed a semantic book recommender system using LLMs and vector search, improving accuracy by 35%., Processed and cleaned 7500+ book descriptions, enhancing data quality for better recommendations., Implemented vector-based search with Lang Chain.Built a zero-shot classification model via Hugging Face LLMs, achieving 90% accuracy in categorization. Conducted sentiment analysis on 25,000 descriptions, extracting emotions with 85% precision, developed a Gradio dashboard, increasing user engagement by 50%."
// //         />

// //         <ProjectCard
// //           title="Web Cloner"
// //           main="Developed a full-stack web application using Next.js, Tailwind CSS, and TypeScript to deliver a modern, responsive user interface.Designed and implemented Fast API backend services to process GET requests and coordinate between the frontend, AI modules, and scraping logic.Integrated Claude AI (Anthropic) to analyse, summarize, and extract meaningful insights from dynamically scraped web content.Built a robust web scraping pipeline using Selenium, aiohttp, and asyncio for efficient extraction of HTML and CSS DOM elements from user-provided URLs.Ensured secure and reliable request handling with CORS middleware, Pydantic data validation, and custom URL sanitization techniques.Applied advanced techniques including dynamic content rendering, browser automation, and content parsing to deliver high-accuracy data extraction.Desired: Strong understanding of Python debugging and simple circuit design and troubleshooting, supporting deeper integration with future IoT or embedded applications."
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;

// import React from "react";
// import { ArrowUpRight, ArrowLeft, Download, RefreshCw } from "lucide-react";
// import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

// const Projects = () => {
//   return (
//     <div id="projects" className="p-10 md:p-24 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl md:text-4xl text-gray-900 font-bold mb-12">
//         Projects
//       </h1>

//       {/* Bento Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
//         {/* Card 1 - Get Live Update */}
//         <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-green-300 relative">
//           <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-700" />
//           <div className="mt-4">
//             <h3 className="text-lg font-bold text-gray-900 mb-2">WebCloner</h3>
//           </div>
//           <div className="flex gap-3 mt-auto">
//             <button
//               onClick={() =>
//                 window.open("https://github.com/Sergio799", "_blank")
//               }
//               className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
//             >
//               GitHub
//             </button>
//           </div>
//         </div>

//         {/* Card 2 - Sales Growth */}
//         <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="bg-gray-800 w-full h-2 rounded-full mb-4"></div>
//           <p className="text-gray-700 font-medium">Event Folio</p>
//           <div className="mt-6 flex"></div>
//         </div>

//         {/* Card 3 - Design Intelligence */}
//         <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-gray-800 relative">
//           <div className="bg-gray-800 p-3 rounded-lg mb-4">
//             <div className="flex items-center gap-2 text-white text-sm">
//               <div className="w-4 h-4 bg-green-400 rounded-full"></div>
//               <span>Sematic Book Recommender</span>
//             </div>
//             <p className="text-white mt-2 font-medium">
//               Developed a semantic book recommender system using LLMs and vector
//               search
//             </p>
//           </div>
//           <div className="border-t-2 border-gray-300 pt-4">
//             <div className="flex items-center gap-2 text-sm"></div>
//           </div>
//         </div>

//         {/* Card 4 - Integration */}
//         <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="mb-6">
//             <h3 className="text-lg font-bold text-gray-900 mb-6">
//               Property Pulse
//             </h3>
//             <div className="flex">
//               <div className="bg-green-300 flex-1 h-8 rounded-l-lg"></div>
//               <div className="bg-gray-800 w-16 h-8 rounded-r-lg"></div>
//             </div>
//           </div>
//         </div>
//         {/* Card 5 - API.UI */}
//         <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <RefreshCw className="w-5 h-5 text-gray-700 mb-4" />
//           <div className="bg-green-300 px-3 py-2 rounded-lg text-center font-bold text-gray-900 mb-4"></div>
//           <div className="bg-gray-800 px-3 py-4 rounded-lg text-white text-sm">
//             <p className="font-medium">Photo Sharing Applicarion</p>
//           </div>
//         </div>

//         {/* Card 6 - Expert Profile */}
//         <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
//           <div className="absolute top-4 right-4">×</div>
//           <div className="flex items-center gap-2 text-sm mb-4">
//             <div className="w-4 h-4 bg-green-400 rounded-full"></div>
//             <span>Whale</span>
//           </div>

//           {/* Person silhouette */}
//           <div className="relative">
//             <div className="w-16 h-20 bg-gray-800 rounded-t-full mx-auto mb-2"></div>
//             <div className="bg-green-300 h-8 w-full absolute bottom-0 left-0"></div>
//           </div>

//           <div className="mt-4 flex items-center justify-between">
//             <ArrowLeft className="w-4 h-4 text-gray-700" />
//             <span className="text-xs font-medium">#askexpert</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { ArrowUpRight, ArrowLeft, Download, RefreshCw } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-gray-900 font-bold mb-12">
        Projects
      </h1>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {/* Card 1 - Get Live Update */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-green-300 relative">
          <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-700" />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">WebCloner</h3>
          </div>
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() =>
                window.open("https://github.com/Sergio799", "_blank")
              }
              className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base flex items-center justify-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Card 2 - Sales Growth */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-gray-800 w-full h-2 rounded-full mb-4"></div>
          <p className="text-gray-700 font-medium">Event Folio</p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base flex items-center justify-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Card 3 - Design Intelligence */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-gray-800 relative">
          <div className="bg-gray-800 p-3 rounded-lg mb-4">
            <div className="flex items-center gap-2 text-white text-sm">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Sematic Book Recommender</span>
            </div>
            <p className="text-white mt-2 font-medium">
              Developed a semantic book recommender system using LLMs and vector
              search
            </p>
          </div>
          <div className="border-t-2 border-gray-300 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => window.open("#", "_blank")}
                className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base flex items-center justify-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 - Integration */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Property Pulse
            </h3>
            <div className="flex">
              <div className="bg-green-300 flex-1 h-8 rounded-l-lg"></div>
              <div className="bg-gray-800 w-16 h-8 rounded-r-lg"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base flex items-center justify-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Card 5 - API.UI */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <RefreshCw className="w-5 h-5 text-gray-700 mb-4" />
          <div className="bg-green-300 px-3 py-2 rounded-lg text-center font-bold text-gray-900 mb-4"></div>
          <div className="bg-gray-800 px-3 py-4 rounded-lg text-white text-sm">
            <p className="font-medium">Photo Sharing Applicarion</p>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base flex items-center justify-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Card 6 - Expert Profile */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-4 right-4">×</div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span>Whale</span>
          </div>

          {/* Person silhouette */}
          <div className="relative">
            <div className="w-16 h-20 bg-gray-800 rounded-t-full mx-auto mb-2"></div>
            {/* <div className="bg-green-300 h-8 w-full absolute bottom-0 left-0"></div> */}
            <p className="font-bold text-black text-center mt-2">
              I am cooking something great
            </p>
          </div>

          {/* <div className="mt-4 flex items-center justify-between gap-2">
            <ArrowLeft className="w-4 h-4 text-gray-700" />
            <button
              onClick={() => window.open("#", "_blank")}
              className="bg-[#4A5D7A] hover:bg-[#A3BFFA is] text-white font-semibold py-1.5 px-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs flex items-center justify-center gap-1"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </button>
            <span className="text-xs font-medium">#askexpert</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
