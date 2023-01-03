import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="data:image/png;base64,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"
        className="rounded-full border border-gray-500 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
