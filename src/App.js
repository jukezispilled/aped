import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './bg.png'; // Ensure the correct path to your bg.png';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";
import { cn } from "./lib/utils";
import { AnimatedList } from './animated-list';
import Marquee from "react-fast-marquee"; 
import TypingAnimation from './typing-animation';
import NumberTicker from './number-ticker';
import './App.css';

let notifications = [
  {
    name: "mitch",
    description: "aped like 10 sol",
    time: "5m ago",
    icon: "mitch.jpg",
    color: "#FFFFFF",
  },
  {
    name: "daumen",
    description: "aped w mitch",
    time: "4m ago",
    icon: "dau.jpg",
    color: "#FFFFFF",
  },
  {
    name: "meechie",
    description: "aping some rn",
    time: "3m ago",
    icon: "mee.jpg",
    color: "#FFFFFF",
  },
    {
    name: "yenni",
    description: "aped and about to shill g",
    time: "3m ago",
    icon: "yen.jpg",
    color: "#FFFFFF",
  },
  {
    name: "yelo",
    description: "imma ape rn and tweet",
    time: "2m ago",
    icon: "yelo.jpg",
    color: "#FFFFFF",
  },
  {
    name: "robo",
    description: "aped a bag",
    time: "1m ago",
    icon: "robo.jpg",
    color: "#FFFFFF",
  },
  {
    name: "slingoor",
    description: "aped aped aped aped",
    time: "now",
    icon: "sling.jpg",
    color: "#FFFFFF",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl overflow-hidden"
          style={{
            backgroundColor: color,
          }}
        >
          <img src={icon} alt="Icon" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('coming soon...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
      <div
        className="h-screen w-screen flex justify-center items-center bg-white overflow-clip relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        >
        
        <div className='absolute top-5 left-5 right-5 z-20'>
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>

        <div className='grid relative -mt-[5%]'>
          <div className='text-5xl font-custom absolute bottom-[15%] left-[10%] text-[#52ff57] md:flex hidden'>
            +<NumberTicker className="text-[#52ff57]" value={1370} />%
          </div>
          <div className='text-5xl font-custom absolute right-[17%] bottom-[17%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={433} />%
          </div>
          <div className='text-5xl font-custom absolute right-[17%] top-[10%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={629} />%
          </div>
          <div className='text-5xl font-custom absolute left-[17%] top-[35%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={895} />%
          </div>
          <div className='text-5xl font-custom absolute left-[22%] top-[97%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={364} />%
          </div>
          <div className='text-5xl font-custom absolute left-[17%] top-[10%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={196} />%
          </div>
          <div className='text-5xl font-custom absolute right-[13%] top-[27%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={115} />%
          </div>
          <div className='text-5xl font-custom absolute left-[17%] top-[59%] text-[#52ff57] flex'>
            +<NumberTicker className="text-[#52ff57]" value={620} />%
          </div>
          <div className='flex justify-center w-full text-9xl md:text-[165px] font-custom'>
            <TypingAnimation
              className={"text-8xl md:text-[160px]"}
              duration={290}
              text="APED"
            />
          </div>
          <div className="flex flex-col justify-center items-center py-[3%] z-20">
            <div
              className="flex justify-center items-center h-full"
            >
              <motion.img
                whileHover={{ scale: 1.15, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="/aped.png"
                alt="aped"
                className="w-[55%] md:w-[37.5%] h-auto border rounded-full"
              />
            </div>
          </div>
          <div className='z-20 w-full flex justify-center pt-[%] text-2xl md:text-3xl space-x-10 underline font-custom pt-[2%]'>
            <a href="https://x.com/" className=''>
              Twitter
            </a>
            <a href="https://t.me/" className=''>
              Telegram
            </a>
          </div>
        </div>
        
        <div className='absolute bottom-10 md:left-10 flex justify-center'>
          <div className='flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-3 px-5 py-3 max-w-full border-2'>
            <button
              onClick={handleCopy}
              className="text-sm bg-green-500 text-white py-2 px-4 rounded-full md:hover:bg-green-600 border-2 transition-colors duration-300 z-10 whitespace-nowrap"
            >
              {copied ? 'Copied!' : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                  </svg>
                  }
            </button>
            <div className='text-sm md:text-lg overflow-x-auto font-custom'>
              coming soon...
            </div>
          </div>
        </div>
      </div>
      <div className='hidden bg-white border-2 border-black md:flex items-center'>
        <Marquee speed={200} className='text-3xl md:text-5xl font-custom py-1'>
          APED APED APED APED APED APED APED APED APED APED APED APED APED APED APED APED&nbsp;
        </Marquee>
      </div>
      <div className='h-screen w-screen overflow-hidden md:flex justify-center hidden md:visible relative'>
        <div className='pb-[5%] relative z-10'>
          <div className='text-black font-custom text-7xl md:text-9xl text-center mb-4 pt-[5%]'>
            APED CAM
          </div>
          <div className='relative spotlight'>
            <div className='absolute top-2 right-2 flex items-center z-20'>
              <div className='w-3 h-3 bg-red-600 rounded-full animate-pulse mr-2'></div>
              <span className='text-white text-4xl font-semibold'>REC</span>
            </div>
            <iframe
              className="h-[calc(70vh)] w-[calc(85vh)]"
              src="https://pump.fun/board"
              style={{ border: 'none' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='absolute inset-0 spotlight-bg'></div>
      </div>
    </div>
  );
}

export default App;