"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white mb-4'>
              IntelliWEalth Advisors{" "}
              <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Where Intelligence Meets
                Wealth.
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/taskmanage.jpg`}
          alt='hero'
          height={320}
          width={700}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default Hero;
