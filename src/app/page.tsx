"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import LoadingPage from './loading-page/loadingpage';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Add any additional loading logic if necessary, otherwise handle the complete state
    const timer = setTimeout(handleLoadingComplete, 2000); // simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="image-back bg-black">
      {/* Main hero section */}
      <section className="mainpage h-screen">
        {/* Navigation */}
        <nav className="p-4">
          <div className="nav-links z-10">
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-[4vw]">
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">T-shirt</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">Zip & Hoodies</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">Pants</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">Accessories</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">FAQ</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base" href="#">Contact</a></li>
              <li><a className="items text-white hover:text-gray-500 text-sm md:text-base md:absolute md:right-0 md:top-0 md:pt-4 md:pr-32" href="#">CART</a></li>
            </ul>
          </div>
        </nav>

        {/* Main hero section with video and title */}
        <div className="flex justify-center items-center w-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full md:w-[1091px] md:h-[920px] animate-spin-slow opacity-50 pt-96"
          >
            <source src="/video/circle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <FadeInSection>
          <div className="relative z-10 flex justify-center items-center w-full py-8">
            <h1 className="text-white text-6xl md:text-[180px] font-zen-dots absolute pb-8 pr-10 pl-10 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              ECLIPSE
            </h1>
          </div>
        </FadeInSection>
      </section>

      {/* New Drop section */}
      <section className="new-drop bg-black py-12 md:py-24">
        <FadeInSection>
          <h2 className="text-white text-4xl md:text-6xl font-zen-dots text-center mb-8 md:mb-16">New Drop</h2>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[50px] mb-8 md:mb-16">
            <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
              <Image
                src="/video/Vector-2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="w-full md:w-[300px] h-[200px] relative">
              <Image
                src="/video/sword.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
              <Image
                src="/video/Vector-2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </FadeInSection>

        
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[200px] mb-8 md:mb-16">
            <div className="w-full md:w-[450px] text-center md:text-center">
              <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal">
                Eclipse T-shirt
              </h1>
              <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="w-full md:w-[450px] text-center md:text-center">
              <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal">
                Eclipse T-shirt
              </h1>
              <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Product Details section */}
      <section className="new-drop bg-black py-12 md:py-24">
        <FadeInSection>
          <h2 className="text-white text-4xl md:text-6xl font-zen-dots text-center mb-8 md:mb-16">New Drop</h2>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[50px] mb-8 md:mb-16">
            <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
              <Image
                src="/video/Vector-2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="w-full md:w-[300px] h-[200px] relative">
              <Image
                src="/video/sword.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
              <Image
                src="/video/Vector-2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </FadeInSection>

        
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[200px] mb-8 md:mb-16">
            <div className="w-full md:w-[450px] text-center md:text-center">
              <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal">
                Eclipse T-shirt
              </h1>
              <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="w-full md:w-[450px] text-center md:text-center">
              <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal">
                Eclipse T-shirt
              </h1>
              <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
      {/* Final section */}
      <FadeInSection>
        <section className="bg-black py-16">
          <div className="flex flex-col justify-start items-center gap-8 md:gap-[44px]">
            <div className="flex flex-col items-center px-4 md:px-0">
              <h1 className="text-white text-4xl md:text-[60px] font-zen-dots font-normal leading-normal text-center">
                Join the Movement
              </h1>
              <div className="w-full md:w-[750px] mt-8">
                <p className="text-white text-sm md:text-[12px] font-zen-dots font-normal leading-normal text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <Image src="/video/twitter.png" alt="Twitter logo 1" width={50} height={50} />
                  <Image src="/video/twitter.png" alt="Twitter logo 2" width={50} height={50} />
                  <Image src="/video/twitter.png" alt="Twitter logo 3" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
