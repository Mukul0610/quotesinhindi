"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email signup logic
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#c4a99b] w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-1 justify-center items-center">
              <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 text-[#4b281e] w-[110%]">
                <Link href="https://www.linkedin.com/in/mukul-rai-325953235/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <button className="flex items-center justify-center p-2 px-4 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" />
                    <span>LinkedIn</span>
                  </button>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100081212280771" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <button className="flex items-center justify-center p-2 px-4 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl mr-2" />
                    <span>Facebook</span>
                  </button>
                </Link>
                <Link href="https://www.instagram.com/mukulrai1729/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <button className="flex items-center justify-center p-2 px-4 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mr-2" />
                    <span>Instagram</span>
                  </button>
                </Link>
                <Link href="https://x.com/mukul93028" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <button className="flex items-center justify-center p-2 px-4 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faTwitter} className="text-2xl mr-2" />
                    <span>Twitter</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 md:w-1/3">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l text-black"
                required
              />
              <button type="submit" className="bg-[#4b281e] text-white p-2 rounded-r hover:bg-[#2c221f]">
                Sign Up
              </button>
            </form>
          </div>
          <p className="m-3"> Subscribe to my email list and stay up-to-date!</p>
          <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 GutenVerse. All rights reserved.</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;