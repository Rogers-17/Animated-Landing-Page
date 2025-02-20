"use client"
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react'

export const Hero = () => {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  

  return (
    <section ref={sectionRef} className='pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]'>
      <div className="container">
    <div className='md:flex items-center'>
      <div className='md:w-[478px]'>
      <div className="hidden lg:block md:block text-sm inline-flex border-[#222]/10
      px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
      <h1 className="tag">Pathway to productivity</h1>
      <p className="text-xl text-[#010D3E] tracking-tight mt-6">
        Celebrate the joy of accomplishment with an app designed
        to track your progress, motivate your efforts, and Celebrate
        your success.
      </p>
      <div className="flex gap-1 items-center mt-[30px]">
        <button className="btn">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
          <ArrowIcon className="h-5 w-5"/>
          </button>
      </div>
    </div>
    <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
      <motion.img src={cogImage.src} alt='Cog Imgae' 
      className='md:absolute h-full w-auto md:max-w-none md:-left-6 lg:left-0'
      animate={{
        translateY: [-30, 30]
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      }}
      />
      <motion.img src={cylinderImage.src} alt='cylinder image' height={220} width={220}
      className='hidden md:block -top-8 -left-32 md:absolute'
      style={{
        translateY: translateY,
      }}
      />
      <motion.img src={noodleImage.src}  width={220} alt='Noodle img'
      className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
      style={{
        rotate: 30,
        translateY: translateY,
      }}
      />
    </div>
      </div>
      </div>
    </section>
  );
};
