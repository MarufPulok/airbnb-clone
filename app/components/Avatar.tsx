"use client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
    />
  );
}
