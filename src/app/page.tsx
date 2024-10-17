"use client";

import { useState, useEffect} from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(handleLoadingComplete, 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="image-back bg-black">
      <header className="p-4 absolute w-full z-10">
        <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="text-white text-xl font-bold">"LOGO"</div>
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <ul className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[4vw] ${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
            <li>
              <Link href="/t-shirt" className="text-white hover:text-gray-500 text-sm md:text-base ">T-shirt</Link>
            </li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Zip & Hoodies</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Pants</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Accessories</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">FAQ</a></li>
            <li><a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">Contact</a></li>
          </ul>
          <div className="hidden md:block">
            <a className="text-white hover:text-gray-500 text-sm md:text-base" href="#">CART</a>
          </div>
        </nav>
      </header>

      <main>

        <section className="video-section flex justify-center items-center h-screen relative">
        <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto md:w-[1090px] md:h-[700px] animate-spin-slow opacity-50 z-0">

            <source src="/video/circle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <h1 
            className="text-white text-6xl md:text-[180px] font-zen-dots absolute top-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          >
            ECLIPSE
          </h1>
        </section>

        {/* New  section */}
        <section className="new-drop bg-black py-12 md:py-24">
      <FadeInSection>
        <h2 className="text-white text-4xl md:text-6xl font-zen-dots text-center mb-8 md:mb-16">New Drop</h2>
      </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[50px] mb-8 md:mb-16 pt-12">
              <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
                <Image src="/video/Vector-2.png" alt="Vector graphic" layout="fill" objectFit="contain" />
              </div>
              <div className="w-full md:w-[300px] h-[200px] relative">
                <Image src="/video/sword.png" alt="Sword image" layout="fill" objectFit="contain" />
              </div>
              <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
                <Image src="/video/Vector-2.png" alt="Vector graphic" layout="fill" objectFit="contain" />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[200px] mb-8 md:mb-16">
              <div className="w-full md:w-[450px] text-center">
                <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal mr-24">
                  Eclipse T-shirt
                </h1>
                <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2 mx-auto  mr-24 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="w-full md:w-[450px] text-center">
                <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal ml-24">
                  Eclipse T-shirt
                </h1>
                <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2 mx-auto ml-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[50px] mb-8 md:mb-16 pt-24">
              <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
                <Image src="/video/Vector-8.png" alt="Vector graphic" layout="fill" objectFit="contain" />
              </div>
              <div className="w-full md:w-[300px] h-[200px] relative">
                <Image src="/video/circle.png" alt="Sword image" layout="fill" objectFit="contain" />
              </div>
              <div className="w-full md:w-[350px] h-[280px] flex-shrink-0 relative">
                <Image src="/video/Vector-8.png" alt="Vector graphic" layout="fill" objectFit="contain" />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[200px] mb-8 md:mb-16">
              <div className="w-full md:w-[450px] text-center">
                <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal mr-24">
                  Eclipse T-shirt
                </h1>
                <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2 mx-auto  mr-24 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="w-full md:w-[450px] text-center">
                <h1 className="text-white font-zen-dots text-2xl md:text-[35px] font-normal leading-normal ml-24">
                  Eclipse T-shirt
                </h1>
                <p className="text-white font-zen-dots text-sm md:text-[12px] font-normal leading-normal mt-2 mx-auto ml-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>
        
      </main>

      {/* Final section */}
      <FadeInSection>
        <section className="bg-black py-24">
          <div className="flex flex-col justify-start items-center gap-8 md:gap-[44px]">
            <div className="flex flex-col items-center px-4 md:px-0">
              <h1 className="text-white text-4xl md:text-[60px] font-zen-dots font-normal leading-normal text-center mb-0">
                Join the Movement
              </h1>
              <div className="w-full md:w-[750px] mt-8">
                <p className="text-white text-sm md:text-[12px] font-zen-dots font-normal leading-normal text-center mb-32">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <div className="flex justify-center space-x-4">
                  <Image src="/video/twitter.png" alt="Twitter logo" width={50} height={50} />
                  <Image src="/video/twitter.png" alt="Twitter logo" width={50} height={50} />
                  <Image src="/video/twitter.png" alt="Twitter logo" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <footer className="bg-black py-2">
        <h1 className="text-white text-[15px] font-cardo font-normal justify-center text-center pb-2">
          Made by Sen.eth
        </h1>
      </footer>
    </div>
  );
}
