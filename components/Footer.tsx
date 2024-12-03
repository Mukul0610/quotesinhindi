 "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Implement email signup logic
//     console.log('Email submitted:', email);
//     setEmail('');
//   };

//   return (
//     <footer className="bg-[#c4a99b] w-full py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col justify-between items-center">
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <div className="flex flex-1 justify-center items-center">
//               <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 text-[#4b281e] w-[110%]">
//                 <Link href="https://www.linkedin.com/in/mukul-rai-325953235/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                   <button className="flex items-center justify-center p-2 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
//                     <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" />
//                     <span>LinkedIn</span>
//                   </button>
//                 </Link>
//                 <Link href="https://www.facebook.com/profile.php?id=100081212280771" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                   <button className="flex items-center justify-center p-2  rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
//                     <FontAwesomeIcon icon={faFacebook} className="text-2xl mr-2" />
//                     <span>Facebook</span>
//                   </button>
//                 </Link>
//                 <Link href="https://www.instagram.com/mukulrai1729/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                   <button className="flex items-center justify-center p-2 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
//                     <FontAwesomeIcon icon={faInstagram} className="text-2xl mr-2" />
//                     <span>Instagram</span>
//                   </button>
//                 </Link>
//                 <Link href="https://x.com/mukul93028" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                   <button className="flex items-center justify-center p-2 rounded-full hover:bg-[#4b281e] hover:text-white transition-colors duration-300">
//                     <FontAwesomeIcon icon={faTwitter} className="text-2xl mr-2" />
//                     <span>Twitter</span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full mt-10 md:w-1/3">
//             <form onSubmit={handleSubmit} className="flex">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="flex-grow p-2 rounded-l text-black"
//                 required
//               />
//               <button type="submit" className="bg-[#4b281e] text-white p-2 rounded-r hover:bg-[#2c221f]">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//           <p className="m-3"> Subscribe to my email list and stay up-to-date!</p>
//           <div className="container mx-auto px-4 text-center text-gray-600">
//           <p>&copy; 2023 GutenVerse. All rights reserved.</p>
//         </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setShowSuccess(true);
    setEmail('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mukul-rai-325953235/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100081212280771',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mukulrai1729/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mukul93028',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b w-full from-[#c4a99b] to-[#b39484] text-[#4b281e]">
      <div className="container mx-auto px-4 py-12">
        <div className="w-full mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">GutenVerse</h3>
              <p className="text-lg max-w-md">
                Discover a world of inspiring quotes and shayari. Join our community of literature lovers.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white transition-all"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">Stay Connected</h3>
              <p className="text-lg">
                Subscribe to our newsletter for daily doses of inspiration.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-10 bg-white/90 border-[#4b281e] text-[#4b281e] placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-[#4b281e] hover:bg-[#2c221f] text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
                {showSuccess && (
                  <Alert className="bg-green-50 text-green-800 border-green-300">
                    <AlertDescription>
                      Thanks for subscribing! Check your email for confirmation.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#4b281e]/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} GutenVerse. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;