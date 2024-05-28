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
      bgColor: "bg-zinc-50",
      textColor: "text-black",
      text: "3",
      link: "/courses/third_course/",
    },
  ];

  const aboutBlocks: AboutBlock[] = [
    {
      title: "Управление программными проектами",
      onButtonClick: () =>
        window.open(
          "https://docs.google.com/document/d/13gGxIpRpJHIk1SRdToKr5ud4LKXovCL_JHsb_V3rzWc/edit?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "IT-менеджмент",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1WEFyK1he6h6O-1-nJzyT3KoVHJWLL1u1?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Основы бизнес-информатики",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1aTrCSUJvcPdwQP6WDWKehcCeGxctAy8x?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии в изучении иностранных языков",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1hUyIePFsfUGTYpLKDlkO8zj7M592v5eq?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Математические основы компьютерной графики",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1ZDdvj7zkqroSSWiaMZsp8WADpkddublj?usp=sharing",
          "_blank"
        ),
    },

    {
      title: "Программирование",
      onButtonClick: () =>
        openDrawerWithContent(
          <div className="text-white text-xl space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 1</h2>
              <a
                href="https://replit.com/@vladpuzyrev/progh5-t1-lr1?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 2</h2>
              <a
                href="https://replit.com/@vladpuzyrev/progh5-t1-lr2?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 3</h2>
              <a
                href="https://replit.com/@vladpuzyrev/progh5-t1-lr2?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 4</h2>
              <a
                href="https://replit.com/@vladpuzyrev/sem5-lr4-fib?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 5</h2>
              <a
                href="https://replit.com/@vladpuzyrev/prog5-t3-lr5?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 5</h2>
              <a
                href="https://replit.com/@vladpuzyrev/DistinctRareBundledsoftware-API?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Лабораторная работа 6</h2>
              <a
                href="https://replit.com/@vladpuzyrev/prog5-mvc-basic-realization?v=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ссылка на Replit
              </a>
            </div>
          </div>
        ),
    },
    {
      title: "Курсовая работа",
      onButtonClick: () =>
        window.open(
          "https://docs.google.com/document/d/16Hd_Tt39ng35Q815NLBmIRcfB3_X6aGqIvsj1X2q248/edit?usp=sharing",
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
                href="https://replit.com/@vladpuzyrev/ClassicIntelligentEvaluations?v=1#main.py"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 2</span> -
              <a
                href="https://replit.com/@vladpuzyrev/sem6-t1-lr2?v=1#main.py"
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
      title: "Визуализация данных и инфографика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1N2MemKgXnw6DWqOAfv_P7WeD_MHbqN3Z?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Компьютерная графика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1WJnoNLYaz5DRf97hR13MdEtx04zQIpmJ",
          "_blank"
        ),
    },
    {
      title: "Основы электронного управления",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1Zua-GTQgKHU7FhSsZmG8NWVUtpP1MFq3",
          "_blank"
        ),
    },
    {
      title: "Практический курс профессионально-ориентированного перевода",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1rXjSII9BZJsOYye-sZntuDmT54QJIXWL?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии и системы бизнес-аналитики",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1-NyT5fEG5PipjaHdn7BbP7FHyy4CLC50?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Основы корпоративного электронного обучения",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1V1X-ppg_hBacltZgIPh4kGuATXcKxbbx",
          "_blank"
        ),
    },
    {
      title: "Инженерная графика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1_oXE0yvaOWOFnqMKR33we9BzfuELZMnI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Защита информации",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1yVFrB_nXveclYlD4TiyrJMk4IP-q5PX0?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Схемотехника цифровых устройств",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1r7otR0eKsjwivpOJe2PB7baV3eU3872K?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Электротехника",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1KaWBdbYad66wxueCY88gYG01kn7vLC0W?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Физическая культура и спорт",
      onButtonClick: () =>
        window.open(
          "https://docs.google.com/document/d/13QDyfh8-7k2d2A0bxIm80ODFLcE-s66rfxt9J2Qo5IQ/edit?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Производственная практика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1smeXkS0ha2KvrtKW4W-cjkKBJFA7jBT9?usp=sharing",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <Disciplines
        aboutBlocks={aboutBlocks}
        semesterNumber="5 семестр"
        socialsConfig={socialsConfig}
      />
      <DragCloseDrawerExample
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        content={drawerContent}
      />

      <AltDisciplines altBlocks={altBlocks} altSemesterNumber="6 семестр" />
    </>
  );
}
