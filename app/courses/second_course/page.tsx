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
      rotate: "-2.5deg",
      scale: 1.1,
      bgColor: "bg-green-600",
      textColor: "text-white",
      text: "2",
      link: "/courses/second_course/",
    },
  ];

  const aboutBlocks: AboutBlock[] = [
    {
      title: "Информатика и физика для инженеров",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1HC_hIcdQj8Up4pCqU6050SX9_qm6jFhH?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Физика полупроводников",
      onButtonClick: () =>
        window.open(
          "https://docs.google.com/document/d/1hKawNdHRjtV6GPzHUubgln7QqOjQroMPpE_e_d7Uix8/edit?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Анализ данных и основы Data science",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1SFe-z_68Q75NXFpn3EMZZlEisAU2e7WM?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Вычислительная математика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/19Og-Dl1M0GWisZW7cT4A35jdTIdQANoa?usp=sharing",
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
      title: "Вычислительная техника",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1Zua-GTQgKHU7FhSsZmG8NWVUtpP1MFq3",
          "_blank"
        ),
    },
    {
      title: "Операционные системы",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1-IE2FtzFzwk-pQo0k0_RbIWLZsVZwCq6?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Проектирование и разработка веб-решений",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1-NyT5fEG5PipjaHdn7BbP7FHyy4CLC50?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Анализ данных и основы Data science",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1V1X-ppg_hBacltZgIPh4kGuATXcKxbbx",
          "_blank"
        ),
    },
    {
      title: "Технологии компьютерного моделирования",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <Disciplines
        aboutBlocks={aboutBlocks}
        semesterNumber="3 семестр"
        socialsConfig={socialsConfig}
      />
      <DragCloseDrawerExample
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        content={drawerContent}
      />

      <AltDisciplines altBlocks={altBlocks} altSemesterNumber="4 семестр" />
    </>
  );
}
