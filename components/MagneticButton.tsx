"use client";

import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export default function MagneticButton({
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
}: Props) {
  const ref = useMagnetic<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={`btn ${variantClass[variant]} magnetic ${className}`}
    >
      {children}
    </button>
  );
}
