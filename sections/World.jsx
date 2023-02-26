"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-8`}
    >
      <TypingText
        title="| Pessoas ao redor do mundo"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Rastreie amigos ao seu redor <br /> e convide-os para jogar juntos
            <br /> no mesmo mundo
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          width={2500}
          height={2500}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[20rem] right-6 lg:right-20 lg:bottom-20">
          <Image
            src="/people-01.svg"
            alt="people"
            width={2500}
            height={2500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-2 left-20 lg:top-10 ">
          <Image
            src="/people-02.svg"
            alt="people"
            width={2500}
            height={2500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/3 left-[20%] md:left-[40%]">
          <Image
            src="/people-03.svg"
            alt="people"
            width={2500}
            height={2500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[32%] right-[65%] p-[6px]">
          <Image
            src="/card-world-1.svg"
            alt="people"
            width={300}
            height={300}
            className="lg:visible hidden"
          />
        </div>
        <div className="absolute bottom-[48%] left-[60%] p-[6px]">
          <Image
            src="/card-world-2.svg"
            alt="people"
            width={350}
            height={350}
            className="lg:visible hidden"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
