// import React from 'react';
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiJquery,
  SiExpress,
} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { FaNode, FaAws, FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { DiDjango, DiDocker } from "react-icons/di";

const Technologies = () => {
  const technologies = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: AiOutlinePython, color: "text-blue-500" },
    { Icon: SiJavascript, color: "text-yellow-400" },
    { Icon: SiMysql, color: "text-blue-400" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: FaNode, color: "text-green-600" },
    { Icon: FaAws, color: "text-orange-500" },
    { Icon: TiHtml5, color: "text-white-600" },
    { Icon: DiDjango, color: "text-green-700" },
    { Icon: RiTailwindCssFill, color: "text-cyan-400" },
    { Icon: FaCss3Alt, color: "text-white-500" },
    { Icon: DiDocker, color: "text-white-600" },
    { Icon: SiJquery, color: "text-blue-700" },
    { Icon: SiExpress, color: "text-gray-400" },
  ];
  return (
    <div className="border-b border-neutral-800 pb-12">
      <h1 className="text-4xl mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent my-12 text-center font-bold animate-ping ">
        Technologies
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {technologies.map(({ Icon, color }, index) => (
          <div
            key={index}
            className="group rounded-xl border-2 border-neutral-800 p-3 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-purple-500 cursor-pointerhover:bg-neutral-900/50 transform"
          >
            <Icon
              className={`text-6xl ${color} w-full h-[100px] group-hover:animate-bounce`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
