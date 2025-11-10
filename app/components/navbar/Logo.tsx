"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="hidden md:flex items-center gap-2 cursor-pointer group"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        {/* House shape */}
        <path
          d="M20 8L8 18V32C8 33.1046 8.89543 34 10 34H16V26C16 24.8954 16.8954 24 18 24H22C23.1046 24 24 24.8954 24 26V34H30C31.1046 34 32 33.1046 32 32V18L20 8Z"
          fill="#FF385C"
          className="transition-colors group-hover:fill-[#E31C5F]"
        />
        {/* Hub/connection circles */}
        <circle cx="20" cy="20" r="3" fill="white" />
        <circle cx="12" cy="24" r="2" fill="white" opacity="0.8" />
        <circle cx="28" cy="24" r="2" fill="white" opacity="0.8" />
        {/* Connection lines */}
        <path
          d="M20 20L12 24M20 20L28 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <span className="text-xl font-bold text-[#FF385C] group-hover:text-[#E31C5F] transition-colors">
        StayHub
      </span>
    </div>
  );
}
