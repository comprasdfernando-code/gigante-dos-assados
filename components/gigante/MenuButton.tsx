"use client";

import React from "react";
import clsx from "clsx";

type MenuButtonProps = {
  texto: string;
  ativo?: boolean;
};

export default function MenuButton({ texto, ativo }: MenuButtonProps) {
  return (
    <button
      className={clsx(
        "w-full text-left px-4 py-2 rounded-md mb-1 text-sm font-medium transition",
        ativo
          ? "bg-[#F97316] text-white shadow-md"
          : "text-gray-200 hover:bg-[#1F2933] hover:text-white"
      )}
    >
      {texto}
    </button>
  );
}