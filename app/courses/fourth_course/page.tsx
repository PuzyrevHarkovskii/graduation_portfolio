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

  const aboutBlocks: AboutBlock[] = [
    {
      title: "Языки написания спецификаций",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/15wlGlZpIIvipdNKPleI_RGJNqyTyK_Z8?usp=drive_link",
          "_blank"
        ),
    },
    {
      title: "Особенности профессиональной иноязычной коммуникации",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1a80DJSGDMNp5DmN2I9lir3buC0Ud7KUS?usp=sharing",
          "_blank"
        ),
    },
    {
      title:
        "Пакеты прикладных программ для статистической обработки и анализа данных",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/11IYM-xq-xaYaHvHrYvU28mutzu9IN15M?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "IT-рекрутмент",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1krYQ5oP7e7ExQXMn9iU-roAKUVyfm1L4?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Информационные технологии оценки персонала",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1mDyastIQw-v6DLsRDajeM9XkMssTjlu5?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Социальные и профессиональные вопросы информатики и ИТ",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1vJa3x30lh2oyA-rEdBPZidumgLF-D3ov",
          "_blank"
        ),
    },
    {
      title: "Мировые информационные ресурсы и цифровые библиотеки",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1QxfOpQNKDGoPlyvwMZabUfItOJHLuizh?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Научно-исследовательский проект",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/10u3uQoqjuJcizkyovGLKGX5qhclAfBgS?usp=sharing",
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
                href="https://replit.com/@vladpuzyrev/programming-07-theme01-lr01"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 2</span> -
              <a
                href="https://replit.com/@vladpuzyrev/prog7-t1-lr2?v=1"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 3</span> -
              <a
                href="https://replit.com/@vladpuzyrev/LR-7-3"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на Replit
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 4, 5, 6</span> -
              <a
                href="https://github.com/PuzyrevHarkovskii/prog_sem_7/tree/main/%D0%9B%D0%A0%204%2C5%2C6%20-%20django"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на GitHub
              </a>
            </div>
            <div>
              <span className="font-bold">Лабораторная работа 7</span> -
              <a
                href="https://github.com/PuzyrevHarkovskii/prog_sem_7/tree/main/%D0%9B%D0%A0-7"
                target="_blank"
                className="text-blue-500 underline ml-2"
              >
                Ссылка на GitHub
              </a>
            </div>
          </div>
        ),
    },

    {
      title:
        "Информационные средства и технологии инженерных и научных расчетов",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1j2ZiteSQGNCXXxKdAl6kK2CmjzjHvtqq?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Инструментальные средства программирования",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1yi0N0n9EpeAVIVOnEnqa5UzJ13gT0NN-",
          "_blank"
        ),
    },
    {
      title: "Производственная практика",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1N5xCI9E2UF3vB7s-_xDw0EhYcYHkaXQI?usp=sharing",
          "_blank"
        ),
    },
    {
      title: "Курсовая работа",
      onButtonClick: () =>
        window.open(
          "https://drive.google.com/file/d/1MpiwIqDz1agbRJEgJnuynQk730fz0cp_/view?usp=sharing",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <Disciplines aboutBlocks={aboutBlocks} semesterNumber="8 семестр" />
      <DragCloseDrawerExample
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        content={drawerContent}
      />

      <AltDisciplines altBlocks={altBlocks} altSemesterNumber="7 семестр" />
    </>
  );
}
