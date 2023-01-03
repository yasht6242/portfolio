import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -500,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://cdn.myanimelist.net/images/characters/9/284122.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7ABBA]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm Yash. Currently I am pursuing Bachelor of Technology in Computer
          Science from Oriental College of Technology. As far as my skills are
          concerned I have learnt JavaScript, Reacts JS, C++, HTML, CSS and
          Python. I have used these skills to make various projects. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Accusamus deleniti nulla
          asperiores aut, provident adipisci, magni, ipsum ex exercitationem
          molestiae facilis veniam praesentium quo ipsa. Nobis hic natus
          voluptatibus reiciendis numquam consectetur qui dolorum placeat quas
          ex autem illo aperiam, consequatur ratione et eaque nesciunt
          laboriosam mollitia non quam sit!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
