"use client";

import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export default function MagneticLink({ href, variant = "primary", className = "", children }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>();

  return (
    <a ref={ref} href={href} className={`btn ${variantClass[variant]} magnetic ${className}`}>
      {children}
    </a>
  );
}
