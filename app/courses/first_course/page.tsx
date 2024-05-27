// pages/page.tsx
"use client";
import React, { useState, ReactNode } from "react";
import Disciplines from "@/components/Links";
import { DragCloseDrawerExample } from "@/components/DrawerButton";
import AltDisciplines from "@/components/AltLinks";

// Define the type for the content parameter
interface AboutBlock {
  title: string;
  onButtonClick: () => void;
}

const handleProgrammingClick = () => {
  console.log("Programming button clicked");
};

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<ReactNode>(null);

  const openDrawerWithContent = (content: ReactNode) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const aboutBlocks: AboutBlock[] = [
    {
      title: "Дискретная математика для программистов",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информатика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии в математике",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },

    {
      title: "Физика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Основы компьютерной алгебры",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Линейная алгебра и теория матриц",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Экономика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Практика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Курсовая",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
  ];

  const altBlocks = [
    {
      title: "Программирование",
      onButtonClick: () =>
        openDrawerWithContent(
          <div className="text-white text-lg space-y-4">
            <div>
              <span className="font-bold">Лабораторная работа 1</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-1-or-PROG-3?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 2</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-2-or-PROG-3?v=1#main.py"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 4</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-4-or-PROG-3?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 5</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-5-or-PROG-3?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 5</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-6-or-PROG-3?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 7</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-7-or-PROG-3?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>

            <div>
              <span className="font-bold">Лабораторная работа 8</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-8-or-PROG-3?v=1#main.py"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
          </div>
        ),
    },

    {
      title: "Дискретные структуры",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Физика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Аналитическая геометрия",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Линейная алгебра и теория матриц",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },

    {
      title: "Математический анализ",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Практика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <Disciplines aboutBlocks={aboutBlocks} semesterNumber="1 семестр" />
      <DragCloseDrawerExample
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        content={drawerContent}
      />

      <AltDisciplines altBlocks={altBlocks} altSemesterNumber="2 семестр" />
    </>
  );
}
