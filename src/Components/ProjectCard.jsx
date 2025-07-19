// import React from "react";
// import logo6 from "../assets/projects/project-1.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div
//       className="w-[75px]
//   h-[75px]
//   bg-slate-900
//   rounded-2xl
//   shadow-xl
//   shadow-slate-900
//   hover:scale-110
//   hover:shadow-2xl
//   hover:shadow-slate-700
//   transition-all
//   duration-300
//   ease-in-out
//   animate-pulse
//   hover:animate-none
//   hover:bg-slate-800
//   hover:rotate-3
//   cursor-pointer"
//     >
//       <img src={logo6} alt="logo6" className="p-4" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button
//           onClick={() => window.open("https://github.com/Sergio799", "_blank")}
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         >
//           GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import logo6 from "../assets/projects/project-1.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="w-80 sm:w-96 h-auto bg-slate-900 rounded-2xl shadow-xl shadow-slate-900 hover:scale-105 hover:shadow-2xl hover:shadow-slate-700 transition-all duration-300 ease-in-out hover:bg-slate-800 cursor-pointer group overflow-hidden">
//       {/* Image Container */}
//       <div className="relative overflow-hidden rounded-t-2xl">
//         <img
//           src={logo6}
//           alt="Project Preview"
//           className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>

//       {/* Content Container */}
//       <div className="p-6">
//         {/* Title */}
//         <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors duration-300">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
//           {main}
//         </p>

//         {/* Action Buttons */}
//         <div className="flex gap-3 mt-auto">
//           <button
//             onClick={() =>
//               window.open("https://github.com/Sergio799", "_blank")
//             }
//             className="flex-1 bg-[#465697] hover:bg-[#3d4a85] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
//           >
//             GitHub
//           </button>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       <div className="absolute top-4 right-8 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>
//   );
// };

// export default ProjectCard;
