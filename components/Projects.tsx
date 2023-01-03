import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2
            }}
            whileInView={{
              opacity:1, y:0
            }}
            viewport={{once:true}}
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4-xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                tempora quasi quibusdam fugit illum eligendi veritatis
                cupiditate fugiat voluptas placeat autem quidem, voluptate
                sapiente ab assumenda. Sunt voluptatibus ipsum veniam ipsa nobis
                et tempore earum odio quia, quidem eius officia ad accusamus,
                distinctio beatae dolores quibusdam. Sunt asperiores quod qui?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#c29129dd] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
