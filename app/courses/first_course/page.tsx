// pages/page.tsx
"use client";
import React, { useState, ReactNode } from "react";
import Disciplines from "@/components/Links";
import DragCloseDrawerExample from "@/components/DrawerButton";
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

  const socialsConfig = [
    {
      rotate: "2.5deg",
      scale: 1.1,
      bgColor: "bg-red-500",
      textColor: "text-white",
      text: "1",
      link: "/courses/first_course/",
    },
  ];

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
          "https://drive.google.com/drive/folders/18bu7wB0GPtQA5vL6dErpzM4ZeWu-NZ8k?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии в математике",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1fXhCEDmSInLBDe6wyy4qYdjsSc0WsDNU?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Программирование",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1EnfGm058UxDSF1bnOWgngijRqIhy6dNG?usp=sharing",
          "_blank"
        ),
    },

    {
      title: "Физика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1zQ1WxcLlv01vO0RgRmtlaqLmfqTRGzNb?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Основы компьютерной алгебры",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1jkwGU9kGHmG--6pep-fgN7rvqWJiWLH-?usp=sharing",
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
          "https://drive.google.com/drive/folders/1TWDHFY6oREeO_kgYb6Y9F5HoMA5a-cLl?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Физика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1zQ1WxcLlv01vO0RgRmtlaqLmfqTRGzNb?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1nLAe6FBXUo-kB8mk6FVdmGKhGO3uSKJf?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Аналитическая геометрия",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1xmfDF1pj_URuZjeHmiT2glPoJAombfn4?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Линейная алгебра и теория матриц",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Tff9oh-DZGKZtMq7WQOHemFZv5YDC71",
          "_blank"
        ),
    },

    {
      title: "Математический анализ",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1PyyjaWeKT8FkU6UyjmZmkb9WkZT7-5Re?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Практика",
      onButtonClick: () =>
        window.open(
          "https://github.com/PuzyrevHarkovskii/PuzyrevHarkovskii.github.io/tree/main/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%20(1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80)",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <Disciplines
        aboutBlocks={aboutBlocks}
        semesterNumber="1 семестр"
        socialsConfig={socialsConfig}
      />
      <DragCloseDrawerExample
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        content={drawerContent}
      />

      <AltDisciplines altBlocks={altBlocks} altSemesterNumber="2 семестр" />
    </>
  );
}
