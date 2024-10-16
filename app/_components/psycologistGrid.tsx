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

const ITEMS_PER_PAGE = 3;

const PyscologistsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPsychologists = psycatrists.slice(startIndex, endIndex);
  const totalPages = Math.ceil(psycatrists.length / ITEMS_PER_PAGE);

  return (
    <>
      <h2 className="text-custum-primary_100 text-heading_2 uppercase ">
        Meet our Psychologists
      </h2>
      <input
        type="search"
        placeholder="Search Psychologist (Name or Email)"
        className="px-24 py-5 mt-12 text-heading_6 w-[1000px] text-center rounded-full bg-custum-primary_10"
      />
      <div className="flex items-center gap-x-[700px]">
        <ToggleAvaliable />
        <MagnifyingGlassIcon className="w-10 relative bottom-14 text-custum-gray_25" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="w-16 mt-12"
        >
          <ArrowLeftCircleIcon className="fill-custum-primary_25 w-12" />
        </button>
        <div className="flex gap-0 pt-12">
          {currentPsychologists.map((psyc) => (
            <PsychologistCard key={psyc.name} {...psyc} />
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="w-16 mt-12 ml-5"
        >
          <ArrowRightCircleIcon className="fill-custum-primary_25 w-12" />
        </button>
      </div>
    </>
  );
};

export default PyscologistsGrid;
