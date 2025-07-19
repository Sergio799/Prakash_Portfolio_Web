import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
return (
    <footer className="bg-[0F162C]  text-white py-7">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
        <p>&copy; 2025 All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
        <a 
            href="#" 
            className="text-white hover:text-stone-300 transition-colors"
        >
            **Thanks for viewing my portfolio**
        </a>
        </div>
    </div>
    </footer>
)};

export default Footer;