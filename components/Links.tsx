"use client";
import React, { FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface AboutBlockProps {
  title: string;
  onButtonClick: () => void;
}

interface SocialsConfig {
  rotate: string;
  scale: number;
  bgColor: string;
  textColor: string;
  text: string;
  link: string;
}

const handleButtonClick = () => {
  console.log("Design button clicked");
};

interface DisciplinesProps {
  aboutBlocks: AboutBlockProps[];
  semesterNumber: string;
  socialsConfig: SocialsConfig[];
}

interface BlockProps extends MotionProps {
  className?: string;
  children?: ReactNode;
}

export const Disciplines: FC<DisciplinesProps> = ({
  aboutBlocks,
  semesterNumber,
  socialsConfig,
}) => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock socialsConfig={socialsConfig} />
        <SemesterBlock semesterNumber={semesterNumber} />
        {aboutBlocks.map((block, index) => (
          <AboutBlock
            key={index}
            title={block.title}
            onButtonClick={block.onButtonClick}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Block: FC<BlockProps> = ({ className, children, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock: FC = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Портфолио{" "}
      <div className="text-zinc-400">Пузырев-Харьковский Владислав</div>
    </h1>
  </Block>
);

const SemesterBlock: FC<{ semesterNumber: string }> = ({ semesterNumber }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-5xl">{semesterNumber}</p>
  </Block>
);

const SocialsBlock: FC<{ socialsConfig: SocialsConfig[] }> = ({
  socialsConfig,
}) => (
  <>
    {socialsConfig.map((config, index) => (
      <Block
        key={index}
        whileHover={{
          rotate: config.rotate,
          scale: config.scale,
        }}
        className={`col-span-6 ${config.bgColor} row-span-2`}
      >
        <Link
          href={config.link}
          className={`grid h-full place-content-center text-3xl ${config.textColor}`}
        >
          <h1 className="text-8xl">{config.text}</h1>
        </Link>
      </Block>
    ))}
  </>
);

const AboutBlock: FC<AboutBlockProps> = ({ title, onButtonClick }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>{title}</p>
    <p>
      <span className="text-zinc-400"></span>
    </p>
    <button
      onClick={onButtonClick}
      className="rounded bg-red-500 px-4 text-lg text-white transition-colors hover:bg-red-600"
    >
      Ссылка
    </button>
  </Block>
);

const Logo: FC = () => {
  return (
    <Image
      className="mx-auto mb-12 fill-zinc-50"
      src="/images/rgpu.png"
      alt="Логотип"
      width={50}
      height={50}
    />
  );
};

const Footer: FC = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made by{" "}
        <a href="#" className="text-red-300 hover:underline">
          ✡ app1e.jews
        </a>
      </p>
    </footer>
  );
};

export default Disciplines;
