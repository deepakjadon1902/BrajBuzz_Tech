// import { motion } from 'framer-motion';
// import { LampContainer } from './ui/lamp';
// import { Users, Target, Award } from 'lucide-react';

// export function AboutSection() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
//       {/* Hero Section */}
//       <LampContainer>
//         <motion.div
//           initial={{ opacity: 0.5, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className="text-center"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-transparent">
//             About Us
//           </h1>
//           <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
//             We’re a creative team dedicated to building modern, beautiful, and user-friendly web experiences.
//           </p>
//         </motion.div>
//       </LampContainer>

//       {/* About Content */}
//       <div className="bg-white dark:bg-[#0A0A0A] py-20">
//         <div className="container mx-auto px-4">
//           {/* Who We Are */}
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Who We Are
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-lg">
//               We are passionate designers and developers who believe in crafting digital solutions
//               that inspire and perform. Our focus is on creating web applications that combine
//               creativity, functionality, and technology to deliver exceptional user experiences.
//             </p>
//           </div>

//           {/* Mission - Vision - Values */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             {/* Mission */}
//             <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
//                   <Target size={32} className="text-[#002366] dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 To build creative, high-quality, and performance-driven digital solutions
//                 that help brands and individuals grow online.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
//                   <Award size={32} className="text-[#002366] dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 To be recognized as a top innovator in the digital space, known for merging design and technology seamlessly.
//               </p>
//             </div>

//             {/* Team */}
//             <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
//                   <Users size={32} className="text-[#002366] dark:text-blue-400" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Team</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 A dedicated group of professionals passionate about UI/UX, web development, and creative problem-solving.
//               </p>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//               <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
//                 <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">25+</h3>
//                 <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
//               </div>
//               <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
//                 <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">15+</h3>
//                 <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
//               </div>
//               <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
//                 <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">3+</h3>
//                 <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { Youtube, Target, Lightbulb, Award } from "lucide-react";

// Lamp Container Component
const LampContainer = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

// Main About Section Component
export  function AboutSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* Hero Section */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-transparent">
            About Brajbuzz Tech
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Honest Reviews. Real Insights. Trusted Technology.
          </p>
        </motion.div>
      </LampContainer>

      {/* About Content */}
      <div className="bg-white dark:bg-[#0A0A0A] py-20">
        <div className="container mx-auto px-4">
          {/* Who We Are */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Brajbuzz Tech is your trusted companion in navigating the ever-evolving world of technology. 
              We're a passionate team of tech enthusiasts dedicated to bringing you comprehensive, 
              unbiased reviews of the latest gadgets, products, and innovations. From smartphones 
              and laptops to emerging tech and everyday products, we test, analyze, and share our 
              honest opinions on YouTube to help you make informed decisions.
            </p>
          </div>

          {/* Mission - Vision - Inspiration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Target size={32} className="text-[#002366] dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To deliver honest, comprehensive, and accessible tech reviews that bridge the 
                gap between innovation and everyday users, ensuring technology serves people.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Award size={32} className="text-[#002366] dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To become the most trusted source for technology reviews in India and beyond, 
                empowering millions of users to make confident, informed decisions.
              </p>
            </div>

            {/* Inspiration */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Lightbulb size={32} className="text-[#002366] dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Inspiration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Inspired by the curiosity of our viewers and the rapid pace of technological advancement 
                that transforms how we live, work, and communicate.
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 text-left">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">📱</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Product Reviews</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  In-depth analysis of tech products and gadgets, testing real-world performance 
                  to give you the complete picture before you buy.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 text-left">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">📰</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tech News</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay updated with the latest developments, launches, and trends in the 
                  technology world with our timely news coverage.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 text-left">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">✅</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Honest Opinions</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  We pride ourselves on transparency and integrity. Our reviews are genuine, 
                  unsponsored insights that put your needs first.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 text-left">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🎥</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Video Content</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Engaging YouTube videos that break down complex tech into easy-to-understand 
                  content for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Our Motivation */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Motivation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              In a world flooded with sponsored content and biased reviews, we saw a need for 
              authenticity. Our motivation stems from a simple belief: consumers deserve honest, 
              reliable information to make the best purchasing decisions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Every review we create, every product we test, is guided by one question: 
              <span className="font-semibold text-[#002366] dark:text-blue-400"> "Would we recommend this to our family and friends?"</span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
                <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">100+</h3>
                <p className="text-gray-600 dark:text-gray-400">Product Reviews</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
                <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">50K+</h3>
                <p className="text-gray-600 dark:text-gray-400">YouTube Subscribers</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
                <h3 className="text-4xl font-bold text-[#002366] dark:text-blue-400 mb-2">2+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of Trusted Reviews</p>
              </div>
            </div>
          </div>

          {/* Where We Are */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Where We Are
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Based in India, we're proud to be part of one of the world's fastest-growing 
              tech markets. Our location gives us unique insights into the needs and preferences 
              of diverse consumers. While our roots are in India, our reach is global. Through 
              YouTube, we connect with viewers worldwide, building a community united by a shared 
              love for technology and honest conversation.
            </p>
          </div>

          {/* CTA Section */}
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Subscribe to our YouTube channel and become part of a community that values 
              honesty, innovation, and informed decision-making.
            </p>
            <motion.a
              href="https://www.youtube.com/@BrajbuzzTech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#002366] to-blue-600 dark:from-blue-500 dark:to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Youtube className="mr-2" size={24} />
              Subscribe on YouTube
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}