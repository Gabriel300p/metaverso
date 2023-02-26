"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import Image from "next/image";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col items-center gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 lg:mt-20 ${styles.flexCenter} `}
      >
        <Image
          src="/get-started.png"
          alt="get-started"
          width={1000}
          height={1000}
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Como o metaverso funciona" />
        <TitleText title={<>Comece agora com apenas alguns cliques</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-y-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
