"use client";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface AltAboutBlockProps {
  title: string;
  onButtonClick: () => void;
}

const handleAltButtonClick = () => {
  console.log("Alternative design button clicked");
};

interface AltDisciplinesProps {
  altBlocks: AltAboutBlockProps[];
  altSemesterNumber: string;
}

interface AltBlockProps {
  className?: string;
  children?: ReactNode;
}

export const AltDisciplines: FC<AltDisciplinesProps> = ({
  altBlocks,
  altSemesterNumber,
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
        <AltSemesterBlock semesterNumber={altSemesterNumber} />
        {altBlocks.map((block, index) => (
          <AltAboutBlock
            key={index}
            title={block.title}
            onButtonClick={block.onButtonClick}
          />
        ))}
      </motion.div>
      <AltFooter />
    </div>
  );
};

const AltBlock: FC<AltBlockProps> = ({ className, children, ...rest }) => {
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

const AltHeaderBlock: FC = () => (
  <AltBlock className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Портфолио{" "}
      <div className="text-zinc-400">Пузырев-Харьковский Владислав</div>
    </h1>
  </AltBlock>
);

const AltSemesterBlock: FC<{ semesterNumber: string }> = ({
  semesterNumber,
}) => (
  <AltBlock className="col-span-12 text-3xl leading-snug">
    <p className="text-5xl">{semesterNumber}</p>
  </AltBlock>
);

const AltAboutBlock: FC<AltAboutBlockProps> = ({ title, onButtonClick }) => (
  <AltBlock className="col-span-12 text-3xl leading-snug">
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
  </AltBlock>
);

const AltFooter: FC = () => {
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

export default AltDisciplines;
