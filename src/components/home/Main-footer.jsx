import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="max-w-8xl mx-auto">
        {/* Mobile: Brand Section on Top */}
        <div className="lg:hidden mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">E-CELL SAKEC</h2>
<p className="text-gray-300 leading-relaxed">
  Fostering innovation and entrepreneurship through events, workshops, and
  initiatives that empower students to turn ideas into impact.
</p>

            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ecellsakec/" 
                className="  w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              
              <a 
                href="https://x.com/ecellsakec" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/entrepreneurship-and-innovationcell/posts/?feedView=all" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: Extra Links and Contact Side by Side / Desktop: All three sections in a row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Desktop: Brand Section (First Column) */}
          <div className="hidden lg:block space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">ECELL SAKEC™</h2>
            <p className="text-gray-300 leading-relaxed max-w-sm">
               Fostering innovation and entrepreneurship through events, workshops, and
  initiatives that empower students to turn ideas into impact.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ecellsakec/" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              
              <a 
                href="https://x.com/ecellsakec" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/entrepreneurship-and-innovationcell/posts/?feedView=all" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Extra Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-200">Pages</h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors duration-200 transform underline-hover w-max"
              >
                Home
              </a>
              <a 
                href="/events" 
                className="text-gray-300 hover:text-white transition-colors duration-200 transform underline-hover w-max"
              >
                Events
              </a>
              <a 
                href="/newsletters" 
                className="text-gray-300 hover:text-white transition-colors duration-200 transform underline-hover w-max"
              >
                Newsletters
              </a>
              <a 
                href="/team" 
                className="text-gray-300 hover:text-white transition-colors duration-200  transform underline-hover w-max"
              >
                Our Team
              </a>
             
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-200">Contact</h3>
            <div className="space-y-4">
              <div className="text-gray-300">
                <div className="font-medium">SAKEC, near Deonar Depot</div>
                <div>Chembur, Mumbai 400074</div>
              </div>
              
              <a 
                href="mailto:email@example.com" 
                className="flex cursor-pointer items-center text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Mail size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                email@example.com
              </a>
              
              <a 
                href="tel:+15555555555" 
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Phone size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                (+91) 9702852450
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2024 ECELL SAKEC™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;