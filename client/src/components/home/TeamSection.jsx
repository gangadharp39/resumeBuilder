import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

const TeamSection = () => {
  return (
    <div id="contact" class="flex flex-col items-center justify-center text-center mt-20">
      <h3 class="text-lg font-medium text-blue-600 mb-2">Contact Us</h3>
      <h1 class="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
        Meet Our Team
      </h1>
      <p class="w-3/5 mb-14 text-gray-500 text-sm">
        Our talented team combines creativity, innovation, and technical expertise to deliver 
        high-quality digital solutions <br /> that empower businesses worldwide.
      </p>
      <div class="flex flex-wrap gap-6 items-center justify-center">
        <div class="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            class="w-24 rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="Santhosh Reddy"
          />
          <h2 class="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
            Santhosh Reddy
          </h2>
          <p class="text-gray-500 group-hover:text-white/80">Full Stack Developer</p>
          <p class="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            I am always eager to take on new challenges.
          </p>
          <div class="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
            <a href="mailto:santhoshreddy561@gmail.com">
              <Mail size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/santhosh-reddy-6a977a2ba">
              <Linkedin size={20}/>
            </a>
            <a href="https://github.com/SanthoshReddy-5">
              <Github size={20}/>
            </a>
          </div>
        </div>

        <div class="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            class="w-24 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Gangadhar"
          />
          <h2 class="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
            Gangadhar
          </h2>
          <p class="text-gray-500 group-hover:text-white/80">Data Scientist</p>
          <p class="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Aspiring Data Scientist
          </p>
          <div class="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
            <a href="mailto:loser9038@gmail.com">
              <Mail size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/p-h-naga-bala-gangadhar-a015a6313">
              <Linkedin size={20}/>
            </a>
            <a href="https://github.com/gangadharp39">
              <Github size={20}/>
            </a>
          </div>
        </div>

        <div class="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            class="w-24 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="Sumanth Reddy"
          />
          <h2 class="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
            Sumanth Reddy
          </h2>
          <p class="text-gray-500 group-hover:text-white/80">
            Web Developer
          </p>
          <p class="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            I'm passionate about build Seamless websites
          </p>
          <div class="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
            <a href="mailto:karri.sumanthreddy.21@gmail.com">
              <Mail size={20}/>
            </a>
            <a href="www.linkedin.com/in/k-sumanth-reddy">
              <Linkedin size={20}/>
            </a>
            <a href="https://github.com/sumanthreddy217">
              <Github size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
