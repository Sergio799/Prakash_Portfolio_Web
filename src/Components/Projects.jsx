import { ArrowUpRight, ArrowLeft, Download, RefreshCw } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 bg-neutral-950 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-wh font-bold mb-12">Projects</h1>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {/* Card 1 - Get Live Update */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-green-300 relative">
          <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-white" />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-white mb-2">WebCloner</h3>
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
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="bg-green-500 w-full h-2 rounded-full mb-4"></div>
          <p className="text-xl  text-white font-medium">Event Folio</p>
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
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-4 border-gray-800 relative">
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
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-6">
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
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <RefreshCw className="w-5 h-5 text-white mb-4" />
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
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-gray-800/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-4 right-4">×</div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span>Whale</span>
          </div>

          {/* Person silhouette */}
          <div className="relative">
            <div className="w-16 h-20 bg-green-300  rounded-t-full mx-auto mb-2"></div>
            {/* <div className="bg-green-300 h-8 w-full absolute bottom-0 left-0"></div> */}
            <p className="font-bold text-white text-center mt-2">
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
