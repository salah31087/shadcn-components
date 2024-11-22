import React from "react";
import heroBg from "../../assets/images/hero-illustration.svg";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./logo";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="font-inter">
      <header className="absolute py-5 top-0 right-0 left-0 z-30 w-full">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* logo */}
            <a href="#">
              <Logo></Logo>
            </a>
            {/* nav */}
            <nav className="flex items-center flex-grow">
              <ul className="justify-end flex flex-grow items-center gap-x-6">
                <a
                  href="#"
                  className="text-base font-medium text-slate-200 hover:text-slate-300"
                >
                  Sign in
                </a>
                <Button className="group shadow-lg transition-all duration-300 ease-in-out text-white bg-gradient-to-t from-[#2563eb] to-[#60a5fa] hover:to-[#3b82f6] !px-6 !py-6 text-base  leading-6">
                  Get started
                </Button>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        {/* gradient overlay from bottom */}
        <div className="h-40 w-full -z-10 absolute right-0 left-0 bottom-0 pointer-events-none bg-gradient-to-t from-[#1f2937] to-[#111827] opacity-60"></div>
        {/* img overlay */}
        <div className="-z-10 left-1/2 absolute pointer-events-none -translate-x-1/2">
          <img
            src={heroBg}
            className="max-w-none"
            alt="hero illustration"
            height="737"
            width="2143"
          />
        </div>
        {/* content */}
        <div className="max-w-screen-xl mx-auto px-6 relative">
          <div className="md:pb-20 md:pt-40 pb-12 pt-32 max-w-full md:max-w-[640px]">
            {/* hero content */}
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }} // Start with zoomed-in (scale: 1.2)
              animate={{ opacity: 1, scale: 1 }} // Animate to the original size (scale: 1)
              transition={{ duration: 0.2 }} // Animation duration
              className="md:text-left text-center mx-auto max-w-6xl md:max-w-[640px] md:ml-0 md:mr-0"
            >
              <div className="text-gray-300 text-sm leading-6 py-1 px-4 bg-gray-800 rounded-full inline-block mb-6 relative before:content-[''] before:m-[-0.125rem] before:-z-10 before:inset-0 before:absolute before:bg-gradient-to-t before:from-[#1f2937] before:via-[#4b5563] before:to-[#1f2937] before:rounded-full">
                <div className="text-gray-400">
                  Launching Infinite Workspaces.{" "}
                  <a
                    href="#"
                    className="text-blue-500 font-medium inline-flex items-center group"
                  >
                    Learn more
                    <ArrowRight
                      className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }} // Start with zoomed-in (scale: 1.2)
              animate={{ opacity: 1, scale: 1 }} // Animate to the original size (scale: 1)
              transition={{ duration: 0.2, delay: 0.2 }} // Adjusted delay
              className="mb-6 md:text-[5rem] md:text-left text-center md:leading-[1] text-[3.75rem] leading-[1.166] tracking-tight font-bold font-uncut text-white"
            >
              Where the world builds{" "}
              <em className="italic tracking-normal">software</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.1 }} // Start with zoomed-in (scale: 1.2)
              animate={{ opacity: 1, scale: 1 }} // Animate to the original size (scale: 1)
              transition={{ duration: 0.2, delay: 0.3 }} // Adjusted delay
              className="text-gray-400 text-xl leading-7 tracking-tight text-center md:text-left text-balance mb-10 "
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }} // Start with zoomed-in (scale: 1.2)
              animate={{ opacity: 1, scale: 1 }} // Animate to the original size (scale: 1)
              transition={{ duration: 0.2, delay: 0.4 }} // Adjusted delay
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Button className="group shadow-lg sm:w-auto transition-all duration-300 ease-in-out text-white bg-gradient-to-t from-[#2563eb] to-[#60a5fa] hover:to-[#3b82f6] !px-6 !py-6 text-base  leading-6 w-full">
                Get started for free
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
              <Button className="group shadow-lg w-full sm:w-auto hover:to-[#1f2937] text-white bg-gradient-to-t from-[#1f2937] to-[#374151] !px-6 !py-6 text-base  leading-6">
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
