
import React from 'react';
import logo from "../assets/kevinRushLogo (2).png";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    const socialLinks = [
        {
            icon: <FaLinkedin size={28} />,
            url: "https://www.linkedin.com/in/saiprakash07/",
            label: "LinkedIn",
            hoverClass: "hover:text-blue-600"
        },
        {
            icon: <FaGithub size={28} />,
            url: "https://github.com/Sergio799",
            label: "GitHub",
            hoverClass: "hover:text-purple-600"
        },
        {
            icon: <FaEnvelope size={28} />,
            url: "mailto:youremail@example.com",
            label: "Email",
            hoverClass: "hover:text-red-500"
        },
        {
            icon: <FaInstagram size={28} />,
            url: "https://www.instagram.com/mr.sergiomarqina/",
            label: "Instagram",
            hoverClass: "hover:text-pink-600"
        }
    ];

    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4 fixed top-0 left-0 right-0 z-50 bg-[0F162C] p-8">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center"> 
                <img 
                    src={logo} 
                    alt="logo" 
                    className="w-12 h-12 object-contain cursor-pointer
                        transition-all duration-300 ease-in-out
                        hover:scale-110 hover:rotate-3"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
                    <h1 className="font-bold color-white-600 ">Hire Me!
                    </h1>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
                {socialLinks.map((social, index) => (
                    <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className={`transform transition-all duration-300
                            hover:scale-125 hover:-translate-y-1
                            active:scale-95
                            ${social.hoverClass}
                            relative group`}
                    >
                        {social.icon}
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                            whitespace-nowrap
                            bg-black text-white text-xs py-1 px-2 rounded-lg
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-200
                            pointer-events-none">
                            {social.label}
                        </span>
                    </a>
                ))}
            </div> 
        </nav>
    );
};

export default Navbar;