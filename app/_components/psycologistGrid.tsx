"use client";
import { useState } from "react";
import PsychologistCard from "./psycologistCard";
import { psycatrists } from "../_constants";
import ToggleAvaliable from "./avaliableToggle";

import {
  MagnifyingGlassIcon,
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

const ITEMS_PER_PAGE = 6;

const PyscologistsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPsychologists = psycatrists.slice(startIndex, endIndex);

  const totalPages = Math.ceil(psycatrists.length / ITEMS_PER_PAGE);

  return (
    <section className="py-12 px-20 text-center">
      <h1 className="text-white text-heading_1 uppercase font-bold">
        Meet our Psychologists
      </h1>
      <input
        type="search"
        placeholder="Search Psychologist (Name or Email)"
        className="px-24 py-5 border border-custum-primary_50 mt-12 text-heading_6 w-[1000px] text-center rounded-full bg-gray-200"
      />
      <div className="flex items-center gap-x-[700px]">
        <ToggleAvaliable />
        <MagnifyingGlassIcon className="w-10 relative bottom-14 text-custum-gray_25" />
      </div>

      <div className="grid grid-cols-3 gap-0 pt-12">
        {currentPsychologists.map((psyc) => (
          <PsychologistCard key={psyc.name} {...psyc} />
        ))}
      </div>
      <div className="flex gap-6 justify-center py-6 bg-custum-primary_25">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="fill-custum-primary_100 w-16"
        >
          <ArrowLeftCircleIcon className="fill-white w-12" />
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="fill-custum-primary_100 w-16"
        >
          <ArrowRightCircleIcon className="fill-white w-12" />
        </button>
      </div>
    </section>
  );
};

export default PyscologistsGrid;
